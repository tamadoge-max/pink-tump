const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["crypto"] = "crypto-browserify";
    config.resolve.alias["stream"] = "stream-browserify";
    config.resolve.alias["vm"] = "vm-browserify";
    config.externals.push('pino-pretty');
    config.externals.push('http');
    config.externals.push('https');
    config.externals.push('zlib');
    return config;
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/5712c57ea7/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === "development") {
  const { setupDevPlatform } = require("@cloudflare/next-on-pages/next-dev");
  setupDevPlatform();
}
module.exports = withBundleAnalyzer(nextConfig);
