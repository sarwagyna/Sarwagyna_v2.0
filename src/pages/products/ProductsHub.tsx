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
        ],
        pricing: [
          { name: 'Starter', price: 'Free', desc: 'For small community events.', features: ['Up to 100 tickets/mo', 'Basic analytics', 'Email support'] },
          { name: 'Pro', price: '$49/mo', desc: 'For professional organizers.', features: ['Unlimited tickets', 'Custom branding', 'Priority support', 'API access'], popular: true },
          { name: 'Enterprise', price: 'Custom', desc: 'For large-scale festivals.', features: ['Dedicated account manager', 'White-label app', 'On-site support'] }
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
        ],
        pricing: [
          { name: 'Basic', price: 'Free', desc: 'For individuals.', features: ['1 active event type', 'Google Calendar sync', 'Basic booking page'] },
          { name: 'Professional', price: '$12/mo', desc: 'For consultants & freelancers.', features: ['Unlimited event types', 'Payment collection', 'WhatsApp reminders', 'Remove branding'], popular: true },
          { name: 'Team', price: '$25/user', desc: 'For sales & support teams.', features: ['Round-robin scheduling', 'Team analytics', 'Salesforce integration'] }
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
        ],
        pricing: [
          { name: 'Starter', price: 'Free', desc: 'For new businesses.', features: ['Up to 50 invoices/mo', 'Basic templates', 'UPI payments'] },
          { name: 'Business', price: '$19/mo', desc: 'For growing SMEs.', features: ['Unlimited invoices', 'Expense tracking', 'Recurring billing', 'Custom domain'], popular: true },
          { name: 'Enterprise', price: '$99/mo', desc: 'For larger operations.', features: ['Multi-entity support', 'API access', 'Dedicated support'] }
        ]
      }
    };

  const activeProduct = products[activeTab as keyof typeof products];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="SaaS Products | SarwHub, SarwCal, SarwBill | Sarwagyna"
        description="Explore Sarwagyna's suite of SaaS products: SarwHub for events, SarwCal for scheduling, and SarwBill for invoicing. Built for modern business."
        ogTitle="Sarwagyna Products: Built for Modern Business"
        ogDescription="Discover our scalable SaaS portfolio designed to streamline operations, manage events, and secure your finances."
        url="/products"
      />

      {/* Hero & Tabs */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeIn} className="section-label justify-center text-white/60 mb-6">
              OUR SAAS PORTFOLIO
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-6 text-white">
              Built for Modern Business
            </motion.h1>
          </motion.div>

          {/* Tab Bar */}
          <div className="flex justify-center mb-12">
            <div className="glass-panel p-2 rounded-2xl inline-flex gap-2">
              {Object.values(products).map(product => (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`px-8 py-3 rounded-xl font-display font-semibold text-sm transition-all duration-300 relative ${
                    activeTab === product.id ? 'text-white' : 'text-white/45 hover:text-white/80'
                  }`}
                >
                  {product.name}
                  {activeTab === product.id && (
                    <motion.div 
                      layoutId="activeTab"
                      className={`absolute bottom-0 left-0 w-full h-1 rounded-full bg-white`}
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
      <section className="pb-[120px]">
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
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{activeProduct.name}</h2>
                  <p className="text-xl font-medium mb-6 text-white/80">{activeProduct.tagline}</p>
                  <p className="text-lg text-white/60 leading-[1.7] max-w-xl">{activeProduct.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeProduct.features.map((feature, i) => (
                    <div key={i} className="glass-panel p-6 rounded-2xl hover:bg-white/[0.06] transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-white">
                        {feature.icon}
                      </div>
                      <h4 className="text-lg font-display font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-sm text-white/45 leading-[1.6]">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Mockup & Pricing */}
              <div className="lg:w-[45%] flex flex-col gap-12">
                {/* Mockup Frame */}
                <div className="relative rounded-3xl p-1 overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeProduct.gradient} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                  <div className="relative bg-black/90 backdrop-blur-2xl rounded-[22px] aspect-[4/3] border border-white/10 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-white/5" />
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 text-white">
                        <BarChart3 className="w-8 h-8" />
                      </div>
                      <p className="text-white/40 font-mono text-sm uppercase tracking-widest">{activeProduct.name} Dashboard</p>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">Simple, Transparent Pricing</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                    {activeProduct.pricing.map((tier, i) => (
                      <div 
                        key={i} 
                        className={`glass-panel rounded-2xl p-6 relative ${tier.popular ? 'border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] scale-105 z-10 bg-white/[0.06]' : 'scale-100 z-0'}`}
                      >
                        {tier.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-black bg-white">
                            Most Popular
                          </div>
                        )}
                        <h4 className="text-lg font-display font-bold text-white mb-1">{tier.name}</h4>
                        <div className="text-2xl font-display font-extrabold text-white mb-2">{tier.price}</div>
                        <p className="text-xs text-white/45 mb-6 h-8">{tier.desc}</p>
                        <ul className="space-y-3 mb-8">
                          {tier.features.map((feat, j) => (
                            <li key={j} className="flex items-start text-xs text-white/60">
                              <CheckCircle2 className="w-3.5 h-3.5 mr-2 mt-0.5 flex-shrink-0 text-white" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                        <button className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${tier.popular ? 'text-black bg-white' : 'glass-button-ghost'}`}>
                          Get Started
                        </button>
                      </div>
                    ))}
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
