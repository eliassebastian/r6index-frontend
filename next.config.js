/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ubisoft-avatars.akamaized.net', 'staticctf.ubisoft.com', 'trackercdn.com'],
  }
}

module.exports = nextConfig
