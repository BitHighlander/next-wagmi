/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@/constants/providers': path.resolve(__dirname, 'src/constants/providers'),
            '@/lib/hooks': path.resolve(__dirname, 'src/lib/hooks'),
            '@/wagmi': path.resolve(__dirname, 'src/wagmi')  // Ensure this alias is added
        }
        return config
    },
}

const path = require('path')

module.exports = nextConfig
