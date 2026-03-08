import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Workflow, Code2, BrainCircuit, Rocket, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
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

export default function AiIt() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', projectType: '', budget: '', details: '' });

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="AI & IT Services | Enterprise Intelligence | Sarwagyna"
        description="Enterprise AI agents, workflow automation, custom software, and web development. Scalable technology solutions by Sarwagyna."
        ogTitle="Sarwagyna AI & IT: Enterprise Intelligence Delivered"
        ogDescription="Transform your business with our AI-first technology services. From custom AI agents to enterprise software development."
        url="/ai-it"
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-16 overflow-hidden">
        {/* CSS Particle Dots Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
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
            
            <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-[80px] font-display font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-white block">Enterprise Intelligence.</span>
              <span className="text-gradient block">Delivered.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-white/45 font-light mb-10 max-w-2xl mx-auto leading-[1.7]">
              AI agents, intelligent workflows, enterprise web development, custom AI models, startup launchpads, and scalable enterprise software. We build the future of your business.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => document.getElementById('proposal-form')?.scrollIntoView({ behavior: 'smooth' })} className="glass-button-primary px-8 py-4">
                Start a Project
              </button>
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
          <motion.div variants={fadeIn} className="section-label mb-4">Our Capabilities</motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
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
              className="glass-panel p-8 rounded-2xl group border-t border-t-white/50 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white">
                {service.icon}
              </div>
              <h3 className="text-[22px] font-display font-bold text-white mb-4">{service.title}</h3>
              <p className="text-[15px] text-white/45 mb-6 flex-grow leading-[1.7]">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/60 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <div className="pt-4 border-t border-white/10 mt-auto">
                <p className="text-xs font-semibold text-white uppercase tracking-wider">Best For: <span className="text-white/60 font-normal">{service.for}</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
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
            <motion.div variants={fadeIn} className="section-label justify-center mb-4">How We Work</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
              The Delivery Pipeline
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 border-t border-dashed border-white/30" />
            
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
                  <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-xl font-display font-bold text-white mb-6 bg-black">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-display font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-white/45 leading-[1.6]">{item.desc}</p>
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
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
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
                <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">{row.category}</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {row.tech.map(t => (
                  <span key={t} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/60 hover:text-white hover:border-white/50 transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
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
            <motion.div variants={fadeIn} className="section-label justify-center mb-4">Partnership Options</motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold text-white">
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
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white to-transparent opacity-5 rounded-bl-full`} />
                <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10">{model.title}</h3>
                <p className="text-white/45 leading-[1.7] relative z-10">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal Form */}
      <section id="proposal-form" className="py-[120px] max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-white/50" />
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Request a Proposal</h2>
            <p className="text-white/45">Tell us about your project, and our engineering team will get back to you within 24 hours.</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-between mb-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
            <div className="absolute top-1/2 left-0 h-[2px] bg-white -translate-y-1/2 z-0 transition-all duration-500" style={{ width: `${((formStep - 1) / 2) * 100}%` }} />
            
            {[1, 2, 3].map(step => (
              <div key={step} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold relative z-10 transition-colors duration-300 ${formStep >= step ? 'bg-white text-black' : 'bg-black border border-white/20 text-white/40'}`}>
                {step}
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden min-h-[300px]">
            <AnimatePresence mode="wait">
              {formStep === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6 absolute w-full"
                >
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Work Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="john@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <button onClick={() => setFormStep(2)} className="w-full glass-button-primary py-4 mt-4 flex items-center justify-center">
                    Next Step <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {formStep === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6 absolute w-full"
                >
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Project Type</label>
                    <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none" value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})}>
                      <option value="">Select a service...</option>
                      <option value="ai-agents">AI Agents & Automation</option>
                      <option value="web-dev">Web Development</option>
                      <option value="enterprise">Enterprise Software</option>
                      <option value="consulting">AI Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Estimated Budget</label>
                    <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
                      <option value="">Select budget range...</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <button onClick={() => setFormStep(1)} className="w-1/3 glass-button-ghost py-4">Back</button>
                    <button onClick={() => setFormStep(3)} className="w-2/3 glass-button-primary py-4 flex items-center justify-center">
                      Next Step <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {formStep === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6 absolute w-full"
                >
                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 mb-2">Project Details</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none" placeholder="Briefly describe your goals, timeline, and current challenges..." value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} />
                  </div>
                  <div className="flex gap-4 mt-4">
                    <button onClick={() => setFormStep(2)} className="w-1/3 glass-button-ghost py-4">Back</button>
                    <button className="w-2/3 glass-button-primary py-4 flex items-center justify-center">
                      Submit Request <CheckCircle2 className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
