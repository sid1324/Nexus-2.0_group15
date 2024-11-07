const withContentlayer = require("next-contentlayer").withContentlayer;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@nexus-ds/react", "@nexus-ds/theme"],
  swcMinify: true,
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  redirects: require("./next-redirect.js"),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ignoreBuildErrors: process.env.IS_VERCEL_ENV === "true",
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "opencollective-production.s3.us-west-1.amazonaws.com",
      "avatars.githubusercontent.com",
      "logo.clearbit.com",
      "i.pravatar.cc",
      "staticg.sportskeeda.com",
    ],
  },
};

module.exports = withContentlayer(nextConfig);
