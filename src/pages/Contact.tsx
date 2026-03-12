import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight, Building2, Bot } from 'lucide-react';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabaseClient';

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

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('general');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    commodity: '',
    projectBudget: ''
  });
  const [status, setStatus] = useState<{ loading: boolean; error?: string; success?: string }>({ loading: false });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setStatus({ loading: true });
    const payload = {
      first_name: form.firstName.trim(),
      last_name: form.lastName.trim(),
      email: form.email.trim().toLowerCase(),
      message: form.message.trim(),
      inquiry_type: inquiryType,
      project_budget: inquiryType === 'ai-it' ? form.projectBudget.trim() : null
    };
    try {
      const { error } = await supabase.from('contact_requests').insert(payload);
      if (error) throw error;
      setStatus({ loading: false, success: 'Thanks! Your message has been sent.' });
      setForm({ firstName: '', lastName: '', email: '', message: '', commodity: '', projectBudget: '' });
    } catch (err: any) {
      setStatus({ loading: false, error: 'Sorry, something went wrong. Please try again.' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Contact Us | Sarwagyna"
        description="Get in touch with Sarwagyna's sales, support, or investor relations teams. We're here to help you build the future."
        ogTitle="Contact Sarwagyna: Let's Build Together"
        ogDescription="Reach out to our teams across AI & IT services, and SaaS products. We're ready to partner with you."
        url="/contact"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-bg/5 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-6">
              GET IN TOUCH
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-[80px] font-display font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-text block">Let's Build</span>
              <span className="text-gradient block">Together.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-text-secondary font-light mb-10 max-w-2xl mx-auto leading-[1.7]">
              Whether you're looking for enterprise AI solutions, global partnerships, or investor relations, our team is ready to assist you.
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
            <div className="glass-panel p-8 rounded-2xl hover:bg-bg/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-bg/5 flex items-center justify-center mb-6 text-text">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-text mb-2">Sales & Partnerships</h3>
              <p className="text-text-secondary mb-4 leading-[1.6]">Discuss enterprise solutions, partnerships, or custom software development.</p>
              <a href="mailto:contact@sarwagyna.com" className="text-text font-semibold flex items-center group-hover:underline">
                contact@sarwagyna.com <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="glass-panel p-8 rounded-2xl hover:bg-bg/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-bg/5 flex items-center justify-center mb-6 text-text">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-text mb-2">Product Support</h3>
              <p className="text-text-secondary mb-4 leading-[1.6]">Get help with SarwHub, SarwCal, SarwBill, or your custom AI deployments.</p>
              <a href="mailto:contact@sarwagyna.com" className="text-text font-semibold flex items-center group-hover:underline">
                contact@sarwagyna.com <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="glass-panel p-8 rounded-2xl hover:bg-bg/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-bg/5 flex items-center justify-center mb-6 text-text">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-text mb-2">Global Headquarters</h3>
              <p className="text-text-secondary mb-4 leading-[1.6]">Sarwagyna Pvt Ltd.<br />Remote Office<br />India</p>
              <a href="tel:+919704736991" className="text-text font-semibold flex items-center group-hover:underline">
                +91 97047 36991 <ArrowRight className="ml-2 w-4 h-4" />
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
              <div className="absolute top-0 left-0 w-full h-1 bg-bg/50" />

              <h2 className="text-3xl font-display font-bold text-text mb-8">Send a Message</h2>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                {/* Inquiry Selector */}
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-3">How can we help you?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'general', label: 'General Inquiry', icon: <Mail className="w-4 h-4 mr-2" /> },
                      { id: 'ai-it', label: 'AI & IT Services', icon: <Bot className="w-4 h-4 mr-2" /> },
                      { id: 'investors', label: 'Investors', icon: <Building2 className="w-4 h-4 mr-2" /> }
                    ].map(type => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setInquiryType(type.id)}
                        className={`flex items-center justify-center px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${inquiryType === type.id
                          ? 'bg-bg/10 border-border-subtle text-text shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                          : 'bg-transparent border-border-subtle text-text-secondary hover:border-border-subtle/20 hover:text-text-secondary/80'
                        }`}
                      >
                        {type.icon} {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-2">First Name</label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      type="text"
                      className="w-full px-4 py-3 text-text"
                      placeholder="Jane"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-2">Last Name</label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      type="text"
                      className="w-full px-4 py-3 text-text"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-2">Work Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full px-4 py-3 text-text"
                    placeholder="jane@company.com"
                    required
                  />
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
                        <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-2">Project Budget</label>
                        <select
                          name="projectBudget"
                          value={form.projectBudget}
                          onChange={(e) => setForm(prev => ({ ...prev, projectBudget: e.target.value }))}
                          required
                          className="w-full px-4 py-3 text-text appearance-none"
                        >
                          <option value="">Select budget range...</option>
                          <option value="10k-25k">$10k - $25k</option>
                          <option value="25k-50k">$25k - $50k</option>
                          <option value="50k+">$50k+</option>
                        </select>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-text-secondary mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 resize-none text-text"
                    placeholder="How can we help you today?"
                    required
                  />
                </div>

                <button type="submit" disabled={status.loading} className="w-full glass-button-primary py-4 mt-4 flex items-center justify-center disabled:opacity-60">
                  {status.loading ? 'Sending...' : 'Send Message'} <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                {status.error && <p className="text-[12px] text-center text-(--color-error) mt-3">{status.error}</p>}
                {status.success && <p className="text-[12px] text-center text-(--color-primary) mt-3">{status.success}</p>}
                <p className="text-[11px] text-center text-text-secondary mt-4">We typically respond within 24 hours.</p>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
