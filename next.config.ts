import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },


  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    unoptimized: true 
  },
};

export default nextConfig;


