/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "_next",
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
