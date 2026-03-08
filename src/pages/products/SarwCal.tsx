import React, { useState } from 'react';
import { Calendar, Check, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../../components/SEO';

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <h4 className="text-lg font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const PricingCard = ({ name, price, tagline, features, cta, isPopular = false, bestFor }: any) => (
  <div className={`relative bg-white p-8 rounded-2xl border ${isPopular ? 'border-gray-500 shadow-lg' : 'border-gray-200 shadow-sm'} flex flex-col h-full`}>
    {isPopular && (
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
        Most Popular
      </span>
    )}
    <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
    <p className="text-sm text-gray-500 mb-6 h-10">{tagline}</p>
    <div className="mb-6">
      <span className="text-4xl font-extrabold text-gray-900">{price}</span>
      {price !== 'Free' && price !== 'Custom' && <span className="text-gray-500">/month</span>}
    </div>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature: string, idx: number) => (
        <li key={idx} className="flex items-start">
          <Check className={`w-5 h-5 mr-3 shrink-0 ${isPopular ? 'text-gray-500' : 'text-gray-400'}`} />
          <span className="text-gray-700 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-semibold transition-colors mb-4 ${isPopular ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
      {cta}
    </button>
    <p className="text-xs text-center text-gray-500">{bestFor}</p>
  </div>
);

export default function SarwCal() {
  return (
    <div className="bg-white pt-20">
      <SEO 
        title="SarwCal: Smart Scheduling for Indian Professionals | Sarwagyna"
        description="Stop the back-and-forth emails. SarwCal is the smart scheduling tool built for India, featuring UPI payments, WhatsApp reminders, and IST-native booking."
        ogTitle="SarwCal: The Calendly Alternative for India"
        ogDescription="Book meetings, collect payments, and send WhatsApp reminders automatically. SarwCal is designed specifically for Indian consultants and teams."
        url="/products/sarwcal"
      />
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4" />
              <span>The Smart Scheduling Tool Built for India</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Stop the Back-and-Forth Emails.</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Booking meetings shouldn't be a chore. SarwCal is the Calendly alternative designed specifically for Indian professionals. With native UPI integration, WhatsApp reminders, and IST-first timezone handling, you can focus on the meeting, not the scheduling.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">Create Free Account</button>
              <button className="px-8 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors">View Live Demo</button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why SarwCal vs Calendly?</h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-center">
                While global tools are great, they often miss the nuances of the Indian market. SarwCal is built from the ground up to solve local friction points. We integrate directly with Indian payment gateways (Razorpay, PayU) so you can collect consultation fees via UPI before the meeting is even booked. We replace easily ignored email reminders with high-open-rate WhatsApp notifications, drastically reducing no-shows. And our pricing is in Rupees, making it affordable for independent consultants and growing teams alike.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <FeatureCard 
              title="UPI & Payment Integration" 
              description="Require payment at the time of booking. Connect your Razorpay or Stripe account to collect consultation fees instantly via UPI or cards." 
            />
            <FeatureCard 
              title="Automated WhatsApp Reminders" 
              description="Reduce no-shows by up to 40%. Send automated booking confirmations and reminders directly to your clients' WhatsApp." 
            />
            <FeatureCard 
              title="Multi-Calendar Sync" 
              description="Never double-book again. Sync your Google Calendar, Outlook, and Apple Calendar in real-time to block out busy slots automatically." 
            />
            <FeatureCard 
              title="Custom Booking Pages" 
              description="Look professional with a branded booking page. Add your logo, custom colors, and personalized welcome messages." 
            />
            <FeatureCard 
              title="Team Scheduling (Round Robin)" 
              description="Distribute meetings fairly across your sales or support team. Automatically route clients to the next available team member." 
            />
            <FeatureCard 
              title="Buffer Times & Limits" 
              description="Protect your energy. Automatically add buffer times between meetings and cap the maximum number of meetings per day." 
            />
          </div>

          <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Built for How You Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2 text-blue-300">Consultants & Freelancers</h4>
                <p className="text-blue-100 text-sm">Monetize your time effortlessly. Share your link, collect payment via UPI, and meet.</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2 text-blue-300">Doctors & Clinics</h4>
                <p className="text-blue-100 text-sm">Manage patient appointments, send WhatsApp reminders, and reduce costly no-shows.</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2 text-blue-300">Sales & Support Teams</h4>
                <p className="text-blue-100 text-sm">Route leads to the right rep instantly with Round Robin scheduling and CRM integrations.</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Start for free, upgrade when you need advanced features like payments and team routing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              name="Free" price="Free" tagline="The basics for individuals getting started."
              features={['1 active event type', 'Google Calendar sync', 'Basic booking page', 'Email reminders']}
              cta="Sign Up Free" bestFor="Best for casual users"
            />
            <PricingCard 
              name="Professional" price="₹499" tagline="For independent consultants and freelancers."
              features={['Unlimited event types', 'UPI & Card payments', 'WhatsApp reminders', 'Custom branding', 'Multiple calendar connections']}
              cta="Start 14-Day Trial" isPopular={true} bestFor="Best for solo professionals"
            />
            <PricingCard 
              name="Team" price="₹999" tagline="For growing teams that need advanced routing."
              features={['Round Robin scheduling', 'Team performance analytics', 'CRM integrations (HubSpot, Salesforce)', 'Admin controls', 'Priority support']}
              cta="Contact Sales" bestFor="Best for sales & support teams"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
