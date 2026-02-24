import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/locations", destination: "/contact", permanent: true }];
  },
};

export default nextConfig;
