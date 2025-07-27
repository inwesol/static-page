/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui.aceternity.com",
        port: "",
        pathname: "/**", // Allow all images from this domain
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Allow all images from this domain
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
        pathname: "/**", // Allow all images from this domain
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**", // Allow all images from this domain
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
        pathname: "/**", // Allow all images from this domain
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**", // Allow all images from this domain
      },
    ],
  },
};

export default nextConfig;
