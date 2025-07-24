import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/n/personal-tech",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
