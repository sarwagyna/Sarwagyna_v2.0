'use client';

import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="py-24 relative bg-bg">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-text"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text mb-2">
            Privacy Policy
          </h1>
          <p className="text-text-secondary font-medium mb-8">
            SARWAGYNA PVT LTD<br/>
            Effective Date: April 24, 2026<br/>
            Last Updated: June 1, 2025<br/>
            Applies to: sarwagyna.com, sarwagyna.in and all Sarwagyna products and services
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4 mt-8">1. Introduction</h2>
            <p className="text-text-secondary mb-4">
              Sarwagyna Pvt Ltd (“Sarwagyna”, “we”, “our”, or “us”) is a company incorporated in India under the Companies Act, 2013. We operate across AI &amp; IT services, global trade (imports and exports), and strategic holdings. We also develop and offer SaaS products and AI-powered platforms.
            </p>
            <p className="text-text-secondary mb-4">
              This Privacy Policy explains how we collect, use, store, share, and protect your personal information when you visit our websites, use our products, or engage with us in any capacity. It also describes your rights under applicable law, including India’s Digital Personal Data Protection Act, 2023 (DPDP Act) and, where applicable, the General Data Protection Regulation (GDPR).
            </p>
            <p className="text-text-secondary">
              By using our website or services, you consent to the practices described in this Privacy Policy. If you do not agree, please discontinue use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-text mb-3">2.1 Information You Provide Directly</h3>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Contact and inquiry forms:</strong> name, email address, phone number, company name, designation, and message content</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Account registration:</strong> username, password (hashed), business details, and billing information</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Investor relations forms:</strong> full name, organization, investor type, investment range, and NDA acceptance</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Career applications:</strong> resume, cover letter, portfolio links, work history, and references</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Trade inquiries:</strong> product descriptions, quantities, origin and destination countries, shipping timelines</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Payment processing:</strong> billing address, GST number, and payment method details (handled by PCI-compliant processors; we do not store card data)</span></li>
            </ul>

            <h3 className="text-xl font-semibold text-text mb-3">2.2 Information Collected Automatically</h3>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Log data:</strong> IP address, browser type, device type, operating system, pages visited, and timestamps</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Cookies and tracking technologies:</strong> session cookies, preference cookies, analytics cookies, and marketing pixels</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Usage data:</strong> features used within our SaaS platforms; activity and usage patterns</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Location data:</strong> approximate geolocation based on IP address</span></li>
            </ul>

            <h3 className="text-xl font-semibold text-text mb-3">2.3 Information from Third Parties</h3>
            <ul className="space-y-3 mb-6 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Google, LinkedIn, or other OAuth providers if you use social sign-in</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Payment gateways (Razorpay, Stripe) for transaction verification</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Analytics platforms (Google Analytics 4, Mixpanel) for aggregated usage insights</span></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">3. How We Use Your Information</h2>
            <p className="text-text-secondary mb-4">We process your personal data for the following purposes and on the following legal bases:</p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Service Delivery:</strong> To provide, maintain, and improve our products and services (Legal basis: Contract performance)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Lead Management:</strong> To respond to business inquiries and follow up on proposals (Legal basis: Legitimate interest)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Investor Relations:</strong> To respond to investor inquiries, share information under NDA, and maintain IR records (Legal basis: Legitimate interest)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Product Communications:</strong> To send product updates, feature announcements, and service notifications (Legal basis: Contract / Legitimate interest)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Marketing:</strong> To send promotional emails and relevant content, where you have opted in (Legal basis: Consent)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Security &amp; Compliance:</strong> To detect, prevent, and investigate fraud, abuse, or legal violations (Legal basis: Legal obligation / Legitimate interest)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Analytics &amp; Improvement:</strong> To analyze user behavior and improve our platforms, UX, and business performance (Legal basis: Legitimate interest)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Legal Requirements:</strong> To comply with Indian law, court orders, or regulatory requirements (Legal basis: Legal obligation)</span></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-text-secondary mb-4">
              We use cookies and similar technologies on our websites and products. You can manage cookie preferences via our cookie consent banner on your first visit.
            </p>
            <p className="text-text-secondary mb-3">Types of cookies we use:</p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Strictly Necessary Cookies:</strong> Required for the website to function. Cannot be disabled.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Performance Cookies:</strong> Collect anonymized usage data to help us improve our website (e.g., Google Analytics).</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Functional Cookies:</strong> Remember your preferences such as language settings or login state.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Marketing / Advertising Cookies:</strong> Used to deliver relevant content and measure campaign effectiveness. Applied only with your consent.</span></li>
            </ul>
            <p className="text-text-secondary">
              You may withdraw cookie consent at any time by adjusting your browser settings or using our Cookie Preference Centre. Note that disabling certain cookies may affect functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-text-secondary mb-4">We do not sell your personal data. We may share your information in the following limited circumstances:</p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Service Providers:</strong> We engage trusted third-party vendors (cloud hosting, email delivery, payment processing, CRM, analytics) under Data Processing Agreements that require them to protect your data.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Business Partners:</strong> Where you have engaged with us for trade or technology partnerships, relevant personnel may access inquiry data necessary to service your request.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Legal Compliance:</strong> We may disclose data where required by Indian law, court order, or regulatory authority.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your data may be transferred. We will notify you in advance and ensure equivalent privacy protections apply.</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>With Your Consent:</strong> We may share data for purposes not listed here with your explicit consent.</span></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">6. Data Retention</h2>
            <p className="text-text-secondary mb-4">We retain personal data only for as long as necessary to fulfill the purposes described in this Policy or as required by law.</p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Contact and inquiry data:</strong> 3 years from last interaction</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Account data:</strong> Duration of account + 1 year post-closure</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Transaction and invoicing records:</strong> 7 years (as required under Indian tax law)</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Marketing preferences and consent logs:</strong> Until consent is withdrawn + 1 year</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Server logs:</strong> 90 days</span></li>
            </ul>
            <p className="text-text-secondary">
              Upon expiry of retention periods, data is securely deleted or anonymized.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">7. Your Rights</h2>
            <p className="text-text-secondary mb-4">Subject to applicable law, you have the following rights regarding your personal data:</p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Right to Erasure:</strong> Request deletion of your personal data, subject to legal retention obligations</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Right to Restrict Processing:</strong> Request that we limit how we process your data in certain circumstances</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, withdraw it at any time without affecting prior lawful processing</span></li>
            </ul>
            <p className="text-text-secondary">
              To exercise any of these rights, contact us at: <a href="mailto:contact@sarwagyna.com" className="text-text hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">contact@sarwagyna.com</a>. We will respond within 30 days. We may need to verify your identity before processing your request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">8. International Data Transfers</h2>
            <p className="text-text-secondary mb-4">
              Sarwagyna is incorporated and headquartered in India. Your data may be processed or stored on servers located within India and, in certain cases, in other countries where our service providers operate (including the United States and the European Union).
            </p>
            <p className="text-text-secondary">
              When transferring data internationally, we implement appropriate safeguards, including Standard Contractual Clauses or equivalent mechanisms as required by applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">9. Children’s Privacy</h2>
            <p className="text-text-secondary">
              Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal data from minors. If you become aware that a minor has provided us with personal data, please contact us immediately at <a href="mailto:contact@sarwagyna.com" className="text-text hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">contact@sarwagyna.com</a> and we will take steps to delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">10. Security</h2>
            <p className="text-text-secondary mb-4">We implement industry-standard technical and organizational security measures to protect your personal data, including:</p>
            <ul className="space-y-3 mb-4 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>TLS/SSL encryption for all data in transit</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>AES-256 encryption for sensitive data at rest</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Role-based access controls and least-privilege principles</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>Regular vulnerability assessments and penetration testing</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>reCAPTCHA and rate limiting on all public-facing forms</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span>SOC 2 Type II compliance roadmap in progress</span></li>
            </ul>
            <p className="text-text-secondary">
              No method of electronic transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-text-secondary">
              We may update this Privacy Policy from time to time. When we do, we will revise the “Last Updated” date and, for material changes, notify you by email or prominent notice on our website. Your continued use of our services after changes become effective constitutes acceptance of the updated Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">12. Contact Us</h2>
            <p className="text-text-secondary mb-4">For privacy-related inquiries, data subject requests, or to reach our Data Protection Officer:</p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Email:</strong> <a href="mailto:contact@sarwagyna.com" className="text-text hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">contact@sarwagyna.com</a></span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>General:</strong> <a href="mailto:sarwan@sarwagyna.com" className="text-text hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">sarwan@sarwagyna.com</a></span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Address:</strong> Sarwagyna Pvt Ltd, Registered Office, India</span></li>
              <li className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-secondary shrink-0"></span><span><strong>Response time:</strong> Within 30 days for data subject requests; within 5 business days for general queries</span></li>
            </ul>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
