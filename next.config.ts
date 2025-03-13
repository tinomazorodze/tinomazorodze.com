import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/tech",
        destination: "/personal-tech",
        permanent: true,
      },
      {
        source: "/coding",
        destination: "/coding-stack",
        permanent: true,
      },
    ];
  },

  // Note: Using the Rust compiler means we cannot use
  // rehype or remark plugins. For my app, this is fine.
  experimental: {
    mdxRs: true,
    viewTransition: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
