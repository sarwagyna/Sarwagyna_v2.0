import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://flowise-sarwagyna.up.railway.app https://cdn.jsdelivr.net https://core.sanity-cdn.com https://sanity-cdn.com",
              "script-src-elem 'self' 'unsafe-inline' https://flowise-sarwagyna.up.railway.app https://cdn.jsdelivr.net https://core.sanity-cdn.com https://sanity-cdn.com",
              "connect-src 'self' https://flowise-sarwagyna.up.railway.app wss://flowise-sarwagyna.up.railway.app https://*.api.sanity.io wss://*.api.sanity.io https://core.sanity-cdn.com https://sanity-cdn.com https://*.sanity.io",
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
