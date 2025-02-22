import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import withBundleAnalyzerFn from "@next/bundle-analyzer";


const withBundleAnalyzer = withBundleAnalyzerFn({
  enabled: process.env.ANALYZE === "true",
});


const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  output: "standalone",

  swcMinify: true,
  experimental: {
    turbo: {
      resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
      
    },
    // optimizePackageImports: ['icon-library'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["jsx", "js", "ts", "tsx", "mdx", "md", "html", "htm", "mjs"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
      {
        hostname :"avatar.vercel.sh",
        protocol: "https",
      },
      {
        hostname :"startupfa.me",
        protocol: "https",
      },
      {
        hostname :"twelve.tools",
        protocol: "https",
      }
    ],
  },
  webpack(config) {
    return config;
  },
};


export default withMDX(withBundleAnalyzer(nextConfig));
