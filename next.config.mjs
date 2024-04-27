
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: ["cfc24-mass.imgix.net"],
  },
};

export default nextConfig;
