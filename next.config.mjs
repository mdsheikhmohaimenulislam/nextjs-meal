/** @type {import('next').NextConfig} */
const nextConfig ={
  images: {
    //  domains: ["www.themealdb.com"],
        remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
    ],
  },
   async redirects() {
    return [
      {
        source: '/products/add',
        destination: '/dashboard/products/add',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
