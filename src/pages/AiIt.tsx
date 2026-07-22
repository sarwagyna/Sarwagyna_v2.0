'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Bot, Workflow, Code2, BrainCircuit, Rocket, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import CtaButton from '@/components/ui/CtaButton';

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

export default function AiIt() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-16 overflow-hidden bg-[var(--color-bg)]">
        {/* Light grid background */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(14,40,29,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-6">
              AI-FIRST TECHNOLOGY SERVICES
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-[46px] sm:text-[56px] lg:text-[64px] font-display font-extrabold leading-[1.05] tracking-[-0.06em] mb-6">
              <span className="text-[var(--color-text)] block">Enterprise Intelligence.</span>
              <span className="text-gradient block">Delivered.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-[17px] text-[var(--color-text-secondary)] font-normal mb-10 max-w-2xl mx-auto leading-[1.75]">
              AI agents, intelligent workflows, enterprise web development, custom AI models, startup launchpads, and scalable enterprise software. We build the future of your business.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
              <CtaButton href="/contact">
                Contact Us
              </CtaButton>
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="glass-button-ghost px-8 py-4">
                Explore Services
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeIn} className="section-label justify-center mb-4">Our Capabilities</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text)] text-center">
            End-to-End Engineering
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Bot />, title: "AI Agents", desc: "Custom-trained autonomous agents that handle customer support, data entry, and complex multi-step reasoning tasks. We build agents that understand your specific business context and integrate seamlessly with your existing tools.", tags: ["LLMs", "LangChain", "Vector DBs", "OpenAI"], for: "Customer Support & Ops Teams" },
            { icon: <Workflow />, title: "Workflow Automation", desc: "Eliminate manual data entry and repetitive tasks. We design and implement intelligent automation pipelines that connect your disparate SaaS tools, databases, and internal systems into unified, zero-touch workflows.", tags: ["n8n", "Make", "Zapier", "Custom APIs"], for: "Operations & Finance" },
            { icon: <Code2 />, title: "Web Development", desc: "High-performance, accessible, and scalable web applications. From marketing sites to complex SaaS dashboards, we build responsive frontends and robust backends using modern JavaScript ecosystems.", tags: ["React", "Next.js", "Node.js", "Tailwind"], for: "Marketing & Product Teams" },
            { icon: <BrainCircuit />, title: "Custom AI Models", desc: "Fine-tuned machine learning models for predictive analytics, computer vision, and natural language processing. We turn your proprietary data into a competitive advantage with custom-trained algorithms.", tags: ["PyTorch", "TensorFlow", "HuggingFace", "AWS"], for: "Data & Strategy Teams" },
            { icon: <Rocket />, title: "Startup Launchpad", desc: "Rapid MVP development for early-stage founders. We take your concept from wireframe to a fully functional, scalable product in weeks, not months, helping you reach market validation faster.", tags: ["MVP", "Agile", "Supabase", "Vercel"], for: "Founders & Early-Stage Startups" },
            { icon: <Building2 />, title: "Enterprise Software", desc: "Secure, scalable, and compliant internal tools and ERP systems. We modernize legacy infrastructure and build custom enterprise software that aligns perfectly with your complex organizational requirements.", tags: ["Microservices", "Docker", "Kubernetes", "PostgreSQL"], for: "Enterprise IT & Operations" }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-8 rounded-2xl group flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-[8px] bg-[var(--color-green-light)] flex items-center justify-center mb-6 text-[var(--color-green-icon)]">
                {service.icon}
              </div>
              <h3 className="text-[20px] font-display font-semibold text-[var(--color-text)] mb-3">
                {service.title}
              </h3>
              <p className="text-[15px] text-[var(--color-text-secondary)] mb-6 flex-grow leading-[1.7]">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full bg-[var(--color-green-light)] text-[10px] font-mono text-[var(--color-primary)] uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-[var(--color-border-subtle)] mt-auto">
                <p className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                  Best For:{' '}
                  <span className="text-[var(--color-text)] font-normal normal-case">
                    {service.for}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-[120px] relative bg-[var(--color-bg)]">
        <div className="absolute inset-0 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-4">How We Work</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text)] text-center">
              The Delivery Pipeline
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-[var(--color-border-subtle)] -translate-y-1/2 border-t border-dashed" />
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
              {[
                { step: "01", title: "Discovery", desc: "Deep dive into your business goals, technical constraints, and user needs." },
                { step: "02", title: "Architecture", desc: "Designing scalable system architecture and selecting the optimal tech stack." },
                { step: "03", title: "Prototyping", desc: "Rapid wireframing and proof-of-concept development for early validation." },
                { step: "04", title: "Development", desc: "Agile sprints with continuous integration and transparent progress tracking." },
                { step: "05", title: "Testing", desc: "Rigorous QA, security audits, and performance optimization." },
                { step: "06", title: "Deployment", desc: "Smooth rollout, team training, and ongoing maintenance support." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full card flex items-center justify-center text-xl font-display font-bold text-[var(--color-text)] mb-6 bg-[var(--color-surface)]">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-display font-bold text-[var(--color-text)] mb-2">{item.title}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-[1.6]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-[120px] max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeIn} className="section-label justify-center mb-4">Our Arsenal</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text)] text-center">
            Modern Tech Stack
          </motion.h2>
        </motion.div>

        <div className="space-y-8">
          {[
            { category: "AI & Machine Learning", tech: ["OpenAI", "Anthropic", "PyTorch", "TensorFlow", "HuggingFace", "Pinecone"] },
            { category: "Frontend Development", tech: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion", "TypeScript"] },
            { category: "Backend & APIs", tech: ["Node.js", "Python", "Go", "GraphQL", "REST", "FastAPI"] },
            { category: "Cloud & DevOps", tech: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Vercel", "GitHub Actions"] }
          ].map((row, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-6 rounded-2xl glass-panel"
            >
              <div className="w-full md:w-48 flex-shrink-0">
                <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">{row.category}</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {row.tech.map(t => (
                  <span key={t} className="px-4 py-2 rounded-full bg-[var(--color-green-light)] text-[var(--color-primary)] text-sm font-medium transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-[120px] relative bg-[var(--color-bg)]">
        <div className="absolute inset-0 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-4">Partnership Options</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text)] text-center">
              Engagement Models
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Project-Based", desc: "Fixed scope, timeline, and budget. Ideal for well-defined projects like MVP development or specific feature implementations." },
              { title: "Retainer", desc: "Ongoing monthly support and development hours. Perfect for continuous improvement, maintenance, and iterative feature rollouts." },
              { title: "Dedicated Team", desc: "A full squad of engineers, designers, and PMs integrated into your company. Best for scaling startups and enterprise initiatives." },
              { title: "AI Consulting", desc: "Strategic advisory on AI adoption, data readiness, and architecture design. For companies looking to build an AI roadmap." }
            ].map((model, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-[var(--color-green-light)] flex items-center justify-center rounded-bl-full`} />
                <h3 className="text-2xl font-display font-bold text-[var(--color-text)] mb-4 relative z-10">{model.title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-[1.7] relative z-10">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal form removed */}
    </div>
  );
}
