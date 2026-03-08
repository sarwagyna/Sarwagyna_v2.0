import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'AI & IT', path: '/ai-it' },
    { name: 'Products', path: '/products' },
    { name: 'Investors', path: '/investors' },
    { name: 'Contact', path: '/contact' },
  ];

  const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[68px] flex items-center ${
    isScrolled 
      ? 'bg-black/65 backdrop-blur-2xl border-b border-white/[0.09]' 
      : 'bg-transparent border-b border-transparent'
  }`;

  return (
    <header className={navbarClasses}>
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left Zone */}
        <div className="flex items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-display font-extrabold tracking-tight text-white">SARWAGYNA</span>
          </Link>
        </div>

        {/* Center Zone - Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[13.5px] font-medium transition-colors ${
                location.pathname === link.path ? 'text-gradient' : 'text-white/45 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Zone - Desktop */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/contact"
            className="glass-button-primary px-5 py-2 text-sm"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white/80 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[68px] bg-black/95 backdrop-blur-2xl z-40 lg:hidden overflow-y-auto border-t border-white/[0.09]"
          >
            <div className="px-4 pt-8 pb-12 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-4 text-lg font-display font-semibold rounded-xl ${
                    location.pathname === link.path ? 'bg-white/10 text-gradient' : 'text-white/60 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 px-4">
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full glass-button-primary py-4 text-base"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
