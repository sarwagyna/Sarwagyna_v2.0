'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Handshake, Rocket, Users, ArrowRight } from 'lucide-react';
import CtaButton from '@/components/ui/CtaButton';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

interface PartnerWithUsProps {
  compact?: boolean;
}

export default function PartnerWithUs({ compact = false }: PartnerWithUsProps) {
  return (
    <div className={`flex flex-col ${compact ? '' : 'min-h-screen'}`}>

      {/* Hero Section - Only show if not compact */}
      {!compact && (
        <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-bg/5 pointer-events-none" />

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
                <span className="text-text block">Grow Faster.</span>
                <span className="text-gradient block">Together.</span>
              </motion.h1>

              <motion.p variants={fadeIn} className="text-lg text-text-secondary font-light mb-10 max-w-2xl mx-auto leading-[1.7]">
                We believe in the power of collaboration. Partner with Sarwagyna to leverage our technology, and industry expertise to scale your vision.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
                <CtaButton onClick={() => document.getElementById('partnership-types')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Programs
                </CtaButton>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Partnership Types - Only show if not compact */}
      {!compact && (
        <section id="partnership-types" className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-4">How We Can Collaborate</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-text">
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
                className="glass-panel p-8 rounded-2xl border-l border-l-border-subtle group hover:bg-linear-to-br hover:from-bg/8 hover:to-transparent"
              >
                <div className="w-12 h-12 rounded-xl bg-bg/5 flex items-center justify-center mb-6 text-text">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-text mb-4">{program.title}</h3>
                <p className="text-text-secondary leading-[1.7] mb-6">{program.desc}</p>
                <div className="flex items-center text-text font-medium group-hover:text-gradient transition-colors cursor-pointer">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Why Partner Section - Only show if not compact */}
      {!compact && (
        <section className="py-[120px] bg-bg">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="section-label mb-6">WHY PARTNER WITH US</div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-text mb-8 leading-tight">
                  Accelerate Your Growth with Our Ecosystem
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Global Reach", desc: "Access international markets through our established corridors and digital presence." },
                    { title: "AI-First Expertise", desc: "Leverage our deep technical knowledge in artificial intelligence and modern software architecture." },
                    { title: "Operational Excellence", desc: "Benefit from our streamlined processes and capital-efficient business models." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-bg/10 shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-(--color-primary)" />
                      </div>
                      <div>
                        <h4 className="text-text font-bold mb-1">{item.title}</h4>
                        <p className="text-text-secondary text-sm">{item.desc}</p>
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
                  <div className="w-full h-full rounded-[22px] bg-linear-to-br from-bg/10 to-transparent flex items-center justify-center p-12">
                    <Handshake size={200} strokeWidth={0.5} className="text-text-secondary/20" />
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-2xl animate-bounce-slow">
                  <div className="text-3xl font-bold text-text mb-1">5+</div>
                  <div className="text-[10px] uppercase tracking-widest text-text-secondary">Partners</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
