/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ubisoft-avatars.akamaized.net'],
  }
}

module.exports = nextConfig
