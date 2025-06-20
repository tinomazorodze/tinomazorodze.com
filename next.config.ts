import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/((?!$).*)", // excludes just the root "/"
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
