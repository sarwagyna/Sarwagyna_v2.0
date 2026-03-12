import { Outlet, useLocation } from 'react-router-dom';
import PillNav from './PillNav';
import GraphyFooter from './Footer';
import { useEffect } from 'react';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

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

      <PillNav
        logo="/favicon.svg"
        logoAlt="Sarwagyna Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'AI & IT', href: '/ai-it' },
          { label: 'About', href: '/holding-company' },
          { label: 'Products', href: '/products' },
          { label: 'Partner', href: '/partner' },
          { label: 'Careers', href: '/careers' }
        ]}
        cta={{ label: 'Contact', href: '/contact' }}
        activeHref={location.pathname}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-max! px-0!"
        baseColor="var(--color-primary)"
        pillColor="var(--color-surface)"
        hoveredPillTextColor="var(--color-primary)"
        pillTextColor="var(--color-text)"
      />
      <main id="main-content" className="grow relative z-10">
        <Outlet />
      </main>
      {/* Footer */}
      <div className="relative z-10" style={{ color: '#0D1F1A' }}>
        <GraphyFooter />
      </div>
    </div>
  );
}
