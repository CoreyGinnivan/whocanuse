/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  trailingSlash: true,
  // For reference: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
      // These are all the locales you want to support in your application
    locales: ["en", "de"],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
  }
}

export default nextConfig