/** @type {import('next').NextConfig} */
const nextConfig = {
  // as switched to vercel deployment
  // output: 'export', 

// as Cpanel doesn't support image optimization(update now we are no longer using Cpanel and output: 'export')
  images: {
    unoptimized: true, //by this line next.js will not optimize images to save resources and as we are using webp format for all images
  },
};

module.exports = nextConfig;