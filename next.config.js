/** @type {import('next').NextConfig} */
const nextConfig = {

  env: {
    USER: process.env.USER,
    PASS: process.env.PASS,
    DATABASE_URL: process.env.DATABASE_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
