import type { NextConfig } from "next";

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  allowedDevOrigins: ["nqzs2g-3000.csb.app"],
} as any;

export default nextConfig;
