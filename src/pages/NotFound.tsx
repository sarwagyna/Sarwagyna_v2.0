import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { AlertTriangle } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Page Not Found | Sarwagyna"
        description="The page you’re looking for doesn’t exist. Navigate back to the homepage or explore our divisions."
        ogTitle="404 — Page Not Found"
        ogDescription="This route is not available. Return to the homepage or contact us."
        url="/404"
        canonicalPath="/404"
      />
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-bg)]/5 pointer-events-none" />
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="glass-panel rounded-3xl p-10 md:p-16">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-bg)]/5 border border-[var(--color-border-subtle)] flex items-center justify-center mx-auto mb-6 text-[var(--color-text)]">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-[var(--color-text)] mb-4">Page Not Found</h1>
            <p className="text-[var(--color-text-secondary)] mb-8">
              The page you requested could not be found. Check the URL or use the actions below to continue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="glass-button-primary px-8 py-4 text-center text-[var(--color-text)] hover:text-[var(--color-text)]/80 transition-colors">
                Go to Homepage
              </Link>
              <Link to="/ai-it" className="glass-button-ghost px-8 py-4 text-center text-[var(--color-text)] hover:text-[var(--color-text)]/80 transition-colors">
                Explore AI & IT
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
