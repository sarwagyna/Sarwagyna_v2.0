import { motion } from 'framer-motion';
import { Handshake, Globe, Rocket, Shield, Users, ArrowRight, MessageSquare, Mail, Building, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { supabase } from '../lib/supabaseClient';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function PartnerWithUs() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    companyName: '',
    partnershipType: '',
    message: ''
  });
  const [status, setStatus] = useState<{ loading: boolean; error?: string; success?: string }>({ loading: false });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true });
    const payload = {
      full_name: form.fullName.trim(),
      email: form.email.trim().toLowerCase(),
      company_name: form.companyName.trim(),
      partnership_type: form.partnershipType.trim(),
      message: form.message.trim()
    };
    try {
      const { error } = await supabase.from('partner_requests').insert(payload);
      if (error) throw error;
      setStatus({ loading: false, success: 'Thanks! Your partnership request has been submitted.' });
      setForm({ fullName: '', email: '', companyName: '', partnershipType: '', message: '' });
    } catch (err: any) {
      setStatus({ loading: false, error: 'Sorry, something went wrong. Please try again.' });
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Partner With Us | Sarwagyna Holdings"
        description="Join forces with Sarwagyna to scale your business, leverage our AI expertise, and explore global trade opportunities."
        url="/partner"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-bg)]/5 pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-6">
              PARTNERSHIP OPPORTUNITIES
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-[80px] font-display font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-[var(--color-text)] block">Grow Faster.</span>
              <span className="text-gradient block">Together.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-[var(--color-text-secondary)] font-light mb-10 max-w-2xl mx-auto leading-[1.7]">
              We believe in the power of collaboration. Partner with Sarwagyna to leverage our technology, trade networks, and industry expertise to scale your vision.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => document.getElementById('partnership-types')?.scrollIntoView({ behavior: 'smooth' })} className="glass-button-primary px-8 py-4">
                Explore Programs
              </button>
              <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="glass-button-ghost px-8 py-4">
                Become a Partner
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeIn} className="section-label justify-center mb-4">How We Can Collaborate</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text)]">
            Partnership Programs
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              icon: <Rocket />, 
              title: "Technology Partners", 
              desc: "Integrate your solutions with our AI-driven SaaS platforms or collaborate on custom software development projects for global clients." 
            },
            { 
              icon: <Globe />, 
              title: "Trade & Logistics", 
              desc: "Join our global trade network to expand your market reach or optimize your supply chain through our established international channels." 
            },
            { 
              icon: <Users />, 
              title: "Channel Partners", 
              desc: "Resell our suite of products including SarwHub, SarwCal, and SarwBill to your existing customer base and earn competitive commissions." 
            }
          ].map((program, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl border-l border-l-[var(--color-border-subtle)] group hover:bg-gradient-to-br hover:from-[var(--color-bg)]/8 hover:to-transparent"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-bg)]/5 flex items-center justify-center mb-6 text-[var(--color-text)]">
                {program.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-[var(--color-text)] mb-4">{program.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-[1.7] mb-6">{program.desc}</p>
              <div className="flex items-center text-[var(--color-text)] font-medium group-hover:text-gradient transition-colors cursor-pointer">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-[120px] bg-[var(--color-bg)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-label mb-6">WHY PARTNER WITH US</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text)] mb-8 leading-tight">
                Accelerate Your Growth with Our Ecosystem
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Global Reach", desc: "Access international markets through our established trade corridors and digital presence." },
                  { title: "AI-First Expertise", desc: "Leverage our deep technical knowledge in artificial intelligence and modern software architecture." },
                  { title: "Operational Excellence", desc: "Benefit from our streamlined processes and capital-efficient business models." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[var(--color-bg)]/10 flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="text-[var(--color-text)] font-bold mb-1">{item.title}</h4>
                      <p className="text-[var(--color-text-secondary)] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass-panel p-1">
                <div className="w-full h-full rounded-[22px] bg-gradient-to-br from-[var(--color-bg)]/10 to-transparent flex items-center justify-center p-12">
                   <Handshake size={200} strokeWidth={0.5} className="text-[var(--color-text-secondary)]/20" />
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-2xl animate-bounce-slow">
                <div className="text-3xl font-bold text-[var(--color-text)] mb-1">50+</div>
                <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-secondary)]">Global Partners</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="glass-panel rounded-3xl p-8 md:p-16 border-t border-t-[var(--color-border-subtle)]">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-[var(--color-text)] mb-4">Start a Conversation</h2>
            <p className="text-[var(--color-text-secondary)]">Tell us about your business and how you'd like to partner with Sarwagyna. Our partnership team will get back to you within 48 hours.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" onSubmit={handleSubmit} noValidate>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-text-secondary)] ml-1">Full Name</label>
              <input name="fullName" value={form.fullName} onChange={handleChange} required type="text" placeholder="John Doe" className="w-full bg-[var(--color-bg)]/5 border border-[var(--color-border-subtle)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-border-subtle)]/30 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-text-secondary)] ml-1">Company Email</label>
              <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="john@company.com" className="w-full bg-[var(--color-bg)]/5 border border-[var(--color-border-subtle)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-border-subtle)]/30 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-text-secondary)] ml-1">Company Name</label>
              <input name="companyName" value={form.companyName} onChange={handleChange} required type="text" placeholder="Acme Inc." className="w-full bg-[var(--color-bg)]/5 border border-[var(--color-border-subtle)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-border-subtle)]/30 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--color-text-secondary)] ml-1">Partnership Type</label>
              <select name="partnershipType" value={form.partnershipType} onChange={handleChange} required className="w-full bg-[var(--color-bg)]/5 border border-[var(--color-border-subtle)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-border-subtle)]/30 transition-colors appearance-none">
                <option value="">Select partnership type...</option>
                <option value="Technology Partner">Technology Partner</option>
                <option value="Trade & Logistics">Trade & Logistics</option>
                <option value="Channel Partner">Channel Partner</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-[var(--color-text-secondary)] ml-1">Message / Proposal</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Briefly describe your partnership idea..." className="w-full bg-[var(--color-bg)]/5 border border-[var(--color-border-subtle)] rounded-xl px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-border-subtle)]/30 transition-colors resize-none"></textarea>
            </div>
            <div className="md:col-span-2 mt-4">
              <button type="submit" disabled={status.loading} className="glass-button-primary w-full py-4 text-lg font-bold disabled:opacity-60">
                {status.loading ? 'Submitting...' : 'Submit Partnership Request'}
              </button>
              {status.error && <p className="text-[12px] text-center text-red-400 mt-3">{status.error}</p>}
              {status.success && <p className="text-[12px] text-center text-emerald-300 mt-3">{status.success}</p>}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
