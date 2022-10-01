/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shutterstock.com',
        port: '',
      }
    ],
    domains: ['shutterstock.com']
  }
}

module.exports = nextConfig
