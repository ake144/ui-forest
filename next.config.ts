import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx', 
    'md', 'html', 'htm', 'mjs'],


  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    unoptimized: true 
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/
});


export default withMDX(nextConfig)
// export default nextConfig;


