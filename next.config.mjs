/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'www.hunterlab.com',
            },
            {
            protocol: 'https',
            hostname: 'hunterlab-production.s3.amazonaws.com',
            },
            {
            protocol: 'https',
            hostname: 'vietanh.vn',
            },
        ],
    },
};

export default nextConfig;
