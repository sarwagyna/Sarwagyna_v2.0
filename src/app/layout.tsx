'use client';

import './globals.css';
import Script from 'next/script';
import PillNav from '@/components/PillNav';
import GraphyFooter from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Sarwagyna Pvt Ltd." />
        <title>Sarwagyna Pvt Ltd</title>
        <meta name="description" content="India's emerging multi-industry powerhouse delivering enterprise-grade AI, and SaaS products." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sarwagyna: India's Next-Gen Multi-Industry Company" />
        <meta property="og:description" content="Discover Sarwagyna Pvt Ltd. We build enterprise AI solutions, manage global operations, and develop scalable SaaS products." />
        <meta property="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <ThemeProvider>
          <LayoutShell>{children}</LayoutShell>
        </ThemeProvider>

      </body>
    </html>
  );
}

function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Handle hash scrolling
    const hash = window.location.hash?.replace('#', '');
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-bg text-text dark:bg-bg-dark dark:text-white relative selection:bg-white/20 transition-colors duration-300">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg">Skip to content</a>
      {/* Secondary Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none dark:bg-[#050509] bg-black/5 opacity-20 transition-colors duration-300" />

      {/* Ambient Background Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="orb-bg" />

        {/* SVG Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        {/* Mandala / Lotus SVG Accents */}
        <div className="absolute -top-40 -right-32 w-80 h-80 opacity-[0.08] dark:opacity-[0.12] mix-blend-soft-light">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <g stroke="rgba(107,127,191,0.8)" strokeWidth="0.6" fill="none">
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="40" />
              <circle cx="100" cy="100" r="20" />
              <path d="M100 30 Q115 60 140 70 Q115 80 100 110 Q85 80 60 70 Q85 60 100 30Z" />
              <path d="M100 50 Q110 70 125 75 Q110 80 100 100 Q90 80 75 75 Q90 70 100 50Z" />
            </g>
          </svg>
        </div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 opacity-[0.10] dark:opacity-[0.16] mix-blend-soft-light">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <g stroke="rgba(232,98,26,0.75)" strokeWidth="0.6" fill="none">
              <circle cx="100" cy="100" r="55" />
              <circle cx="100" cy="100" r="35" />
              <path d="M100 35 Q125 65 150 90 Q125 95 100 135 Q75 95 50 90 Q75 65 100 35Z" />
              <path d="M100 65 Q115 85 135 95 Q115 100 100 125 Q85 100 65 95 Q85 85 100 65Z" />
            </g>
          </svg>
        </div>
      </div>

      {pathname !== '/links' && (
        <PillNav
          logo="/favicon.svg"
          logoAlt="Sarwagyna Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'AI & IT', href: '/ai-it' },
            { label: 'About', href: '/holding-company' },
            { label: 'Products', href: '/products' },
            { label: 'Partner', href: '/partner' },
            { label: 'Blog', href: '/blog' },
            { label: 'Careers', href: '/careers' }
          ]}
          cta={{ label: 'Contact', href: '/contact' }}
          activeHref={pathname ?? undefined}
          className="fixed top-4 left-1/2 -translate-x-1/2 w-max! px-0!"
          baseColor="var(--color-primary)"
          pillColor="var(--color-surface)"
          hoveredPillTextColor="var(--color-primary)"
          pillTextColor="var(--color-text)"
        />
      )}
      <main id="main-content" className="grow relative z-10">
        {children}
      </main>
      {/* Footer */}
      {pathname !== '/links' && (
        <div className="relative z-10" style={{ color: '#0D1F1A' }}>
          <GraphyFooter />
        </div>
      )}
    </div>
  );
}
