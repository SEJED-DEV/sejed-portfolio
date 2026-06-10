export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const repo = searchParams.get('repo');

  if (!repo) {
    return Response.json({ error: 'Missing repo parameter' }, { status: 400 });
  }

  try {
    const headers = { 'Accept': 'application/vnd.github.v3+json' };
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers,
      next: { revalidate: 300 },
    });

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

    return Response.json(result, {
      headers: {
        'Cache-Control': 'public, max-age=300, s-maxage=600',
      },
    });
  } catch {
    return Response.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
