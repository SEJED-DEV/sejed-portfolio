const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000;

function getCacheKey(repo) {
  return `gh_${repo.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const repo = searchParams.get('repo');

  if (!repo) {
    return Response.json({ error: 'Missing repo parameter' }, { status: 400 });
  }

  const cacheKey = getCacheKey(repo);
  const cached = cache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return Response.json(cached.data, {
      headers: {
        'Cache-Control': 'public, max-age=300, s-maxage=600',
        'X-Cache': 'HIT',
      },
    });
  }

  try {
    const headers = { 'Accept': 'application/vnd.github.v3+json' };
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });

    if (!res.ok) {
      if (res.status === 403 || res.status === 429) {
        const retryAfter = res.headers.get('Retry-After') || '60';
        return Response.json(
          { error: 'Rate limited', retryAfter: parseInt(retryAfter) },
          { status: 429, headers: { 'Retry-After': retryAfter } }
        );
      }
      return Response.json({ error: 'Repo not found' }, { status: 404 });
    }

    const data = await res.json();
    const result = {
      stars: data.stargazers_count,
      forks: data.forks_count,
      language: data.language,
      description: data.description,
      topics: data.topics,
      pushed_at: data.pushed_at,
      open_issues: data.open_issues_count,
      license: data.license?.spdx_id || null,
    };

    cache.set(cacheKey, { data: result, timestamp: Date.now() });

    return Response.json(result, {
      headers: {
        'Cache-Control': 'public, max-age=300, s-maxage=600',
        'X-Cache': 'MISS',
      },
    });
  } catch {
    const stale = cache.get(cacheKey);
    if (stale) {
      return Response.json(stale.data, {
        headers: {
          'Cache-Control': 'public, max-age=60, s-maxage=120',
          'X-Cache': 'STALE',
        },
      });
    }
    return Response.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
