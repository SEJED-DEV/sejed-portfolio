import './globals.css';

export const metadata = {
  title: 'Sejed Trabelsi — Full Stack Developer',
  description: 'Full Stack Developer from Tunisia. 17 years old, 6+ years of experience. Specializing in Node.js, Next.js, and building scalable web applications and bots.',
  keywords: ['Sejed Trabelsi', 'Full Stack Developer', 'Node.js', 'Next.js', 'Tunisia', 'Web Developer'],
  authors: [{ name: 'Sejed Trabelsi' }],
  openGraph: {
    title: 'Sejed Trabelsi — Full Stack Developer',
    description: 'Full Stack Developer from Tunisia with 6+ years of experience.',
    type: 'website',
  },
  icons: {
    icon: '/code-icon.png',
    apple: '/code-icon.png',
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
