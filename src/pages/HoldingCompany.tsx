import { motion } from 'framer-motion';
import { Target, Eye, Users, ArrowRight, Building2, Globe, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
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

export default function HoldingCompany() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="About Sarwagyna | The Holding Company"
        description="Learn about Sarwagyna's mission, vision, and leadership. We are building the infrastructure for modern enterprises across AI, trade, and SaaS."
        ogTitle="About Sarwagyna: Building the Future"
        ogDescription="Discover the story behind Sarwagyna, our core values, and the leadership team driving our multi-industry growth."
        url="/about"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* Violet Tint Background */}
        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-6">
              THE HOLDING COMPANY
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-[80px] font-display font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-white block">Building the</span>
              <span className="text-gradient block">Infrastructure of Tomorrow.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-white/45 font-light mb-10 max-w-2xl mx-auto leading-[1.7]">
              Sarwagyna is a diversified holding company operating at the intersection of enterprise AI, global trade logistics, and scalable SaaS products. We build resilient businesses that power the modern economy.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex justify-center">
              <button onClick={() => document.getElementById('mission-vision')?.scrollIntoView({ behavior: 'smooth' })} className="glass-button-primary px-8 py-4">
                Discover Our Story
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-10 md:p-12 rounded-[32px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-white">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-white/60 leading-[1.8]">
              To democratize access to enterprise-grade technology and global markets. We empower businesses of all sizes to scale efficiently by providing them with the AI tools, software infrastructure, and trade networks previously reserved for the Fortune 500.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-10 md:p-12 rounded-[32px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-white">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Our Vision</h2>
            <p className="text-lg text-white/60 leading-[1.8]">
              To become the foundational operating system for the next generation of Indian and global enterprises. We envision a future where complex operations—from international logistics to autonomous customer support—are seamlessly managed through Sarwagyna's interconnected ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
            <motion.div variants={fadeIn} className="section-label justify-center mb-4">Core Values</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
              What Drives Us
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap />, title: "Relentless Execution", desc: "Ideas are cheap; execution is everything. We prioritize speed, iteration, and delivering tangible results." },
              { icon: <ShieldCheck />, title: "Uncompromising Integrity", desc: "Trust is our most valuable asset. We operate with transparency and ethical rigor in every market." },
              { icon: <Globe />, title: "Global Perspective", desc: "We build for the world. Our solutions are designed to scale across borders and cultures from day one." },
              { icon: <Building2 />, title: "Long-Term Thinking", desc: "We are building a generational company. We optimize for sustainable growth over short-term gains." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white">
                  {value.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-2">{value.title}</h4>
                <p className="text-sm text-white/45">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeIn} className="section-label justify-center mb-4">Leadership</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
            The Executive Team
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Rahul Sharma", role: "Chief Executive Officer", desc: "Former VP of Engineering at a Fortune 500 tech firm. Leads overall strategy and product vision.", initials: "RS" },
            { name: "Priya Patel", role: "Chief Operating Officer", desc: "15+ years in global logistics and supply chain management. Oversees the Trade division.", initials: "PP" },
            { name: "Anand Desai", role: "Chief Technology Officer", desc: "AI researcher and open-source contributor. Drives technical architecture for AI & IT Services.", initials: "AD" }
          ].map((leader, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 text-2xl font-display font-bold text-white">
                {leader.initials}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-1">{leader.name}</h3>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{leader.role}</h4>
              <p className="text-[15px] text-white/45 leading-[1.6]">{leader.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="glass-panel rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Join our journey</h2>
            <p className="text-lg text-white/60 mb-10">Whether you're looking to partner, invest, or join our team, we're always looking for exceptional people.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="glass-button-primary px-8 py-4">
                Contact Us
              </Link>
              <Link to="/careers" className="glass-button-ghost px-8 py-4">
                View Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
