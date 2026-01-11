/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable Turbopack
  experimental: {
    turbo: false
  }
};

module.exports = nextConfig;