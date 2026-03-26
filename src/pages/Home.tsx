'use client';

import Link from 'next/link';
import { ArrowRight, Cpu, Globe, Briefcase, Layers } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-text">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-bg">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              className="flex-1 text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="section-label mb-6">
                INDIA'S NEXT-GEN MULTI-INDUSTRY COMPANY
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-[46px] sm:text-[56px] lg:text-[64px] font-display font-extrabold leading-[1.05] tracking-[-0.06em] mb-6">
                <span className="text-text block">Where Intelligence</span>
                <span className="text-gradient block">Meets Enterprise</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-[17px] text-text-secondary font-normal mb-8 max-w-[520px] leading-[1.75]">
                AI & IT Solutions. Strategic Holdings. We build the infrastructure for modern business, combining deep technical expertise with global market access to drive unprecedented growth.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/ai-it" className="glass-button-primary px-8 py-4 text-center">
                  Explore Our Divisions
                </Link>
                <Link href="/partner" className="glass-button-ghost px-8 py-4 text-center">
                  Partner with Us
                </Link>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-2">
                {['AI-Powered', 'Global Reach', 'DPIIT Recognized(under process)'].map((chip) => (
                  <span key={chip} className="px-4 py-2 rounded-full bg-green-light text-[13px] font-medium tracking-[0.08em] uppercase text-(--color-primary)">
                    {chip}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1 w-full max-w-lg lg:max-w-none relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl glass-panel p-1 overflow-hidden group">
                <div className="absolute inset-0 bg-bg-[var(--color-bg)]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white dark:bg-black/80 backdrop-blur-xl rounded-xl p-6 h-[400px] flex flex-col border border-black/5 dark:border-white/5 transition-colors duration-300">
                  {/* Mock Dashboard UI */}
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-border-subtle transition-colors duration-300">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-bg/10 dark:bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-bg/20 dark:bg-white/40" />
                      <div className="w-3 h-3 rounded-full bg-bg/30 dark:bg-white/60" />
                    </div>
                    <div className="text-xs font-mono text-text-muted dark:text-white/40">SYSTEM.STATUS: OPTIMAL</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="h-24 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-end p-4 gap-2 transition-colors duration-300">
                      {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className="flex-1 bg-(--color-lavender) dark:bg-white/40 rounded-t-sm opacity-80"
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 p-4 flex flex-col justify-center transition-colors duration-300">
                        <div className="text-xs text-text-muted dark:text-white/40 mb-1">Global Nodes</div>
                        <div className="text-xl font-display font-bold text-text dark:text-white">15+ Active</div>
                      </div>
                      <div className="h-20 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 p-4 flex flex-col justify-center transition-colors duration-300">
                        <div className="text-xs text-text-muted dark:text-white/40 mb-1">Processing</div>
                        <div className="text-xl font-display font-bold text-text dark:text-white">99.99%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border-subtle bg-surface py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/10 dark:divide-white/[0.07]">
            {[
              { number: '10+', label: 'Enterprise Clients' },
              { number: '3', label: 'Business Verticals' },
              { number: '2+', label: 'Countries Reached' },
              { number: '3', label: 'SaaS Products' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-4xl md:text-[56px] font-display font-extrabold text-gradient mb-2">{stat.number}</div>
                <div className="text-[13px] text-text-secondary font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeIn} className="section-label mb-4">Our Business Verticals</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-text">
            Engineered for Scale
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8 group relative overflow-hidden flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-[8px] bg-green-light flex items-center justify-center mb-6 text-(--color-green-icon)">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-[20px] font-display font-semibold text-text mb-4">
              AI-First Technology Services
            </h3>
            <p className="text-[15px] text-text-muted mb-8 grow">
              Enterprise AI agents, custom software, web platforms, and startup solutions designed to automate workflows and accelerate growth.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['AI Agents', 'Web Dev', 'Automation', 'Startups'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-green-light text-[11px] font-medium text-(--color-primary)">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/ai-it" className="inline-flex items-center text-(--color-primary) font-semibold hover:text-primary-hover transition-colors mt-auto">
              Explore AI & IT <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8 group relative overflow-hidden flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-[8px] bg-green-light flex items-center justify-center mb-6 text-(--color-green-icon)">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-[20px] font-display font-semibold text-text mb-4">
              AI Products & Digital Platforms
            </h3>
            <p className="text-[15px] text-text-muted mb-8 grow">
              Development and commercialization of AI-powered software products, SaaS platforms, mobile applications, and automation tools for global markets.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['SaaS', 'AI Platforms', 'Mobile Apps', 'Automation'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-green-light text-[11px] font-medium text-(--color-primary)">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/ai-it" className="inline-flex items-center text-(--color-primary) font-semibold hover:text-primary-hover transition-colors mt-auto">
              Explore AI & IT <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-8 group relative overflow-hidden flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-[8px] bg-green-light flex items-center justify-center mb-6 text-(--color-green-icon)">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-[20px] font-display font-semibold text-text mb-4">
              Strategic Holdings &amp; Investments
            </h3>
            <p className="text-[15px] text-text-muted mb-8 grow">
              Cross-vertical portfolio management, strategic investments, and the incubation of high-potential SaaS products.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Investments', 'SaaS', 'Incubation', 'M&A'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-green-light text-[11px] font-medium text-(--color-primary)">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/holding-company" className="inline-flex items-center text-(--color-primary) font-semibold hover:text-primary-hover transition-colors mt-auto">
              Explore Holdings <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-[120px] relative bg-bg">
        <div className="absolute inset-0 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeIn} className="section-label mb-4">Built for Modern Business</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-text">
              Our SaaS Portfolio
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SarwHub */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-8 relative overflow-hidden flex flex-col h-full"
            >
              <h3 className="text-[20px] font-display font-semibold text-text mb-1">
                SarwHub
              </h3>
              <p className="text-[13px] text-text-muted font-medium mb-6 uppercase tracking-[0.12em]">
                Event Management &amp; Ticketing
              </p>

              <ul className="space-y-3 mb-8 grow">
                {['Seamless ticket sales & QR check-ins', 'Real-time analytics dashboard', 'Multi-organizer support'].map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--color-green-icon) mt-1.5 mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="h-32 rounded-xl bg-surface border border-border-subtle mb-8" />

              <Link href="/products/sarwhub" className="glass-button-ghost w-full text-center">
                Explore SarwHub
              </Link>
            </motion.div>

            {/* SarwCal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-8 relative overflow-hidden flex flex-col h-full"
            >
              <h3 className="text-[20px] font-display font-semibold text-text mb-1">
                SarwCal
              </h3>
              <p className="text-[13px] text-text-muted font-medium mb-6 uppercase tracking-[0.12em]">
                Smart Calendar Booking
              </p>

              <ul className="space-y-3 mb-8 grow">
                {['Automated scheduling & reminders', 'GST-compliant payment collection', 'Custom booking pages'].map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--color-green-icon) mt-1.5 mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="h-32 rounded-xl bg-surface border border-border-subtle mb-8" />

              <Link href="/products/sarwcal" className="glass-button-ghost w-full text-center">
                Explore SarwCal
              </Link>
            </motion.div>

            {/* SarwBill */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-8 relative overflow-hidden flex flex-col h-full"
            >
              <h3 className="text-[20px] font-display font-semibold text-text mb-1">
                SarwBill
              </h3>
              <p className="text-[13px] text-text-muted font-medium mb-6 uppercase tracking-[0.12em]">
                Invoicing &amp; GST Billing
              </p>

              <ul className="space-y-3 mb-8 grow">
                {['One-click GST invoices', 'Inventory tracking & alerts', 'Client ledger management'].map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--color-green-icon) mt-1.5 mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="h-32 rounded-xl bg-surface border border-border-subtle mb-8" />

              <Link href="/products/sarwbill" className="glass-button-ghost w-full text-center">
                Explore SarwBill
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Sarwagyna Section */}
      <section className="py-24 relative bg-bg border-t border-border-subtle overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-r from-orange-500/5 to-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center mb-16 max-w-[700px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 justify-center"
            >
              WHY SARWAGYNA
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text mb-6 tracking-tight"
            >
              Why Leading Businesses Choose Sarwagyna
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "1. AI-Native Approach",
                description: "We don't bolt AI on as an afterthought. Every solution we build starts with intelligence at its core — so your business doesn't just keep up with the future, it leads it."
              },
              {
                title: "2. End-to-End Ownership",
                description: "From strategy and design to development, deployment, and ongoing support — we own the entire journey. One team, full accountability, zero handoff chaos."
              },
              {
                title: "3. India-Rooted, Global-Ready",
                description: "Deep local market knowledge combined with international execution capability. We understand the Indian business landscape and build solutions that scale across borders."
              },
              {
                title: "4. Startup Speed, Enterprise Grade",
                description: "We move with the urgency of a startup and the discipline of an enterprise. Fast delivery doesn't mean cutting corners — it means smarter processes and sharper focus."
              },
              {
                title: "5. Multi-Industry Perspective",
                description: "Operating across AI, and software gives us a cross-industry lens that pure-play firms simply don't have. Better context means better solutions."
              },
              {
                title: "6. Transparent Partnerships",
                description: "Fixed-scope engagements, milestone-based billing, and full project visibility from day one. No surprises on scope, timeline, or cost."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card p-8 group hover:border-border-subtle transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="text-xl font-display font-semibold text-text mb-4 relative z-10 group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed relative z-10 text-[15px]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 relative bg-surface border-t border-border-subtle overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center mb-16 max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 justify-center"
            >
              OUR VALUES
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text mb-6 tracking-tight"
            >
              The Core Values &amp; Principles That Drive Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[17px] text-text-secondary leading-relaxed"
            >
              Everything we build, every partnership we form, and every decision we make is guided by a set of principles we don't compromise on.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "1. Intelligence First",
                description: "We believe technology should think, not just execute. Every product we build and every service we deliver starts with a question: how can intelligence make this better, faster, and smarter?"
              },
              {
                title: "2. Integrity Always",
                description: "We say what we mean and deliver what we promise. In a world of overpromising, we've built our reputation on honest communication, transparent pricing, and accountable delivery."
              },
              {
                title: "3. Client Obsession",
                description: "Our clients' success is our success. We don't close a project and walk away — we stay invested in outcomes, not just outputs, and measure our performance by the results our clients achieve."
              },
              {
                title: "4. Speed with Quality",
                description: "Speed without quality is just noise. We've built our processes to move fast without sacrificing security, reliability, or craftsmanship — because our clients deserve both."
              },
              {
                title: "5. Global Mindset",
                description: "We were born in India and built for the world. Every solution we create is designed with global standards, international scalability, and cross-border ambition in mind."
              },
              {
                title: "6. Inclusive Growth",
                description: "We grow when our clients, partners, employees, and communities grow. We actively build opportunities that extend beyond our walls — because sustainable business is shared business."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card p-8 group hover:border-border-subtle transition-all duration-300 relative overflow-hidden bg-bg"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="text-xl font-display font-semibold text-text mb-4 relative z-10 group-hover:text-amber-400 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed relative z-10 text-[15px]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perspectives & Insights Section */}
      <section className="py-24 relative bg-bg border-t border-border-subtle overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

          {/* Header */}
          <div className="mb-16 max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4"
            >
              PERSPECTIVES & INSIGHTS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text mb-6 tracking-tight"
            >
              Our Thinking
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[17px] text-text-secondary leading-relaxed mb-6"
            >
              Ideas, perspectives, and insights from the people building Sarwagyna.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[16px] text-text-muted leading-relaxed"
            >
              We don't just build products and close deals. We think deeply about the industries we operate in, the problems worth solving, and the direction the world is heading. This is where we share that thinking — honestly and without the jargon.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left Column: Categories List */}
            <div className="flex-1 space-y-8">
              {[
                {
                  title: "Category 1: AI & Technology",
                  description: "From large language models to enterprise automation, we break down what's real, what's hype, and what actually moves the needle for businesses adopting AI today."
                },
                {
                  title: "Category 2: Product & Design",
                  description: "Behind every SarwHub event page, every SarwCal booking flow, and every SarwBill dashboard is a design decision. We talk about how we think about building software that people actually want to use."
                },
                {
                  title: "Category 3: Business & Strategy",
                  description: "What does it take to build a multi-industry company from India? We share lessons from the trenches — on growth, on capital, on hiring, and on the hard calls that don't make it into pitch decks."
                },
                {
                  title: "Category 4: India & the World",
                  description: "India is at an inflection point. We write about the opportunity, the infrastructure, the policy shifts, and what it means for entrepreneurs, investors, and enterprises operating here."
                }
              ].map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group"
                >
                  <h3 className="text-xl font-display font-semibold text-text mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-[15px]">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Featured Post & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-[480px] shrink-0"
            >
              <div className="card p-8 lg:p-10 sticky top-28 bg-surface border-border-subtle overflow-hidden group">
                {/* Subtle gradient background effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-orange-500/5 to-transparent rounded-bl-full pointer-events-none" />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold tracking-wide uppercase mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Featured Post
                </div>

                <h3 className="text-2xl font-display font-bold text-text mb-4 leading-snug group-hover:text-amber-400 transition-colors duration-300 cursor-pointer">
                  Why We Built Three Businesses Instead of One
                </h3>

                <p className="text-text-secondary mb-8 leading-relaxed">
                  Most founders are told to focus. We disagreed — here's why building across AI, and software made us stronger, not thinner.
                </p>

                <div className="flex flex-col gap-4">
                  <Link href="/insights" className="glass-button-primary w-full text-center flex items-center justify-center gap-2 group/btn">
                    Read Our Latest
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/newsletter" className="glass-button-ghost w-full text-center flex items-center justify-center gap-2 group/btn">
                    Subscribe to Our Newsletter
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 relative bg-surface border-t border-border-subtle overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

          {/* Main Header */}
          <div className="text-center mb-20 max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 justify-center"
            >
              HOW WE WORK
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-display font-bold text-text mb-6 tracking-tight"
            >
              Our Approach
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] sm:text-[20px] text-text-secondary leading-relaxed mb-6 font-medium"
            >
              We don't just deliver projects. We build partnerships — and every partnership starts with the same commitment to doing things the right way.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[16px] text-text-muted leading-relaxed"
            >
              Most agencies will tell you what you want to hear to win the deal. We'd rather tell you what you need to hear to actually succeed. That's the foundation of how we work — honest, structured, and relentlessly focused on outcomes over optics.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 mb-24">
            {/* The Way We Think */}
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold text-text mb-8 border-b border-border-subtle pb-4">The Way We Think</h3>
              <div className="space-y-6">
                {[
                  { title: "Outcomes Before Outputs", desc: "A beautiful website that generates no leads is a failure. A perfectly written AI agent that nobody uses is a waste. We measure our work by what it produces for your business — not by what it looks like on a portfolio slide." },
                  { title: "Simplicity is the Hardest Thing to Build", desc: "It's easy to make things complicated. The real craft is in making complex problems feel simple for the people using your product. We obsess over clarity — in design, in code, and in communication." },
                  { title: "Technology Serves the Business, Not the Other Way Around", desc: "We're not here to implement the trendiest stack or recommend AI because it's fashionable. Every technology decision we make is grounded in one question: does this actually solve your problem better?" },
                  { title: "Transparency as a Default", desc: "You'll always know where your project stands. Budget, timeline, blockers, risks — we surface everything, early. No surprises at delivery." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="card p-6 bg-bg group hover:border-border-subtle transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h4 className="text-[17px] font-semibold text-text mb-2 relative z-10 group-hover:text-amber-400 transition-colors">{item.title}</h4>
                    <p className="text-[14px] text-text-secondary leading-relaxed relative z-10">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* How We Engage */}
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold text-text mb-8 border-b border-border-subtle pb-4">How We Engage</h3>
              <div className="space-y-6">
                {[
                  { title: "Discovery First, Always", desc: "Before we write a line of code or move a single shipment, we invest time understanding your business, your constraints, and your definition of success. Skipping discovery is how projects fail." },
                  { title: "Fixed Scope, Milestone-Based", desc: "We don't believe in open-ended retainers that quietly drain budgets. Our engagements are scoped clearly, priced honestly, and structured around milestones you can see and sign off on." },
                  { title: "Collaborative, Not Transactional", desc: "You're not a ticket in our queue. Your team works alongside ours — with regular demos, open communication channels, and a shared sense of ownership over the outcome." },
                  { title: "Built to Last, Not Just to Launch", desc: "We build with maintainability, security, and scalability in mind from day one. What we hand over to you should be something you can grow into — not something you'll need to rebuild in 18 months." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="card p-6 bg-bg group hover:border-border-subtle transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-l from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h4 className="text-[17px] font-semibold text-text mb-2 relative z-10 group-hover:text-amber-400 transition-colors">{item.title}</h4>
                    <p className="text-[14px] text-text-secondary leading-relaxed relative z-10">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Process & Expectations */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">

            {/* Process */}
            <div>
              <h3 className="text-2xl font-display font-bold text-text mb-8">Our Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { step: "01", title: "Discover", desc: "We immerse ourselves in your world. Stakeholder interviews, competitive analysis, technical audits, and goal-setting sessions to build a complete picture before anything else." },
                  { step: "02", title: "Strategize", desc: "We map out the optimal path — architecture decisions, project roadmap, risk identification, and resource planning. You see the full plan before we start." },
                  { step: "03", title: "Design", desc: "Every interface, flow, and user experience is prototyped and reviewed before development begins. We don't design and build simultaneously — that's how rework happens." },
                  { step: "04", title: "Build", desc: "Agile development in focused two-week sprints. You see working software regularly — not just at the end. Feedback loops are built into the rhythm, not bolted on at the finish line." },
                  { step: "05", title: "Deploy", desc: "Rigorous QA, security review, performance testing, and a structured go-live process. Launch day is planned, not scrambled." },
                  { step: "06", title: "Evolve", desc: "Post-launch isn't the end — it's the beginning of optimization. We monitor, measure, and continuously improve what we've built together." }
                ].map((process, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex gap-4 p-5 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="text-2xl font-bold text-amber-500/50 group-hover:text-amber-500 transition-colors font-display w-8 shrink-0">
                      {process.step}
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold text-text mb-1">{process.title}</h4>
                      <p className="text-[13px] text-text-secondary leading-relaxed">{process.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Expectations & CTA */}
            <div className="card p-8 bg-bg border-border-subtle sticky top-28">
              <h3 className="text-xl font-display font-bold text-text mb-6">What You Can Always Expect From Us</h3>

              <ul className="space-y-4 mb-10">
                {[
                  "A single point of contact who knows your project inside out",
                  "Weekly progress updates without you having to ask",
                  "Honest timelines — including when something is going to take longer than planned",
                  "Clean, documented, handover-ready deliverables",
                  "A team that treats your budget like it's their own"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-text-secondary leading-relaxed">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center text-xs mt-0.5">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4">
                <Link href="/contact" className="glass-button-primary w-full text-center flex items-center justify-center gap-2 group/btn">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link href="/" className="glass-button-ghost w-full text-center flex items-center justify-center gap-2 group/btn">
                  See How We've Worked With Others
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
