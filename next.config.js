/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isExport = process.env.NODE_ENV === "production";

const nextConfig = {
  output: isExport ? "export" : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath
};

module.exports = nextConfig;
