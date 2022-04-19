/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["kr", "en-US"],
    defaultLocale: "kr",
    localeDetection: false,
  },
};

module.exports = nextConfig;
