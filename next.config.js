/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC: process.env.NEXT_PUBLIC,
    NEXT_PUBLIC_USER: process.env.NEXT_PUBLIC_USER,
    NEXT_PUBLIC_PASS: process.env.NEXT_PUBLIC_PASS,
    NEXT_PUBLIC_DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
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
