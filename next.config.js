/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "10.234.11.198",
      "http://10.234.11.198:1337/",
      "http://localhost:1337/",
    ],
  },
};

module.exports = nextConfig;
