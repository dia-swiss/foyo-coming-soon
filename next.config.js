/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/internal',
        destination: 'http://46.101.209.133/'
      },
      {
        source: '/internal(.*)',
        destination: 'http://46.101.209.133/$1'
      }
    ]
  }
}
