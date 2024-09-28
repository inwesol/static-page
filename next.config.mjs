/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
          },
        ],
      },
    output: 'export',
    distDir: 'dist',
};

export default nextConfig;
