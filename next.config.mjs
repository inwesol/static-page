/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['images.unsplash.com', 'media.licdn.com'],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "ui.aceternity.com",
          port: "",
          pathname: "/**", // Allow all images from this domain
        },
      ],
    },
  };
  
  export default nextConfig;
  