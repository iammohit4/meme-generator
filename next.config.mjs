/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.memegen.link'
            },
        ],
    },
};

export default nextConfig;
