'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { TrendingUp, Shield, Globe, Zap, ArrowRight, Download, Building2, BarChart3, Users, Briefcase, Layers } from 'lucide-react';
import Link from 'next/link';
import CtaButton from '@/components/ui/CtaButton';

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

export default function Investors() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Gold Tint Background */}
        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-6">
              INVESTOR RELATIONS
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-[80px] font-display font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-white block">Capital. Strategy.</span>
              <span className="text-gradient block">Accelerated Growth.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-white/45 font-light mb-10 max-w-2xl mx-auto leading-[1.7]">
              Sarwagyna's diversified portfolio across high-margin IT services, global trade, and scalable SaaS products creates a resilient, high-growth investment opportunity.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
              <CtaButton onClick={() => document.getElementById('ir-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Request Investor Deck
              </CtaButton>
              <button onClick={() => document.getElementById('thesis')?.scrollIntoView({ behavior: 'smooth' })} className="glass-button-ghost px-8 py-4">
                Explore Our Thesis
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section id="thesis" className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeIn} className="section-label justify-center mb-4">Why Invest in Sarwagyna</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
            The Investment Thesis
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Layers />, title: "Multi-Stream Revenue Resilience", desc: "Our unique structure combines high-margin IT services, steady global trade cash flows, and highly scalable SaaS products. This natural diversification mitigates sector-specific risks while maximizing upside potential." },
            { icon: <TrendingUp />, title: "India's Digital Wave Opportunity", desc: "Positioned at the intersection of India's rapid AI adoption, deepening SaaS penetration, and ambitious $1T trade target. We are building the infrastructure to power the next generation of Indian enterprises." },
            { icon: <Zap />, title: "Capital-Efficient Operating Model", desc: "We leverage our high-margin IT services division to fund the development and growth of our SaaS products. This creates a low-CAC environment and reduces reliance on external capital for product incubation." },
            { icon: <Briefcase />, title: "Scalable Product Portfolio", desc: "Our SaaS products (SarwHub, SarwCal, SarwBill) address critical pain points for modern businesses. Built on modern tech stacks, they offer high gross margins and strong recurring revenue potential." }
          ].map((thesis, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl border-l border-l-white/60 group hover:bg-gradient-to-br hover:from-white/[0.08] hover:to-transparent"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white">
                {thesis.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{thesis.title}</h3>
              <p className="text-[15px] text-white/45 leading-[1.7]">{thesis.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-[120px] relative">
        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-4">By The Numbers</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
              Key Performance Indicators
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "YoY Revenue Growth", value: "145%", desc: "Consistent triple-digit growth across all three major business verticals." },
              { label: "Gross Margin (SaaS)", value: "82%", desc: "High-margin recurring revenue driven by efficient infrastructure." },
              { label: "Client Retention", value: "94%", desc: "Enterprise clients retained across IT services and SaaS products." },
              { label: "Global Markets", value: "15+", desc: "Active trade and service operations spanning North America, Europe, and Asia." },
              { label: "Active Products", value: "3", desc: "Fully launched and monetized SaaS platforms (SarwHub, SarwCal, SarwBill)." },
              { label: "Team Size", value: "50+", desc: "Engineers, trade specialists, and strategists driving execution." }
            ].map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl text-center flex flex-col items-center justify-center"
              >
                <div className="text-5xl font-display font-extrabold text-gradient mb-4">
                  {metric.value}
                </div>
                <h4 className="text-[13px] font-semibold tracking-[0.14em] uppercase text-white/80 mb-2">{metric.label}</h4>
                <p className="text-sm text-white/45">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeIn} className="section-label justify-center mb-4">The Addressable Market</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
            Massive Scale Potential
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { size: "$500B+", market: "Global Enterprise AI", desc: "Rapidly expanding market for custom AI agents, workflow automation, and predictive models." },
            { size: "$1T", market: "India's Trade Target", desc: "Government-backed initiative driving massive growth in import/export logistics and facilitation." },
            { size: "$50B+", market: "India SaaS Market", desc: "Projected value by 2030, driven by domestic digitization and global export of software products." }
          ].map((opp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-[80px] opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="glass-panel p-10 rounded-[40px] text-center relative z-10 h-full flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl font-display font-extrabold text-white mb-2">{opp.size}</div>
                <h4 className="text-lg font-display font-bold text-white/80 mb-4">{opp.market}</h4>
                <p className="text-sm text-white/60 leading-[1.7]">{opp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IR Form */}
      <section id="ir-form" className="py-[120px] max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-white/50" />
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Request Investor Materials</h2>
            <p className="text-white/45">Access our detailed pitch deck, financial projections, and corporate governance reports.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Full Name</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Work Email</label>
                <input type="email" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="jane@fund.com" />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Organization / Fund Name</label>
              <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Acme Ventures" />
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Investor Type</label>
              <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none">
                <option value="">Select investor type...</option>
                <option value="vc">Venture Capital</option>
                <option value="pe">Private Equity</option>
                <option value="angel">Angel Investor</option>
                <option value="family-office">Family Office</option>
                <option value="institutional">Institutional Investor</option>
              </select>
            </div>
            <CtaButton type="button" className="w-full mt-4">
              Request Access
            </CtaButton>
            <p className="text-[11px] text-center text-white/40 mt-4">By requesting access, you agree to our NDA and Terms of Service.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
