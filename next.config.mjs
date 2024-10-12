import {createVanillaExtractPlugin} from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            'kr.object.ncloudstorage.com',
        ],
    },
};

export default withVanillaExtract(nextConfig);
