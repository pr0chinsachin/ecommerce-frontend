/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
};
// module.exports = {
//     images: {
//         domains: ['images.unsplash.com'],
//     },
// }
export default nextConfig;
