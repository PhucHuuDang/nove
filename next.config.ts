import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nove-nextjs-template.vercel.app",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
