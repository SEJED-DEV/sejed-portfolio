import './globals.css';

export const metadata = {
  title: 'Sejed Trabelsi — Full Stack Developer',
  description: 'Full Stack Developer from Tunisia. 17 years old, 6+ years of experience. Specializing in Node.js, Next.js, and building scalable web applications and Discord bots serving 2.4M+ users.',
  keywords: ['Sejed Trabelsi', 'Full Stack Developer', 'Node.js', 'Next.js', 'Tunisia', 'Web Developer', 'Discord Bot', 'React', 'sejed.dev'],
  authors: [{ name: 'Sejed Trabelsi', url: 'https://sejed.dev' }],
  creator: 'Sejed Trabelsi',
  metadataBase: new URL('https://sejed.dev'),
  openGraph: {
    title: 'Sejed Trabelsi — Full Stack Developer',
    description: 'Full Stack Developer from Tunisia. 6+ years of experience building scalable Discord bots (2.4M+ users), Next.js web apps, and automation systems.',
    url: 'https://sejed.dev',
    siteName: 'sejed.dev',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Sejed Trabelsi — Full Stack Developer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sejed Trabelsi — Full Stack Developer',
    description: 'Full Stack Developer from Tunisia. 6+ years experience · Node.js · Next.js · Discord Bots · 2.4M+ Users.',
    images: ['/og-preview.png'],
    creator: '@sejeddev',
  },
  icons: {
    icon: '/code-icon.png',
    apple: '/code-icon.png',
    shortcut: '/code-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
