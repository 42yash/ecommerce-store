/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    domains: [
      "tailwindui.com",
      "res.cloudinary.com"
    ]
  }
}

module.exports = nextConfig

