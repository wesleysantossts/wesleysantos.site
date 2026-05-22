/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    inlineCss: true,
  },
};

module.exports = nextConfig;
