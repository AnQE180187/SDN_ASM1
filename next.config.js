/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com', // Cloudinary domain
      'th.bing.com',        // Bing images
      'images.unsplash.com', // Unsplash images
      'plus.unsplash.com',   // Unsplash plus
      'images.pexels.com',   // Pexels images
      'img.freepik.com',     // Freepik images
      'cdn.pixabay.com',     // Pixabay images
    ],
  },
};

module.exports = nextConfig; 