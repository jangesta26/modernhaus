import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['readdy.ai'],
},
  allowedDevOrigins: [
    'http://10.69.71.74:3000',
  ],
};

export default nextConfig;
