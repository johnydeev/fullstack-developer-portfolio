/** @type {import('next').NextConfig} */
const nextConfig = {

  env: {
    NEXT_PUBLIC: process.env.NEXT_PUBLIC,
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
