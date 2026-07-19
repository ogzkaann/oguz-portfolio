import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "oguzdere\\.vercel\\.app" }],
        destination: "https://okdere.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "oguz-portfolio\\.vercel\\.app" }],
        destination: "https://okdere.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
