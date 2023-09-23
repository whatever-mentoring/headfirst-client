/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ];
  },
  nextConfig,
};
