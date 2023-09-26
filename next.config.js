/** @type {import('next').NextConfig} */
const path = require("path");
const fs = require("fs");

let nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    domains: ["cdn.sanity.io"],
  },

  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));

    return config;
  },
};

module.exports = nextConfig
