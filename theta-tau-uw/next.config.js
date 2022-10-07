/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    domains: [
      'cdn.contentful.com',
      'images.ctfassets.net',
    ]
  }
}

module.exports = nextConfig
