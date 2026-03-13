'use client';

import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="py-24 relative bg-bg">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg dark:prose-invert max-w-none text-text"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text mb-2">
            Terms of Service
          </h1>
          <p className="text-text-secondary font-medium mb-8">
            SARWAGYNA PVT LTD<br/>
            Effective Date: June 1, 2025<br/>
            Last Updated: June 1, 2025<br/>
            Applies to: sarwagyna.com, sarwagyna.in and all associated Sarwagyna products and services
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4 mt-8">1. Agreement to Terms</h2>
            <p className="text-text-secondary mb-4">
              These Terms of Service (“Terms”) constitute a legally binding agreement between you (“User”, “you”, or “your”) and Sarwagyna Pvt Ltd, a company incorporated under the Companies Act, 2013 (“Sarwagyna”, “we”, “us”, or “our”).
            </p>
            <p className="text-text-secondary mb-4">
              By accessing our website, creating an account, or using any of our services — including SarwHub, SarwCal, SarwBill, AI &amp; IT services, and trade facilitation services — you agree to be bound by these Terms. If you do not agree, do not access or use our services.
            </p>
            <p className="text-text-secondary mb-8">
              If you are using our services on behalf of an organization, you represent and warrant that you have authority to bind that organization to these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">2. Description of Services</h2>
            <p className="text-text-secondary mb-4">
              Sarwagyna provides the following categories of services:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li><strong>AI &amp; IT Services:</strong> Custom AI agents, workflow automation, web and software development, and technology consulting</li>
              <li><strong>Imports &amp; Exports:</strong> Global trade facilitation including sourcing, supplier verification, logistics, customs support, and delivery</li>
              <li><strong>SaaS Products:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>SarwHub:</strong> Event management and ticketing platform</li>
                  <li><strong>SarwCal:</strong> Scheduling and calendar booking application</li>
                  <li><strong>SarwBill:</strong> GST-compliant invoicing, billing, and expense analytics platform</li>
                </ul>
              </li>
              <li><strong>Holding &amp; Investment Services:</strong> Strategic portfolio management and investor relations (for qualified parties only)</li>
            </ul>
            <p className="text-text-secondary">
              Service-specific terms may supplement these Terms for individual products or engagements. In the event of conflict, service-specific terms shall prevail.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">3. Account Registration and Security</h2>
            <p className="text-text-secondary mb-4">Certain services require account registration. You agree to:</p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain the security of your password and not share login credentials</li>
              <li>Notify us immediately at <a href="mailto:hello@sarwagyna.com" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">hello@sarwagyna.com</a> of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
            <p className="text-text-secondary">
              We reserve the right to suspend or terminate accounts that provide false information, engage in unauthorized activities, or violate these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">4. Acceptable Use</h2>
            <p className="text-text-secondary mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You must not:</p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
              <li>Use our services in any way that violates Indian law or any applicable international law</li>
              <li>Transmit any unsolicited commercial communications (spam) through our platforms</li>
              <li>Attempt to gain unauthorized access to any part of our systems, other accounts, or connected networks</li>
              <li>Upload or transmit malicious code, viruses, or any software designed to disrupt, damage, or interfere with systems</li>
              <li>Scrape, crawl, or extract data from our platforms without explicit written authorization</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
              <li>Use our services to facilitate trade in prohibited goods or engage in export-controlled transactions without appropriate licenses</li>
              <li>Use our AI or automation tools to generate content that is illegal, defamatory, or harmful</li>
            </ul>
            <p className="text-text-secondary">
              We reserve the right to terminate access for any violation of this section without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">5. SaaS Product Terms</h2>
            
            <h3 className="text-xl font-semibold text-text mb-3">5.1 SarwHub – Event Management</h3>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>You are solely responsible for the events you create and manage on SarwHub</li>
              <li>You must comply with all applicable laws regarding consumer protection, refunds, and event licensing</li>
              <li>Sarwagyna is not liable for disputes between event organizers and attendees</li>
              <li>Revenue from ticket sales is disbursed per the payment schedule in your account agreement</li>
            </ul>

            <h3 className="text-xl font-semibold text-text mb-3">5.2 SarwCal – Scheduling</h3>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>You are responsible for meeting descriptions, pricing, and communications with your clients</li>
              <li>Paid bookings are subject to the Refund Policy outlined in a separate document</li>
              <li>You must not use SarwCal to schedule services that are illegal or violate our Acceptable Use policy</li>
            </ul>

            <h3 className="text-xl font-semibold text-text mb-3">5.3 SarwBill – Invoicing</h3>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>SarwBill provides tools to generate GST-compliant invoices; you are responsible for the accuracy of all tax information entered</li>
              <li>Sarwagyna does not provide tax advice; consult a qualified CA or tax advisor for compliance questions</li>
              <li>We are not liable for penalties arising from incorrect tax information provided by you</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">6. Intellectual Property</h2>
            <p className="text-text-secondary mb-4">
              All content on our website and within our products — including but not limited to software, code, designs, graphics, logos, text, and trademarks — is owned by or licensed to Sarwagyna Pvt Ltd and is protected under Indian intellectual property law and applicable international treaties.
            </p>
            <p className="text-text-secondary mb-4">
              You are granted a limited, non-exclusive, non-transferable, revocable license to access and use our services for their intended purposes. You may not:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
              <li>Copy, modify, distribute, sell, or sublicense any of our intellectual property</li>
              <li>Reverse engineer, decompile, or disassemble any software or platform</li>
              <li>Remove, alter, or obscure any proprietary notices or branding</li>
            </ul>
            <p className="text-text-secondary">
              Any feedback, suggestions, or ideas you submit may be used by Sarwagyna without obligation or compensation to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">7. Payment Terms</h2>
            <p className="text-text-secondary mb-4">For paid services and SaaS subscriptions:</p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
              <li>All prices are in Indian Rupees (INR) unless otherwise stated, and are exclusive of applicable GST</li>
              <li>Payment is due as specified in your subscription plan or service agreement</li>
              <li>We use third-party payment processors (Razorpay, Stripe) and do not store your full payment details</li>
              <li>Subscriptions auto-renew unless cancelled at least 48 hours before the renewal date</li>
              <li>We reserve the right to suspend services for non-payment after a grace period of 7 days</li>
              <li>Enterprise contracts are subject to separate invoicing terms agreed in writing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">8. Confidentiality</h2>
            <p className="text-text-secondary mb-4">In the course of service delivery, both parties may share confidential information. Each party agrees to:</p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
              <li>Keep the other party’s confidential information strictly private</li>
              <li>Use confidential information solely for the purpose of the engagement</li>
              <li>Not disclose confidential information to third parties without prior written consent</li>
            </ul>
            <p className="text-text-secondary">
              This obligation survives termination of the engagement for a period of 3 years, or indefinitely for trade secrets.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">9. Limitation of Liability</h2>
            <p className="text-text-secondary font-bold mb-4 uppercase">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SARWAGYNA AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND PARTNERS SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, goodwill, or business opportunities</li>
              <li>Damages arising from service interruptions, errors, or security breaches beyond our control</li>
            </ul>
            <p className="text-text-secondary font-bold mb-4 uppercase">
              IN ALL CASES, OUR TOTAL LIABILITY TO YOU SHALL NOT EXCEED THE AMOUNT YOU HAVE PAID TO US IN THE 3 MONTHS PRECEDING THE CLAIM.
            </p>
            <p className="text-text-secondary">
              Some jurisdictions do not allow limitation of liability for certain types of damages. In such cases, our liability is limited to the fullest extent permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">10. Disclaimers</h2>
            <p className="text-text-secondary font-bold mb-4 uppercase">
              OUR SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-text-secondary">
              We do not warrant that our services will be uninterrupted, error-free, or free from viruses or other harmful components. We make no warranty regarding the accuracy or completeness of any information provided through our platforms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">11. Termination</h2>
            <p className="text-text-secondary mb-4">
              Either party may terminate a service agreement with 30 days’ written notice unless otherwise specified in a signed engagement document.
            </p>
            <p className="text-text-secondary mb-4">We may immediately suspend or terminate your access without notice if you:</p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
              <li>Violate these Terms or any applicable law</li>
              <li>Engage in fraudulent, abusive, or harmful conduct</li>
              <li>Fail to pay amounts due after the applicable grace period</li>
            </ul>
            <p className="text-text-secondary">
              Upon termination, your right to access the services ceases. You may request data export within 30 days of termination, after which data may be deleted in accordance with our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">12. Governing Law and Dispute Resolution</h2>
            <p className="text-text-secondary mb-4">
              These Terms are governed by and construed in accordance with the laws of India.
            </p>
            <p className="text-text-secondary mb-4">
              Any disputes arising from these Terms or your use of our services shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration under the Arbitration and Conciliation Act, 1996, with a sole arbitrator appointed by mutual agreement. The seat of arbitration shall be India.
            </p>
            <p className="text-text-secondary">
              Nothing in this clause prevents either party from seeking emergency injunctive relief from a court of competent jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">13. Changes to These Terms</h2>
            <p className="text-text-secondary">
              We may update these Terms periodically. Material changes will be communicated via email or prominent notice on our website at least 15 days before they take effect. Continued use of our services after the effective date constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">14. Contact</h2>
            <p className="text-text-secondary mb-4">For questions regarding these Terms:</p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-8">
              <li><strong>Email:</strong> <a href="mailto:legal@sarwagyna.com" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">legal@sarwagyna.com</a></li>
              <li><strong>General:</strong> <a href="mailto:hello@sarwagyna.com" className="text-text hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">hello@sarwagyna.com</a></li>
              <li><strong>Address:</strong> Sarwagyna Pvt Ltd, Registered Office, India</li>
            </ul>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
