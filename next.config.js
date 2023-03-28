/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['ubisoft-avatars.akamaized.net', 'staticctf.ubisoft.com', 'staticctf.akamaized.net', 'trackercdn.com'],
  }
}

module.exports = nextConfig
