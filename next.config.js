/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ubisoft-avatars.akamaized.net', 'staticctf.ubisoft.com'],
  }
}

module.exports = nextConfig
