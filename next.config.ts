import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/api/download": ["./private/downloads/**/*"],
  },
};

export default nextConfig;
