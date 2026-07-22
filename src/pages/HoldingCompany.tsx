'use client';

import { motion, Variants } from 'framer-motion';
import { Target, Eye, Users, ArrowRight, Building2, Globe, Zap, ShieldCheck, Layers, BarChart3, Cpu } from 'lucide-react';
import Link from 'next/link';
import CtaButton from '@/components/ui/CtaButton';

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
              Sarwagyna is an AI-first technology company building enterprise AI agents, SaaS platforms, and strategic investments — founded in India. We build resilient businesses that power the modern economy.
            </motion.p>

            <motion.div variants={fadeIn} className="flex justify-center">
              <CtaButton onClick={() => document.getElementById('mission-vision')?.scrollIntoView({ behavior: 'smooth' })}>
                Discover Our Story
              </CtaButton>
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


      {/* Milestone Journey Timeline */}
      <section id="roadmap" className="py-[120px] relative bg-bg overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-4">Our Journey</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-text">
              Milestone Journey
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-px bg-border-subtle md:-translate-x-1/2" />

            <div className="space-y-12">
              {[
                {
                  year: "Jun 2025",
                  title: "The Idea Takes Shape",
                  desc: "First discussions and conceptualization of an AI-first technology company.",
                  status: "done"
                },
                {
                  year: "06 Jul 2025",
                  title: "Official Founding",
                  desc: "Official founding date of Sarwagyna, marking the start of our journey.",
                  status: "done"
                },
                {
                  year: "Jul '25 – Feb '26",
                  title: "Foundation Phase",
                  desc: "Market research, capability testing, learning, building and experimenting with core AI technologies.",
                  status: "done"
                },
                {
                  year: "12 Mar 2026",
                  title: "Sarwagyna Pvt Ltd Incorporated",
                  desc: "Successfully incorporated under MCA, India. A major milestone in our corporate history.",
                  status: "done"
                },
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative flex items-center mb-8 ${i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-11 h-11 rounded-full bg-white border border-border-subtle flex items-center justify-center z-20 md:-translate-x-1/2">
                    <div className={`w-3 h-3 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)] ${milestone.status === 'done' ? 'bg-green-icon' :
                      milestone.status === 'in-progress' ? 'bg-amber-500' :
                        'bg-gray-300'
                      }`} />
                  </div>

                  {/* Content Panel */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 text-left"
                    }`}>
                    <div className={`card p-8 rounded-2xl transition-all group ${milestone.status === 'done' ? 'hover:border-green-icon/30' :
                      milestone.status === 'in-progress' ? 'hover:border-amber-500/30' :
                        ''
                      }`}>
                      <span className={`text-sm font-bold mb-2 block uppercase tracking-wider ${milestone.status === 'done' ? 'text-green-icon' :
                        milestone.status === 'in-progress' ? 'text-amber-600' :
                          'text-text-secondary'
                        }`}>{milestone.year}</span>
                      <h3 className={`text-xl font-display font-bold text-text mb-3 transition-colors ${milestone.status === 'done' ? 'group-hover:text-green-icon' :
                        milestone.status === 'in-progress' ? 'group-hover:text-amber-600' :
                          ''
                        }`}>{milestone.title}</h3>
                      <p className="text-sm text-text-secondary leading-[1.8]">{milestone.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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

      {/* Team */}
      <section id="team" className="py-[120px] relative bg-surface border-y border-border-subtle">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-4">Our Team</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-text">
              The People Building Sarwagyna
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarwan Thondamalla',
                role: 'Founder & CEO',
                bio: 'Co-builds the product, AI pipeline & full stack alongside engineering. B.Tech CSE (AI/ML), SRMIST.',
              },
              {
                name: 'Gali Chandu Kumar',
                role: 'Co-Founder, Sales & BD',
                bio: 'Leads doctor outreach, clinic acquisition & GTM across AP & Telangana. B.Tech CSE (Data Science), Parul University.',
              },
              {
                name: 'Yaswanth Kumar C.',
                role: 'Head of Engineering',
                bio: 'Owns cloud infra, DevOps & deployment reliability. B.Tech CSE, QIS College.',
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card p-8 rounded-2xl"
              >
                <div className="w-14 h-14 rounded-full bg-green-light flex items-center justify-center mb-5 text-green-icon">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-display font-bold text-text mb-1">{member.name}</h4>
                <p className="text-sm font-semibold text-(--color-primary) mb-3">{member.role}</p>
                <p className="text-sm text-text-secondary leading-[1.75]">{member.bio}</p>
              </motion.div>
            ))}
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
            { label: "GSTIN", value: "37ABTCS0879E1ZR" },
            { label: "Type of Company", value: "Private Limited" },
            { label: "Registered Office Address", value: "D NO. 7-7-24/2, Block 10, VIP RD 2nd Line, Ongole, Prakasam- 523001, Andhra Pradesh" },
            { label: "Directors / Founders", value: "Dr.P.Hanumantha Rao, Sarwan Thondamalla" },
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
