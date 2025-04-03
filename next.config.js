/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.seobotai.com",
      },
      {
        protocol: "https",
        hostname: "mars-images.imgix.net",
      },
    ],
  },
};

module.exports = nextConfig;
