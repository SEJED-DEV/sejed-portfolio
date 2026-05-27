/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* swcMinify: true, // This is usually true by default in modern Next.js versions */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
