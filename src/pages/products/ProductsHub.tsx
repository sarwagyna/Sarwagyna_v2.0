import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Calendar, CreditCard, Users, BarChart3, Shield, Zap, Smartphone, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

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

export default function ProductsHub() {
  const [activeTab, setActiveTab] = useState('sarwhub');

    const products = {
      sarwhub: {
        id: 'sarwhub',
        name: 'SarwHub',
        tagline: 'Event Management & Ticketing',
        color: '#FFFFFF',
        gradient: 'from-white/40 to-white/10',
        description: 'The complete solution for event organizers. Manage ticketing, check-ins, and analytics from a single dashboard.',
        features: [
          { icon: <Globe />, title: 'Custom Landing Pages', desc: 'Create beautiful, branded event pages in minutes without coding.' },
          { icon: <Smartphone />, title: 'QR Check-ins', desc: 'Fast, secure attendee verification at the venue using our mobile app.' },
          { icon: <BarChart3 />, title: 'Real-time Analytics', desc: 'Track ticket sales, revenue, and attendee demographics live.' },
          { icon: <Users />, title: 'Multi-organizer', desc: 'Collaborate with your team and manage multiple vendors easily.' },
          { icon: <CreditCard />, title: 'Instant Payouts', desc: 'Get paid faster with automated revenue splits and direct bank transfers.' },
          { icon: <Shield />, title: 'Fraud Prevention', desc: 'Bank-grade security and secure ticket transfers to prevent scalping.' }
        ]
      },
      sarwcal: {
        id: 'sarwcal',
        name: 'SarwCal',
        tagline: 'Smart Calendar Booking',
        color: '#FFFFFF',
        gradient: 'from-white/40 to-white/10',
        description: 'Automate your bookings and eliminate the back-and-forth of scheduling meetings. Built for Indian businesses.',
        features: [
          { icon: <Calendar />, title: 'Calendar Sync', desc: 'Seamlessly sync with Google, Outlook, and Apple calendars.' },
          { icon: <CreditCard />, title: 'Paid Bookings', desc: 'Collect payments upfront with integrated GST invoicing.' },
          { icon: <Smartphone />, title: 'WhatsApp Reminders', desc: 'Reduce no-shows with automated WhatsApp and SMS confirmations.' },
          { icon: <Users />, title: 'Team Scheduling', desc: 'Round-robin assignment and collective availability for teams.' },
          { icon: <Globe />, title: 'Timezone Intelligence', desc: 'Automatic timezone detection for international clients.' },
          { icon: <Zap />, title: 'Custom Workflows', desc: 'Trigger actions in your CRM or marketing tools after booking.' }
        ]
      },
      sarwbill: {
        id: 'sarwbill',
        name: 'SarwBill',
        tagline: 'Invoicing & Expense Analytics',
        color: '#FFFFFF',
        gradient: 'from-white/40 to-white/10',
        description: 'Professional invoicing, expense tracking, and financial analytics for modern SMEs.',
        features: [
          { icon: <Zap />, title: '1-Click Invoicing', desc: 'Generate professional, GST-compliant invoices in under 60 seconds.' },
          { icon: <CreditCard />, title: 'Payment Links', desc: 'Get paid faster with integrated UPI and credit card payment links.' },
          { icon: <BarChart3 />, title: 'Expense Tracking', desc: 'Visual dashboards tracking revenue, expenses, and profitability.' },
          { icon: <Calendar />, title: 'Recurring Billing', desc: 'Automate subscription billing and payment follow-ups.' },
          { icon: <Lock />, title: 'CA Access', desc: 'Secure portal for your accountant to export data for filing.' },
          { icon: <Shield />, title: 'E-Invoicing Ready', desc: 'Fully compliant with the latest government e-invoicing mandates.' }
        ]
      }
    };

  const activeProduct = products[activeTab as keyof typeof products];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <SEO 
        title="SaaS Products | SarwHub, SarwCal, SarwBill | Sarwagyna"
        description="Explore Sarwagyna's suite of SaaS products: SarwHub for events, SarwCal for scheduling, and SarwBill for invoicing. Built for modern business."
        ogTitle="Sarwagyna Products: Built for Modern Business"
        ogDescription="Discover our scalable SaaS portfolio designed to streamline operations, manage events, and secure your finances."
        url="/products"
      />

      {/* Hero & Tabs */}
      <section className="pt-32 pb-12 relative overflow-hidden bg-[var(--color-bg)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeIn} className="section-label justify-center mb-6">
              OUR SAAS PORTFOLIO
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-[46px] md:text-[56px] font-display font-extrabold tracking-[-0.06em] mb-6 text-[var(--color-text)]"
            >
              Built for Modern Business
            </motion.h1>
          </motion.div>

          {/* Tab Bar */}
          <div className="flex justify-center mb-12">
            <div className="card p-2 rounded-2xl inline-flex gap-2 bg-[var(--color-surface)]">
              {Object.values(products).map(product => (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`px-8 py-3 rounded-xl font-display font-semibold text-sm transition-all duration-300 relative ${
                    activeTab === product.id
                      ? 'text-[var(--color-text)]'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {product.name}
                  {activeTab === product.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-[var(--color-primary)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Content */}
      <section className="pb-[120px] bg-[var(--color-bg)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row gap-16"
            >
              {/* Left Column: Features */}
              <div className="lg:w-[55%]">
                <div className="mb-10">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text)] mb-2">
                    {activeProduct.name}
                  </h2>
                  <p className="text-sm uppercase tracking-[0.14em] text-[var(--color-text-muted)] mb-4">
                    {activeProduct.tagline}
                  </p>
                  <p className="text-lg text-[var(--color-text-secondary)] leading-[1.75] max-w-xl">
                    {activeProduct.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeProduct.features.map((feature, i) => (
                    <div key={i} className="card p-6 rounded-2xl flex flex-col">
                      <div className="w-10 h-10 rounded-[8px] bg-[var(--color-green-light)] flex items-center justify-center mb-4 text-[var(--color-green-icon)]">
                        {feature.icon}
                      </div>
                      <h4 className="text-lg font-display font-semibold text-[var(--color-text)] mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-[1.6]">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Mockup & CTA */}
              <div className="lg:w-[45%] flex flex-col gap-12">
                {/* Mockup Frame */}
                <div className="relative rounded-3xl p-1 overflow-hidden group">
                  <div className="relative bg-[var(--color-surface)] rounded-[22px] aspect-[4/3] border border-[var(--color-border-subtle)] flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-[var(--color-green-light)] flex items-center justify-center mx-auto mb-4 text-[var(--color-green-icon)]">
                        <BarChart3 className="w-8 h-8" />
                      </div>
                      <p className="text-[var(--color-text-muted)] font-mono text-sm uppercase tracking-widest">
                        {activeProduct.name} Dashboard
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Panel */}
                <div className="card rounded-2xl p-8 text-center bg-[var(--color-surface)]">
                  <h3 className="text-2xl font-display font-bold text-[var(--color-text)] mb-4">Ready to Get Started?</h3>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                    Explore full product details or talk to our team for tailored guidance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to={`/products/${activeProduct.id}`} className="glass-button-primary px-8 py-3 text-center flex items-center justify-center">
                      Explore {activeProduct.name} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <button className="glass-button-ghost px-8 py-3 text-center">
                      Talk to Sales
                    </button>
                  </div>
                </div>

                {/* CTA Row */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to={`/products/${activeProduct.id}`} className="glass-button-primary px-8 py-4 text-center flex items-center justify-center">
                    View Full Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <button className="glass-button-ghost px-8 py-4 text-center">
                    Book a Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
