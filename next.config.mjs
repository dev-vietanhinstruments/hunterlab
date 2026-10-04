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
            {
            protocol: 'https',
            hostname: 'hunterlab-prod.s3.amazonaws.com',
            },
        ],
    },
};

export default nextConfig;
