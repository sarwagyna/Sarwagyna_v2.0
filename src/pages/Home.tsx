import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Globe, Briefcase, Zap, Shield, BarChart3, Users, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
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
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Sarwagyna | Intelligence. Trade. Growth."
        description="India's emerging multi-industry powerhouse delivering enterprise-grade AI, global trade, and SaaS products."
        ogTitle="Sarwagyna: India's Next-Gen Multi-Industry Company"
        ogDescription="Discover Sarwagyna Pvt Ltd. We build enterprise AI solutions, manage global trade operations, and develop scalable SaaS products."
        url="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
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
              
              <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-[88px] font-display font-extrabold leading-[1.05] tracking-tight mb-6">
                <span className="text-white block">Where Intelligence</span>
                <span className="text-gradient block">Meets Enterprise</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg text-white/45 font-light mb-8 max-w-[520px] leading-[1.7]">
                AI & IT Solutions. Global Trade. Strategic Holdings. We build the infrastructure for modern business, combining deep technical expertise with global market access to drive unprecedented growth.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/ai-it" className="glass-button-primary px-8 py-4 text-center">
                  Explore Our Divisions
                </Link>
                <Link to="/investors" className="glass-button-ghost px-8 py-4 text-center">
                  View Investor Deck
                </Link>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex flex-wrap gap-2">
                {['AI-Powered', 'Global Reach', 'DPIIT Recognized', 'ISO Compliant'].map((chip) => (
                  <span key={chip} className="px-4 py-2 rounded-full glass-panel text-[11px] font-semibold tracking-[0.14em] uppercase text-white/80">
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
                <div className="absolute inset-0 bg-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-black/80 backdrop-blur-xl rounded-xl p-6 h-[400px] flex flex-col border border-white/5">
                  {/* Mock Dashboard UI */}
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/40" />
                      <div className="w-3 h-3 rounded-full bg-white/60" />
                    </div>
                    <div className="text-xs font-mono text-white/40">SYSTEM.STATUS: OPTIMAL</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="h-24 rounded-lg bg-white/5 border border-white/5 flex items-end p-4 gap-2">
                      {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className="flex-1 bg-white/40 rounded-t-sm opacity-80"
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 rounded-lg bg-white/5 border border-white/5 p-4 flex flex-col justify-center">
                        <div className="text-xs text-white/40 mb-1">Global Nodes</div>
                        <div className="text-xl font-display font-bold text-white">15+ Active</div>
                      </div>
                      <div className="h-20 rounded-lg bg-white/5 border border-white/5 p-4 flex flex-col justify-center">
                        <div className="text-xs text-white/40 mb-1">Processing</div>
                        <div className="text-xl font-display font-bold text-white">99.99%</div>
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
      <section className="border-y border-white/[0.07] bg-white/[0.01] py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/[0.07]">
            {[
              { number: '50+', label: 'Enterprise Clients' },
              { number: '3', label: 'Business Verticals' },
              { number: '15+', label: 'Countries Reached' },
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
                <div className="text-[13px] text-white/45 font-medium uppercase tracking-wider">{stat.label}</div>
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
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
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
            className="glass-panel p-8 rounded-2xl group relative overflow-hidden flex flex-col h-full border-t border-t-white/50"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-[22px] font-display font-bold text-white mb-4">AI-First Technology Services</h3>
            <p className="text-[15px] text-white/45 mb-8 flex-grow">
              Enterprise AI agents, custom software, web platforms, and startup solutions designed to automate workflows and accelerate growth.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['AI Agents', 'Web Dev', 'Automation', 'Startups'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full glass-panel text-[11px] font-semibold text-white/60">{tag}</span>
              ))}
            </div>
            <Link to="/ai-it" className="inline-flex items-center text-white font-semibold hover:text-white/80 transition-colors mt-auto">
              Explore AI & IT <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-8 rounded-2xl group relative overflow-hidden flex flex-col h-full border-t border-t-white/35"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-[22px] font-display font-bold text-white mb-4">Global Trade Solutions</h3>
            <p className="text-[15px] text-white/45 mb-8 flex-grow">
              End-to-end import and export operations for any product, anywhere in the world. We handle sourcing, logistics, and compliance.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Sourcing', 'Logistics', 'Customs', 'B2B Trade'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full glass-panel text-[11px] font-semibold text-white/60">{tag}</span>
              ))}
            </div>
            <Link to="/trade" className="inline-flex items-center text-white font-semibold hover:text-white/80 transition-colors mt-auto">
              Explore Trade <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl group relative overflow-hidden flex flex-col h-full border-t border-t-white/60"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-[22px] font-display font-bold text-white mb-4">Strategic Holdings & Investments</h3>
            <p className="text-[15px] text-white/45 mb-8 flex-grow">
              Cross-vertical portfolio management, strategic investments, and the incubation of high-potential SaaS products.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Investments', 'SaaS', 'Incubation', 'M&A'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full glass-panel text-[11px] font-semibold text-white/60">{tag}</span>
              ))}
            </div>
            <Link to="/holding-company" className="inline-flex items-center text-white font-semibold hover:text-white/80 transition-colors mt-auto">
              Explore Holdings <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-[120px] relative">
        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeIn} className="section-label mb-4">Built for Modern Business</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
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
              className="glass-panel p-8 rounded-2xl relative overflow-hidden flex flex-col h-full border-t border-t-[rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.10)] hover:bg-[rgba(59,130,246,0.03)] transition-all duration-300"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-2">SarwHub</h3>
              <p className="text-sm text-[rgba(59,130,246,0.7)] font-medium mb-6">Event Management & Ticketing</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {['Seamless ticket sales & QR check-ins', 'Real-time analytics dashboard', 'Multi-organizer support'].map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgba(59,130,246,0.7)] mt-1.5 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="h-32 rounded-xl bg-white/5 border border-white/5 mb-8 relative overflow-hidden backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(59,130,246,0.1)] to-transparent" />
                {/* Placeholder for screenshot */}
              </div>
              
              <Link to="/products/sarwhub" className="glass-button-ghost w-full py-3 text-center border-[rgba(59,130,246,0.3)] hover:border-[rgba(59,130,246,0.6)] hover:bg-[rgba(59,130,246,0.1)]">
                Explore SarwHub
              </Link>
            </motion.div>

            {/* SarwCal */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden flex flex-col h-full border-t border-t-[rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.10)] hover:bg-[rgba(139,92,246,0.03)] transition-all duration-300"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-2">SarwCal</h3>
              <p className="text-sm text-[rgba(139,92,246,0.7)] font-medium mb-6">Smart Calendar Booking</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {['Automated scheduling & reminders', 'GST-compliant payment collection', 'Custom booking pages'].map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgba(139,92,246,0.7)] mt-1.5 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="h-32 rounded-xl bg-white/5 border border-white/5 mb-8 relative overflow-hidden backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(139,92,246,0.1)] to-transparent" />
                {/* Placeholder for screenshot */}
              </div>
              
              <Link to="/products/sarwcal" className="glass-button-ghost w-full py-3 text-center border-[rgba(139,92,246,0.3)] hover:border-[rgba(139,92,246,0.6)] hover:bg-[rgba(139,92,246,0.1)]">
                Explore SarwCal
              </Link>
            </motion.div>

            {/* SarwBill */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden flex flex-col h-full border-t border-t-[rgba(132,153,56,0.5)] hover:shadow-[0_0_30px_rgba(132,153,56,0.10)] hover:bg-[rgba(132,153,56,0.03)] transition-all duration-300"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-2">SarwBill</h3>
              <p className="text-sm text-[rgba(132,153,56,0.7)] font-medium mb-6">Invoicing & Expense Analytics</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {['1-click GST invoice generation', 'Automated payment follow-ups', 'Visual expense tracking'].map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgba(132,153,56,0.7)] mt-1.5 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="h-32 rounded-xl bg-white/5 border border-white/5 mb-8 relative overflow-hidden backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(132,153,56,0.1)] to-transparent" />
                {/* Placeholder for screenshot */}
              </div>
              
              <Link to="/products/sarwbill" className="glass-button-ghost w-full py-3 text-center border-[rgba(132,153,56,0.3)] hover:border-[rgba(132,153,56,0.6)] hover:bg-[rgba(132,153,56,0.1)]">
                Explore SarwBill
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Sarwagyna */}
      <section className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeIn} className="section-label justify-center mb-4">The Sarwagyna Advantage</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
            Why Partner With Us
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Zap className="w-6 h-6 text-white" />, title: "Rapid Execution", desc: "We move fast. Our agile methodology ensures quick deployment of solutions without compromising on quality." },
            { icon: <Shield className="w-6 h-6 text-white" />, title: "Enterprise Security", desc: "Bank-grade security protocols and ISO compliance built into every product and service we deliver." },
            { icon: <Globe className="w-6 h-6 text-white" />, title: "Global Network", desc: "Access our established network of international partners, suppliers, and distributors across 15+ countries." },
            { icon: <BarChart3 className="w-6 h-6 text-white" />, title: "Data-Driven", desc: "Every decision, from trade routes to software architecture, is backed by rigorous data analysis." },
            { icon: <Users className="w-6 h-6 text-white" />, title: "Expert Team", desc: "A diverse team of engineers, trade specialists, and strategists dedicated to your success." },
            { icon: <Layers className="w-6 h-6 text-white" />, title: "Scalable Infrastructure", desc: "Solutions designed to grow with your business, from early-stage startup to enterprise scale." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.08]"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-white/45 leading-[1.7]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Investor Teaser */}
      <section className="py-12 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-8 md:p-12 border-l-4 border-l-white/60 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
          
          <div className="flex-1 relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">Invest in the Future of Enterprise</h2>
            <p className="text-white/60 mb-8 max-w-xl">
              Sarwagyna's diversified portfolio across high-margin IT services, global trade, and scalable SaaS products creates a resilient, high-growth investment opportunity.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Multi-Stream Revenue', 'Capital Efficient', 'High Growth', 'Global Market'].map(chip => (
                <span key={chip} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/20 text-xs font-semibold text-white">
                  {chip}
                </span>
              ))}
            </div>
            <Link to="/investors" className="glass-button-ghost inline-flex px-6 py-3">
              Explore Investor Relations
            </Link>
          </div>
          
          <div className="flex-1 w-full relative z-10 hidden md:block">
            {/* Abstract Chart SVG */}
            <svg viewBox="0 0 400 200" className="w-full h-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <path d="M0,200 L0,150 C50,150 80,180 130,120 C180,60 220,100 280,40 C330,-10 380,20 400,0 L400,200 Z" fill="url(#white-gradient)" opacity="0.1" />
              <path d="M0,150 C50,150 80,180 130,120 C180,60 220,100 280,40 C330,-10 380,20 400,0" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.6" />
              <circle cx="130" cy="120" r="6" fill="#000" stroke="white" strokeWidth="3" strokeOpacity="0.8" />
              <circle cx="280" cy="40" r="6" fill="#000" stroke="white" strokeWidth="3" strokeOpacity="0.8" />
              <circle cx="400" cy="0" r="6" fill="#000" stroke="white" strokeWidth="3" strokeOpacity="0.8" />
              <defs>
                <linearGradient id="white-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-[120px] px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1000px] mx-auto rounded-[24px] p-12 md:p-20 text-center relative overflow-hidden glass-panel border border-white/10"
        >
          <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to Accelerate Your Growth?</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Whether you need enterprise AI solutions, global trade facilitation, or powerful SaaS tools, Sarwagyna is your partner for the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="glass-button-primary px-8 py-4">
                Start a Conversation
              </Link>
              <Link to="/about" className="glass-button-ghost px-8 py-4">
                Learn More About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
