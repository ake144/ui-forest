import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
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


