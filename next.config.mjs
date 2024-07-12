/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  },
};

export default nextConfig;
