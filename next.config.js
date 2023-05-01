/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    customKey: 'my-value',
  },
  reactStrictMode: true,
  env: {
    SERVICE_KEY: process.env.YOUR_SERVICE_ID,
    TEMPLATE_KEY: process.env.YOUR_TEMPLATE_ID,
    PUBLIC_KEY: process.env.YOUR_PUBLIC_KEY,
  }
}
