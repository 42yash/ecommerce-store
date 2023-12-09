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
  future: { webpack5: true }
}

module.exports = nextConfig

