import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",

              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://core.sanity-cdn.com https://sanity-cdn.com",
              "script-src-elem 'self' 'unsafe-inline' https://core.sanity-cdn.com https://sanity-cdn.com",

              "connect-src 'self' https://*.api.sanity.io https://*.sanity.io wss://*.api.sanity.io wss://*.sanity.io https://core.sanity-cdn.com https://sanity-cdn.com https://hzvhbnohuiodjhndotpb.supabase.co wss://hzvhbnohuiodjhndotpb.supabase.co",

              "style-src 'self' 'unsafe-inline' https://core.sanity-cdn.com https://sanity-cdn.com https://fonts.googleapis.com",
              "style-src-elem 'self' 'unsafe-inline' https://core.sanity-cdn.com https://sanity-cdn.com https://fonts.googleapis.com",

              "font-src 'self' data: https://fonts.gstatic.com https://core.sanity-cdn.com https://sanity-cdn.com",

              "img-src 'self' data: blob: https:",
              "frame-src 'self' https://*.sanity.io",
              "worker-src 'self' blob:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;