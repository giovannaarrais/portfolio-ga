import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "uxwing.com"
            },
            {
                protocol: "https",
                hostname: "giovannaarrais.netlify.app"
            },
            {
                protocol: "https",
                hostname: "via.placeholder.com"
            }
        ]
    }
};

export default nextConfig;
