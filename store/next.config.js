/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tailwindui.com",
      "res.cloudinary.com"
    ]
  },
  swcMinify: false,
  reactStrictMode: true,
}

module.exports = nextConfig

