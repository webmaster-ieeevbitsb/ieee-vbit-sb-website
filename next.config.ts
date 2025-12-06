/** @type {import('next').NextConfig} */
const nextConfig = {
  // as switched to vercel deployment
  // output: 'export', 

// as cpanel doesnt soupprt image optimization
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;