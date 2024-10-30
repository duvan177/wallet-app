import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // {
          //   key: "Content-Security-Policy",
          //   value:
          //     "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
          // },
          // {
          //   key: "X-Frame-Options",
          //   value: "DENY",
          // },
          // {
          //   key: "X-Content-Type-Options",
          //   value: "nosniff",
          // },
          // {
          //   key: "Referrer-Policy",
          //   value: "no-referrer",
          // },
          // {
          //   key: "Permissions-Policy",
          //   value: "camera=(), microphone=(), geolocation=()",
          // },
        ],
      },
    ];
  },
};

export default nextConfig;
