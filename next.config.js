/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true" || process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/zewailcity" : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

