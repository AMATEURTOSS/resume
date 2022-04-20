/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ko-KR", "en-US"],
    defaultLocale: "ko-KR",
    localeDetection: false,
  },
};

module.exports = nextConfig;
