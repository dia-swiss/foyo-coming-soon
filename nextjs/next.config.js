/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/internal',
        destination: 'http://46.101.209.133'
      },
      {
        source: '/internal/:path*',
        destination: 'http://46.101.209.133/:path*'
      }
    ]
  }
}
