'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'AI & IT', path: '/ai-it' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-4 left-0 w-full z-50 pointer-events-none">
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6">
        <div
          className={`pointer-events-auto h-[56px] flex items-center justify-between rounded-full px-3 pl-6 transition-all duration-500 ${isScrolled
            ? 'bg-[#0a0a0a] shadow-[0_8px_32px_rgba(0,0,0,0.25)]'
            : 'bg-[#0a0a0a]/95 shadow-[0_4px_20px_rgba(0,0,0,0.15)]'
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-[30px] h-[30px] rounded-full bg-linear-to-br from-amber-400 via-orange-500 to-orange-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="M4.93 4.93l1.41 1.41" />
                <path d="M17.66 17.66l1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="M4.93 19.07l1.41-1.41" />
                <path d="M17.66 6.34l1.41-1.41" />
              </svg>
            </div>
            <span className="text-[15px] font-display font-bold tracking-tight text-white">
              Sarwagyna
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-[13.5px] font-medium px-4 py-2 rounded-full transition-all duration-200 ${pathname === link.path
                  ? 'text-white bg-white/10'
                  : 'text-white/60 hover:text-white hover:bg-white/6'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side — CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center text-[13px] font-semibold text-white border border-white/25 rounded-full px-5 py-2 transition-all duration-200 hover:bg-white hover:text-black hover:border-white"
            >
              Get in Touch
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white/70 hover:text-white p-2 rounded-full transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="absolute top-[72px] left-4 right-4 sm:left-6 sm:right-6 max-w-[1100px] mx-auto bg-[#0a0a0a] rounded-2xl z-40 lg:hidden overflow-hidden border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.4)] pointer-events-auto"
            >
              <nav id="mobile-menu" className="p-3 space-y-1" role="navigation" aria-label="Mobile">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.path}
                      className={`block px-4 py-3.5 text-[15px] font-medium rounded-xl transition-all ${pathname === link.path
                        ? 'bg-white/10 text-white'
                        : 'text-white/55 hover:bg-white/6 hover:text-white'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="px-3 pb-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full text-[14px] font-semibold text-white border border-white/20 rounded-xl py-3.5 transition-all hover:bg-white hover:text-black hover:border-white"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
