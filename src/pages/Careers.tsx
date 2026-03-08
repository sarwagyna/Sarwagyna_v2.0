import { motion } from 'framer-motion';
import { Users, Zap, Heart, Globe, ArrowRight, Briefcase } from 'lucide-react';
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

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Careers | Join Sarwagyna"
        description="Build the future of AI, trade, and SaaS. Join Sarwagyna's team of engineers, strategists, and innovators."
        ogTitle="Careers at Sarwagyna: Build the Future"
        ogDescription="We are hiring top talent to scale our enterprise AI solutions, global trade operations, and SaaS products."
        url="/careers"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="section-label justify-center text-white/60 mb-6">
              JOIN THE TEAM
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-[80px] font-display font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-white block">Do the best work</span>
              <span className="text-gradient block">of your life.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-white/45 font-light mb-10 max-w-2xl mx-auto leading-[1.7]">
              We are a team of engineers, strategists, and operators building the infrastructure for modern enterprises. Join us in shaping the future of AI, trade, and SaaS.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex justify-center">
              <button onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })} className="glass-button-primary px-8 py-4">
                View Open Roles
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeIn} className="section-label justify-center mb-4">Our Culture</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
            How We Work
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Zap />, title: "Bias for Action", desc: "We prefer shipping over debating. We move fast, iterate quickly, and learn from real-world feedback rather than theoretical planning." },
            { icon: <Users />, title: "Extreme Ownership", desc: "Every team member is an owner. You are empowered to make decisions, take calculated risks, and drive projects from conception to launch." },
            { icon: <Globe />, title: "Remote-First", desc: "Work from anywhere. We care about output, not hours logged at a desk. We hire the best talent globally and trust them to deliver." },
            { icon: <Heart />, title: "Continuous Growth", desc: "We invest heavily in our team's development. From learning stipends to mentorship programs, we want you to grow faster here than anywhere else." }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl group border-l border-l-white/20 hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white">
                {value.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{value.title}</h3>
              <p className="text-[15px] text-white/45 leading-[1.7]">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-[120px] relative">
        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-4">Current Openings</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
              Join the Mission
            </motion.h2>
          </motion.div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              { role: "Senior Full Stack Engineer", team: "Engineering", location: "Remote (India)", type: "Full-time" },
              { role: "AI Solutions Architect", team: "AI & IT Services", location: "Remote (Global)", type: "Full-time" },
              { role: "Product Designer", team: "Design", location: "Remote (India)", type: "Full-time" },
              { role: "Global Trade Specialist", team: "Imports & Exports", location: "Bangalore, India", type: "Full-time" }
            ].map((job, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between group hover:bg-white/[0.06] transition-colors cursor-pointer"
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-white/80 transition-colors">{job.role}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-white/45">
                    <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1" /> {job.team}</span>
                    <span className="flex items-center"><Globe className="w-4 h-4 mr-1" /> {job.location}</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider">{job.type}</span>
                  </div>
                </div>
                <button className="glass-button-ghost px-6 py-2 text-sm whitespace-nowrap">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/45 mb-4">Don't see a perfect fit? We're always looking for exceptional talent.</p>
            <a href="mailto:careers@sarwagyna.com" className="text-white font-semibold hover:underline inline-flex items-center">
              Send an open application <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
