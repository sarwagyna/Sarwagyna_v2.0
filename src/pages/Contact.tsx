import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, Building2, Globe, Bot } from 'lucide-react';
import SEO from '../components/SEO';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('general');

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Contact Us | Sarwagyna"
        description="Get in touch with Sarwagyna's sales, support, or investor relations teams. We're here to help you build the future."
        ogTitle="Contact Sarwagyna: Let's Build Together"
        ogDescription="Reach out to our teams across AI & IT services, global trade, and SaaS products. We're ready to partner with you."
        url="/contact"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeIn} className="section-label justify-center text-white/60 mb-6">
              GET IN TOUCH
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-6 text-white">
              Let's Build Together
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-white/45 font-light max-w-2xl mx-auto leading-[1.7]">
              Whether you're looking for enterprise AI solutions, global trade partnerships, or investor relations, our team is ready to assist you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Split Layout Content */}
      <section className="pb-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Contact Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-[45%] space-y-6"
          >
            <div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.06] transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Sales & Partnerships</h3>
              <p className="text-white/45 mb-4 leading-[1.6]">Discuss enterprise solutions, trade partnerships, or custom software development.</p>
              <a href="mailto:sales@sarwagyna.com" className="text-white font-semibold flex items-center group-hover:underline">
                sales@sarwagyna.com <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.06] transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Product Support</h3>
              <p className="text-white/45 mb-4 leading-[1.6]">Get help with SarwHub, SarwCal, SarwBill, or your custom AI deployments.</p>
              <a href="mailto:support@sarwagyna.com" className="text-white font-semibold flex items-center group-hover:underline">
                support@sarwagyna.com <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.06] transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Global Headquarters</h3>
              <p className="text-white/45 mb-4 leading-[1.6]">Sarwagyna Pvt Ltd.<br />123 Innovation Drive, Tech Park<br />Bangalore, KA 560001, India</p>
              <a href="tel:+919876543210" className="text-white font-semibold flex items-center group-hover:underline">
                +91 98765 43210 <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Smart Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-[55%]"
          >
            <div className="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-white/50" />
              
              <h2 className="text-3xl font-display font-bold text-white mb-8">Send a Message</h2>

              <form className="space-y-6">
                {/* Inquiry Selector */}
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-3">How can we help you?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'general', label: 'General Inquiry', icon: <Mail className="w-4 h-4 mr-2" /> },
                      { id: 'ai-it', label: 'AI & IT Services', icon: <Bot className="w-4 h-4 mr-2" /> },
                      { id: 'trade', label: 'Global Trade', icon: <Globe className="w-4 h-4 mr-2" /> },
                      { id: 'investors', label: 'Investors', icon: <Building2 className="w-4 h-4 mr-2" /> }
                    ].map(type => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setInquiryType(type.id)}
                        className={`flex items-center justify-center px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                          inquiryType === type.id 
                            ? 'bg-white/10 border-white/30 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]' 
                            : 'bg-transparent border-white/10 text-white/45 hover:border-white/20 hover:text-white/80'
                        }`}
                      >
                        {type.icon} {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">First Name</label>
                    <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Work Email</label>
                  <input type="email" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="jane@company.com" />
                </div>

                <AnimatePresence mode="wait">
                  {inquiryType === 'ai-it' && (
                    <motion.div
                      key="ai-it-fields"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-2">
                        <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Project Budget</label>
                        <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none">
                          <option value="">Select budget range...</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k-50k">$25k - $50k</option>
                          <option value="50k+">$50k+</option>
                        </select>
                      </div>
                    </motion.div>
                  )}
                  {inquiryType === 'trade' && (
                    <motion.div
                      key="trade-fields"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-2">
                        <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Commodity / Sector</label>
                        <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="e.g., Electronics, Agriculture" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none" placeholder="How can we help you today?" />
                </div>

                <button type="button" className="w-full glass-button-primary py-4 mt-4 flex items-center justify-center">
                  Send Message <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-white/40 mt-4">We typically respond within 24 hours.</p>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
