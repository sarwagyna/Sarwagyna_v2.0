import { motion, Variants } from 'framer-motion';
import { Target, Eye, Users, ArrowRight, Building2, Globe, Zap, ShieldCheck, Layers, BarChart3, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

export default function HoldingCompany() {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-text">
      <SEO
        title="About Sarwagyna | The Holding Company"
        description="Learn about Sarwagyna's mission, vision, and leadership. We are building the infrastructure for modern enterprises across AI, and SaaS."
        ogTitle="About Sarwagyna: Building the Future"
        ogDescription="Discover the story behind Sarwagyna, our core values, and the leadership team driving our multi-industry growth."
        url="/about"
        canonicalPath="/about"
        organization={{
          name: "Sarwagyna Pvt Ltd",
          url: "https://sarwagyna.com",
          logo: "https://sarwagyna.com/logo.png",
          foundingDate: "2025-01-01",
          founders: ["Rahul Sharma", "Priya Patel", "Anand Desai"],
          address: "Registered Office - To be updated",
          email: "contact@sarwagyna.com"
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden bg-bg">

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

            <motion.h1 variants={fadeIn} className="text-[46px] sm:text-[56px] lg:text-[64px] font-display font-extrabold leading-[1.05] tracking-[-0.06em] mb-6">
              <span className="text-text block">Building the</span>
              <span className="text-gradient block">Infrastructure of Tomorrow.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-[17px] text-text-secondary font-normal mb-10 max-w-2xl mx-auto leading-[1.75]">
              Sarwagyna is a diversified holding company operating at the intersection of enterprise AI, and scalable SaaS products. We build resilient businesses that power the modern economy.
            </motion.p>

            <motion.div variants={fadeIn} className="flex justify-center">
              <button onClick={() => document.getElementById('mission-vision')?.scrollIntoView({ behavior: 'smooth' })} className="glass-button-primary px-8 py-4">
                Discover Our Story
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="our-objectives" className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeIn} className="section-label justify-center mb-4">Our Mission & Objectives</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-text">Building for Impact</motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: "AI Innovation",
              desc: "Design and develop advanced AI, ML, and automation technologies for next‑gen digital solutions."
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Technology Solutions",
              desc: "Provide end‑to‑end software development, AI consulting, integration, and managed services."
            },
            {
              icon: <BarChart3 className="w-6 h-6" />,
              title: "Research & Development",
              desc: "Continuously research AI, data science, cloud computing, and intelligent automation."
            },
            {
              icon: <Building2 className="w-6 h-6" />,
              title: "Scalable Platforms",
              desc: "Develop SaaS products and digital platforms that improve productivity and decision‑making."
            },
            {
              icon: <Users className="w-12 h-12 rounded-[8px] bg-green-light flex items-center justify-center text-green-icon mb-4" />,
              title: "Collaboration Ecosystem",
              desc: "Work with startups, enterprises, academia, and government to accelerate innovation."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card p-8 rounded-2xl group transition-all"
            >
              <div className="w-12 h-12 rounded-[8px] bg-green-light flex items-center justify-center text-green-icon mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-text mb-2">{card.title}</h3>
              <div className="h-px w-12 bg-border-subtle mb-4" />
              <p className="text-sm text-text-secondary leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
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
            <div className="w-16 h-16 rounded-2xl bg-green-light flex items-center justify-center mb-8 text-green-icon">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-text mb-6">Our Mission</h2>
            <p className="text-lg text-text-secondary leading-[1.8]">
              To democratize access to enterprise-grade technology and global markets. We empower businesses of all sizes to scale efficiently by providing them with the AI tools, software infrastructure, and global networks previously reserved for the Fortune 500.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-10 md:p-12 rounded-[32px] relative overflow-hidden group"
          >
            <div className="w-16 h-16 rounded-2xl bg-green-light flex items-center justify-center mb-8 text-green-icon">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-text mb-6">Our Vision</h2>
            <p className="text-lg text-text-secondary leading-[1.8]">
              To become the foundational operating system for the next generation of Indian and global enterprises. We envision a future where complex operations—from international logistics to autonomous customer support—are seamlessly managed through Sarwagyna's interconnected ecosystem.
            </p>
          </motion.div>
        </div>
      </section>
      <section id="objectives" className="py-[120px] relative">
        <div className="absolute inset-0 bg-bg pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12 text-center"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-4">Main Objects of the Company</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-text">
              Objectives
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-start">
            <div className="space-y-6">
              {[
                {
                  num: "1.",
                  icon: <Cpu className="w-5 h-5" />,
                  accent: "from-[#7C3AED]",
                  text: "To design, develop, research, manufacture, license, customize, implement, operate, maintain and commercialize artificial intelligence (AI), machine learning (ML), deep learning, data analytics, automation and software products, including software applications, platforms, algorithms, tools, and digital solutions for businesses, governments and individuals across industries."
                },
                {
                  num: "2.",
                  icon: <Layers className="w-5 h-5" />,
                  accent: "from-[#22D3EE]",
                  text: "To provide software development, technology consulting, implementation, integration, technical support, maintenance, and managed services relating to artificial intelligence solutions, enterprise software, cloud computing, data processing, digital transformation, and information technology enabled services."
                },
                {
                  num: "3.",
                  icon: <Globe className="w-5 h-5" />,
                  accent: "from-[#F59E0B]",
                  text: "To create, own, acquire, license, distribute, market and monetize software products, SaaS platforms, mobile applications, digital platforms, and AI-enabled solutions, and to provide related services including training, support, upgrades, analytics, automation solutions and technology infrastructure services in India and internationally."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="card p-6 flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-[10px] bg-green-light flex items-center justify-center text-(--color-green-icon)">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-text-secondary">
                        {item.num}
                      </span>
                      <div className="h-px w-16 bg-border-subtle" />
                    </div>
                    <p className="text-[15px] text-text-secondary leading-[1.8]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="hidden lg:flex flex-col items-center">
              <div className="w-[2px] h-full bg-black/10 dark:bg-white/10 rounded-full relative transition-colors duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-text dark:bg-white" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-text dark:bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-[120px] relative bg-bg">
        <div className="absolute inset-0 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-4">Core Values</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-text">
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
                className="card p-8 rounded-2xl text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-light flex items-center justify-center mb-6 text-green-icon">
                  {value.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-text mb-2">{value.title}</h4>
                <p className="text-sm text-text-secondary">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeIn} className="section-label justify-center mb-4">Leadership</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-text">
            The Executive Team
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 text-center lg:grid-cols-3 gap-8">
          {[
            { name: "Sarwan Thondamalla", role: "Chief Executive Officer", desc: "Leading the company’s vision, strategy, and innovation in artificial intelligence, software solutions, and global technology initiatives. He focuses on building scalable products and driving the company’s long-term growth.", initials: "ST" },
            { name: "Gali Chandu Kumar", role: "Chief Operating Officer", desc: "Responsible for business development, operations, and global partnerships. He works on expanding the company’s international network and strengthening its technology-driven business ecosystem.", initials: "GCK" },
          ].map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card p-8 rounded-2xl text-center group transition-colors"
            >
              <div className="w-24 h-24 rounded-full bg-green-light flex items-center justify-center mx-auto mb-6 text-2xl font-display font-bold text-green-icon">
                {leader.initials}
              </div>
              <h3 className="text-2xl font-display font-bold text-text mb-1">{leader.name}</h3>
              <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">{leader.role}</h4>
              <p className="text-[15px] text-text-secondary leading-[1.6]">{leader.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden bg-surface">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text mb-6">Join our journey</h2>
            <p className="text-lg text-text-secondary mb-10">Whether you're looking to partner, invest, or join our team, we're always looking for exceptional people.</p>
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

      <section id="incorporation" className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-12 text-center"
        >
          <motion.div variants={fadeIn} className="section-label justify-center mb-4">Company Incorporation Details</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-text">
            Statutory Information
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Legal Company Name", value: "Sarwagyna Pvt Ltd" },
            { label: "Corporate Identification Number (CIN)", value: "U62013AP2026PTC124652" },
            { label: "Type of Company", value: "Private Limited" },
            { label: "Registered Office Address", value: "D NO. 7-7-24/2, Block 10, VIP RD 2nd Line, Ongole, Prakasam- 523001, Andhra Pradesh" },
            { label: "Directors / Founders", value: "Sarwan Thondamalla" },
            { label: "Official Email Address", value: "contact@sarwagyna.com" },
            { label: "Corporate Website", value: "www.sarwagyna.com" },
          ].map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="card p-5 rounded-2xl flex items-start justify-between gap-6"
            >
              <span className="text-text-secondary text-sm shrink-0">{row.label}</span>
              <span className="text-text font-medium text-sm text-right">{row.value}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
