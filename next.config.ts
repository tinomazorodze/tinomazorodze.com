import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/coding",
        permanent: true,
      },
      {
        source: "/games",
        destination: "/gaming",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
