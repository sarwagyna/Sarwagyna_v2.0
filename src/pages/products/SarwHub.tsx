import React, { useState } from 'react';
import { Ticket, Check, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../../components/SEO';

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
  <div className="glass-panel p-6 rounded-xl hover:bg-white/[0.06] transition-colors">
    <h4 className="text-lg font-bold text-white mb-3">{title}</h4>
    <p className="text-white/60 text-sm leading-relaxed">{description}</p>
  </div>
);

const PricingCard = ({ name, price, tagline, features, cta, isPopular = false, bestFor }: any) => (
  <div className={`relative glass-panel p-8 rounded-2xl border ${isPopular ? 'border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.05)] scale-105 z-10 bg-white/[0.06]' : 'border-white/10 scale-100 z-0'} flex flex-col h-full`}>
    {isPopular && (
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
        Most Popular
      </span>
    )}
    <h4 className="text-xl font-bold text-white mb-2">{name}</h4>
    <p className="text-sm text-white/45 mb-6 h-10">{tagline}</p>
    <div className="mb-6">
      <span className="text-4xl font-extrabold text-white">{price}</span>
      {price !== 'Free' && price !== 'Custom' && <span className="text-white/45">/month</span>}
    </div>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature: string, idx: number) => (
        <li key={idx} className="flex items-start">
          <Check className={`w-5 h-5 mr-3 shrink-0 ${isPopular ? 'text-white' : 'text-white/45'}`} />
          <span className="text-white/60 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-semibold transition-colors mb-4 ${isPopular ? 'bg-white text-black hover:bg-white/90' : 'glass-button-ghost'}`}>
      {cta}
    </button>
    <p className="text-xs text-center text-white/45">{bestFor}</p>
  </div>
);

const Accordion = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-left font-medium text-white hover:text-white/80 transition-colors">
        <span>{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-white/45" /> : <ChevronDown className="w-5 h-5 text-white/45" />}
      </button>
      {isOpen && <p className="mt-3 text-white/60 text-sm leading-relaxed">{answer}</p>}
    </div>
  );
};

export default function SarwHub() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="SarwHub: Event Management & Ticketing Platform | Sarwagyna"
        description="Sell out your next event stress-free with SarwHub. Get smart ticketing, lightning-fast QR check-ins, and real-time analytics for Indian event organizers."
        ogTitle="SarwHub: The All-in-One Event Management Platform"
        ogDescription="Stop wrestling with multiple tools. SarwHub brings ticketing, landing pages, and real-time analytics under one roof for seamless event execution."
        url="/products/sarwhub"
      />
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/5 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/10">
              <Ticket className="w-4 h-4" />
              <span>The All-in-One Event Management & Ticketing Platform</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Sell Out Your Next Event, Stress-Free.</h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Running events in India means juggling vendors, chaotic check-ins, and delayed payouts. SarwHub brings ticketing, landing pages, and real-time analytics under one roof. Stop wrestling with multiple tools and start delivering unforgettable experiences for your attendees.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="glass-button-primary px-8 py-3">Start Selling Tickets Free</button>
              <button className="glass-button-ghost px-8 py-3">Request Enterprise Demo</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <FeatureCard 
              title="Smart Ticketing" 
              description="Create multiple ticket tiers, early bird offers, and group discounts in minutes. Manage inventory and pricing dynamically." 
            />
            <FeatureCard 
              title="Lightning-Fast QR Check-in" 
              description="Eliminate queues with our offline-first scanner app. Check in thousands of attendees seamlessly, even with spotty venue internet." 
            />
            <FeatureCard 
              title="Custom Event Landing Pages" 
              description="Launch beautiful, mobile-optimized event pages without writing code. Add your branding, schedules, and speaker profiles instantly." 
            />
            <FeatureCard 
              title="Integrated Payments & Fast Payouts" 
              description="Accept UPI, cards, and net banking with industry-leading success rates. Get your funds settled faster than industry standards." 
            />
            <FeatureCard 
              title="Real-Time Analytics Dashboard" 
              description="Track sales, traffic sources, and attendee demographics live. Make data-driven decisions to boost your marketing ROI." 
            />
            <FeatureCard 
              title="Multi-Vendor & Organizer Support" 
              description="Collaborate with co-organizers, manage vendor access, and split revenue automatically. Perfect for complex festivals and large conferences." 
            />
          </div>

          <div className="glass-panel rounded-2xl p-8 md:p-12 mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-display font-bold text-white mb-8">Why SarwHub vs Townscript & BookMyShow?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4 text-white font-bold border border-white/20">1</div>
                  <p className="text-white/60">Lower ticketing fees with transparent pricing—no hidden convenience charges for your attendees.</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4 text-white font-bold border border-white/20">2</div>
                  <p className="text-white/60">Faster payout cycles so you have the cash flow to run your event, not wait for it.</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4 text-white font-bold border border-white/20">3</div>
                  <p className="text-white/60">Complete control over your attendee data—we don't market competing events to your audience.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-display font-bold text-white mb-4">Pricing That Scales With Your Success</h3>
            <p className="text-white/60 max-w-2xl mx-auto">Whether you're hosting an intimate workshop or a multi-day festival, our transparent pricing ensures you only pay for what you need.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <PricingCard 
              name="Starter" price="Free" tagline="Perfect for free events and small workshops."
              features={['Unlimited free tickets', 'Basic event page', 'QR check-in app', 'Standard email support']}
              cta="Get Started Free" bestFor="Best for community meetups"
            />
            <PricingCard 
              name="Pro" price="₹2,999" tagline="For professional organizers running regular paid events."
              features={['Paid ticketing (lowest platform fee)', 'Custom branding', 'Detailed analytics', 'Priority payouts', 'WhatsApp notifications']}
              cta="Start 14-Day Trial" isPopular={true} bestFor="Best for frequent event creators"
            />
            <PricingCard 
              name="Enterprise" price="Custom" tagline="For large-scale festivals, concerts, and corporate events."
              features={['Custom fee structures', 'Dedicated account manager', 'API access', 'On-site support team', 'White-label solutions']}
              cta="Contact Sales" bestFor="Best for massive scale events"
            />
          </div>

          <div className="max-w-3xl mx-auto mb-20">
            <h4 className="text-xl font-display font-bold text-white mb-6 text-center">Frequently Asked Questions</h4>
            <Accordion question="Are there any setup fees?" answer="No, you can create an account and publish your first event completely free of charge. You only pay platform fees on paid ticket sales." />
            <Accordion question="How quickly do I get paid?" answer="Payouts are processed within T+2 business days after successful ticket sales, ensuring you have the cash flow you need." />
            <Accordion question="Can I pass the ticketing fee to attendees?" answer="Yes, you have full control to either absorb the fee into your ticket price or pass it on to the ticket buyer during checkout." />
          </div>

          <div className="glass-panel text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <p className="text-xl italic mb-6 text-white/80">"SarwHub completely transformed how we manage our annual tech conference. The check-in process was flawless, and the analytics helped us sell out a week early."</p>
            <p className="font-semibold text-white/60">— Event Director, Leading Tech Community</p>
          </div>
        </div>
      </section>
    </div>
  );
}
