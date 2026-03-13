'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Globe, Ship, ShieldCheck, ArrowRight, Package, TrendingUp, Anchor, FileText } from 'lucide-react';
import Link from 'next/link';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

export default function Trade() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Coral Tint Background */}
        <div className="absolute inset-0 bg-[var(--color-bg)]/5 pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-6">
              GLOBAL TRADE OPERATIONS
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-[80px] font-display font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-[var(--color-text)] block">Connecting Markets.</span>
              <span className="text-gradient block">Without Borders.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-[var(--color-text-secondary)] font-light mb-10 max-w-2xl mx-auto leading-[1.7]">
              End-to-end import and export facilitation. We handle sourcing, logistics, customs compliance, and risk management to streamline your international supply chain.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="glass-button-primary px-8 py-4 text-[var(--color-text)]">
                Discuss Your Supply Chain
              </Link>
              <button onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })} className="glass-button-ghost px-8 py-4 text-[var(--color-text)]">
                View Capabilities
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeIn} className="section-label justify-center mb-4">Core Services</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text)]">
            End-to-End Facilitation
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Globe />, title: "Global Sourcing", desc: "Identifying and vetting reliable suppliers across Asia, Europe, and the Americas. We negotiate pricing and ensure strict quality control standards are met before shipment." },
            { icon: <Ship />, title: "Freight & Logistics", desc: "Optimized routing via ocean, air, and land freight. We manage the entire physical movement of goods, providing real-time tracking and minimizing transit delays." },
            { icon: <ShieldCheck />, title: "Customs & Compliance", desc: "Navigating complex international trade regulations. We handle all documentation, tariffs, and customs clearance to ensure smooth, penalty-free border crossings." }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl group border-t border-t-[var(--color-border-subtle)] flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-bg)]/5 flex items-center justify-center mb-6 text-[var(--color-text)]">
                {service.icon}
              </div>
              <h3 className="text-[22px] font-display font-bold text-[var(--color-text)] mb-4">{service.title}</h3>
              <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.7] flex-grow">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Commodities Grid */}
      <section className="py-[120px] relative">
        <div className="absolute inset-0 bg-[var(--color-bg)]/5 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-4">Sectors</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text)]">
              Key Commodities
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Package />, title: "Electronics", desc: "Consumer electronics, components, and specialized hardware." },
              { icon: <Anchor />, title: "Industrial", desc: "Heavy machinery, raw materials, and manufacturing equipment." },
              { icon: <TrendingUp />, title: "Agriculture", desc: "Bulk commodities, processed foods, and specialized cash crops." },
              { icon: <FileText />, title: "Textiles", desc: "Raw fibers, finished garments, and specialized fabrics." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl text-center flex flex-col items-center justify-center border-t border-t-[var(--color-border-subtle)]"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-bg)]/5 flex items-center justify-center mb-6 text-[var(--color-text)]">
                  {item.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-[var(--color-text)] mb-2">{item.title}</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="glass-panel rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-bg)]/5 to-transparent opacity-50" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text)] mb-6">Ready to expand your market?</h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-10">Partner with Sarwagyna to navigate the complexities of international trade with confidence.</p>
            <Link href="/contact" className="glass-button-primary px-10 py-5 text-lg inline-flex items-center text-[var(--color-text)] hover:text-[var(--color-text)]/80 transition-colors">
              Contact Trade Desk <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
