/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images:{
    domains: ['127.0.0.1','cdn.tailgrids.com','res.cloudinary.com']
  },
}

module.exports = nextConfig

// module.exports = {
//   images: {
//     domains: ['127.0.0.1','localhost']
//   },
// }