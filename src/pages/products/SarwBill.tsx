import React, { useState } from 'react';
import { FileText, Check, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import SEO from '../../components/SEO';

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <h4 className="text-lg font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const PricingCard = ({ name, price, tagline, features, cta, isPopular = false, bestFor }: any) => (
  <div className={`relative bg-white p-8 rounded-2xl border ${isPopular ? 'border-emerald-500 shadow-lg' : 'border-gray-200 shadow-sm'} flex flex-col h-full`}>
    {isPopular && (
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
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
          <Check className={`w-5 h-5 mr-3 shrink-0 ${isPopular ? 'text-emerald-500' : 'text-gray-400'}`} />
          <span className="text-gray-700 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-semibold transition-colors mb-4 ${isPopular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
      {cta}
    </button>
    <p className="text-xs text-center text-gray-500">{bestFor}</p>
  </div>
);

const Accordion = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-left font-medium text-gray-900 hover:text-emerald-600 transition-colors">
        <span>{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && <p className="mt-3 text-gray-600 text-sm leading-relaxed">{answer}</p>}
    </div>
  );
};

export default function SarwBill() {
  return (
    <div className="bg-white pt-20">
      <SEO 
        title="SarwBill: GST Invoicing & Billing Software | Sarwagyna"
        description="Ditch the Excel sheets. SarwBill is the CA-verified GST billing software for Indian SMEs. Generate e-invoices, track inventory, and get paid faster."
        ogTitle="SarwBill: Professional GST Billing Made Simple"
        ogDescription="Create compliant GST invoices in seconds, automate payment reminders, and manage your inventory with SarwBill. Built for growing Indian businesses."
        url="/products/sarwbill"
      />
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <FileText className="w-4 h-4" />
              <span>CA-Verified GST Invoicing & Billing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ditch the Excel Sheets. Bill Like a Pro.</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Indian SMEs lose hours every week wrestling with manual invoices and chasing payments on WhatsApp. SarwBill automates your entire billing workflow—from GST-compliant e-invoicing to automated payment reminders—so you get paid faster and stay perfectly compliant.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors">Start Billing Free</button>
              <button className="px-8 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors">Talk to an Expert</button>
            </div>
          </div>

          <div className="flex justify-center gap-8 mb-20 text-sm font-medium text-gray-500">
            <div className="flex items-center"><ShieldCheck className="w-5 h-5 text-emerald-500 mr-2" /> CA-Verified Templates</div>
            <div className="flex items-center"><ShieldCheck className="w-5 h-5 text-emerald-500 mr-2" /> 100% GST Compliant</div>
            <div className="flex items-center"><ShieldCheck className="w-5 h-5 text-emerald-500 mr-2" /> Bank-Grade Security</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <FeatureCard 
              title="1-Click GST Invoicing" 
              description="Generate professional, error-free GST invoices in seconds. Automatically calculate CGST, SGST, and IGST based on client location." 
            />
            <FeatureCard 
              title="Automated Payment Reminders" 
              description="Stop chasing clients. Set up automated email and SMS reminders for overdue invoices and improve your cash flow instantly." 
            />
            <FeatureCard 
              title="Inventory Management" 
              description="Track stock levels in real-time. Get low-stock alerts and automatically update inventory when an invoice is generated." 
            />
            <FeatureCard 
              title="E-Invoicing & E-Way Bills" 
              description="Generate government-mandated e-invoices (IRN) and e-way bills directly from the platform with a single click." 
            />
            <FeatureCard 
              title="Expense Tracking" 
              description="Log vendor bills, categorize expenses, and upload receipts. Keep your books clean and ready for tax season." 
            />
            <FeatureCard 
              title="CA-Ready Reports" 
              description="Export GSTR-1, GSTR-2, and GSTR-3B reports instantly. Give your accountant read-only access to save hours during filing." 
            />
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Growing Indian Businesses</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-gray-600 italic mb-4 text-sm">"SarwBill cut our invoicing time in half. The automated reminders alone have improved our cash flow by 30%."</p>
                  <p className="font-bold text-gray-900 text-sm">Owner, Retail Chain</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-gray-600 italic mb-4 text-sm">"Finally, a billing software that actually understands Indian GST rules without being overly complicated."</p>
                  <p className="font-bold text-gray-900 text-sm">Freelance Consultant</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-gray-600 italic mb-4 text-sm">"My CA loves the reports SarwBill generates. It makes month-end reconciliation a breeze."</p>
                  <p className="font-bold text-gray-900 text-sm">Director, Manufacturing SME</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Pricing Built for Indian SMEs</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">No hidden fees, no complex tiers. Just straightforward pricing that grows with your business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <PricingCard 
              name="Starter" price="Free" tagline="For freelancers and micro-businesses."
              features={['Up to 50 invoices/month', 'Basic GST templates', 'Client management', 'Email support']}
              cta="Start Billing Free" bestFor="Best for solo entrepreneurs"
            />
            <PricingCard 
              name="Business" price="₹999" tagline="For growing SMEs that need automation."
              features={['Unlimited invoices', 'Automated reminders', 'Inventory tracking', 'Expense management', 'CA access portal']}
              cta="Start 14-Day Trial" isPopular={true} bestFor="Best for established SMEs"
            />
            <PricingCard 
              name="Enterprise" price="Custom" tagline="For large operations needing scale."
              features={['E-invoicing & E-way bills', 'Multi-user access', 'API integrations', 'Dedicated account manager', 'Custom reporting']}
              cta="Contact Sales" bestFor="Best for high-volume businesses"
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Common Questions from SME Owners</h4>
            <Accordion question="Is my financial data secure?" answer="Absolutely. We use bank-grade 256-bit encryption and host your data on secure AWS servers located in India, ensuring full compliance with local data localization laws." />
            <Accordion question="Can my CA access my reports directly?" answer="Yes, on the Business and Enterprise plans, you can invite your CA with read-only access so they can download GSTR reports directly without you having to email them." />
            <Accordion question="Do you support e-invoicing?" answer="Yes, our Enterprise plan fully supports direct e-invoice (IRN) generation and e-way bill creation in compliance with the latest government mandates." />
          </div>
        </div>
      </section>
    </div>
  );
}
