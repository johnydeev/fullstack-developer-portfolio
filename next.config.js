/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    env: {
      USER: process.env.USER,
      PASS: process.env.PASS,
      DATABASE_URL: process.env.DATABASE_URL,
    },

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
