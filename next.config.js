/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "http://localhost:1337/"],
  },
};

module.exports = nextConfig;
