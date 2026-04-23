'use client';

import { motion } from 'framer-motion';

interface LegalPageProps {
  children: React.ReactNode;
}

export default function LegalPage({ children }: LegalPageProps) {
  return (
    <div className="py-24 relative bg-bg">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-text"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
