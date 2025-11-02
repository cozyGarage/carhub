/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      domains: ['cdn.imagin.studio'],
      unoptimized: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    }
  }
  
  module.exports = nextConfig