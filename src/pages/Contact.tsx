'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, Workflow, Layers, MessageSquare, BotMessageSquare, Building2 } from 'lucide-react';

const contactCards = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'Sales & Partnerships',
    description: 'Discuss enterprise solutions, partnerships, or custom software development.',
    link: { label: 'sarwan@sarwagyna.com', href: 'mailto:sarwan@sarwagyna.com' },
  },
  {
    icon: <BotMessageSquare className="w-5 h-5" />,
    title: 'Product Support',
    description: 'Get help with our products or your custom AI deployments.',
    link: { label: 'contact@sarwagyna.com', href: 'mailto:contact@sarwagyna.com' },
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: 'Global Headquarters',
    description: 'Sarwagyna Pvt Ltd. (Remote Office)\nIndia',
    link: { label: '+91 63050 36991', href: 'https://wa.me/916305036991' },
  },
];

const bullets = [
  { icon: <Bot className="w-4 h-4" />, text: 'AI systems & automation' },
  { icon: <Workflow className="w-4 h-4" />, text: 'Workflow optimization' },
  { icon: <Layers className="w-4 h-4" />, text: 'Scalable software architecture' },
];

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-text">
      <section className="pt-32 pb-20 max-w-[1200px] mx-auto px-4 sm:px-6 w-full">

        {/* Heading + description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="section-label mb-4">GET IN TOUCH</div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-text mb-4">
            Start a Conversation
          </h1>
          <p className="text-[16px] text-text-secondary leading-[1.75] max-w-xl">
            Tell us what you're building. We'll schedule a call and discuss your requirements, system design, and next steps.
          </p>
        </motion.div>

        {/* Bullets */}
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-surface text-[13px] font-medium text-text">
              <span className="text-(--color-primary)">{b.icon}</span>
              {b.text}
            </li>
          ))}
        </motion.ul>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
        >
          {contactCards.map((card, i) => (
            <div key={i} className="glass-panel rounded-2xl border border-border-subtle p-6">
              <span className="text-text-secondary mb-4 block">{card.icon}</span>
              <h3 className="text-[17px] font-bold text-text mb-2">{card.title}</h3>
              <p className="text-[14px] text-text-secondary leading-relaxed mb-4 whitespace-pre-line">
                {card.description}
              </p>
              <a
                href={card.link.href}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-text hover:text-primary transition-colors group"
              >
                {card.link.label}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </motion.div>

        {/* Cal.com embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel rounded-2xl overflow-hidden border border-border-subtle"
        >
          <iframe
            src="https://cal.com/sarwagyna/30min?embed=true&theme=auto&hideEventTypeDetails=false&layout=month_view"
            className="w-full"
            style={{ height: '600px', width: "100%", border: 'none' ,  borderRadius: "20px" }}
            title="Schedule a call with Sarwagyna"
            loading="lazy"
          />
        </motion.div>

      </section>
    </div>
  );
}
