/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'www.hunterlab.com',
            },
        ],
    },
};

export default nextConfig;
