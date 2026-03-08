import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white/[0.02] text-[#F0F4FF] pt-[120px] pb-10 border-t border-white/[0.07]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1: Logo & Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-xl font-display font-extrabold tracking-tight text-white">SARWAGYNA</span>
            </Link>
            <p className="text-white/45 text-sm mb-8 leading-[1.7]">
              India's emerging multi-industry powerhouse delivering enterprise-grade AI, global trade, and SaaS products.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.16] transition-colors"><Linkedin className="w-4 h-4 text-white/80" /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.16] transition-colors"><Twitter className="w-4 h-4 text-white/80" /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.16] transition-colors"><Instagram className="w-4 h-4 text-white/80" /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.16] transition-colors"><Youtube className="w-4 h-4 text-white/80" /></a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-6 text-white/80">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">About</Link></li>
              <li><Link to="/about#leadership" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">Leadership</Link></li>
              <li><Link to="/careers" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">Press</Link></li>
              <li><Link to="#" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-6 text-white/80">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/ai-it" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">AI & IT</Link></li>
              <li><Link to="/trade" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">Imports & Exports</Link></li>
              <li><Link to="/about" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">Holding Co</Link></li>
            </ul>
          </div>

          {/* Col 4: Products */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-6 text-white/80">Products</h4>
            <ul className="space-y-4">
              <li><Link to="/products/sarwhub" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">SarwHub</Link></li>
              <li><Link to="/products/sarwcal" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">SarwCal</Link></li>
              <li><Link to="/products/sarwbill" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">SarwBill</Link></li>
            </ul>
          </div>

          {/* Col 5: Investors */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-6 text-white/80">Investors</h4>
            <ul className="space-y-4">
              <li><Link to="/investors" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">Investor Relations</Link></li>
              <li><Link to="/about#governance" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">Governance</Link></li>
              <li><Link to="#" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">ESG</Link></li>
              <li><Link to="#" className="text-white/45 hover:text-white text-[13.5px] font-medium transition-colors">Annual Report</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.07] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/45 text-xs">
            &copy; 2025 Sarwagyna Pvt Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
            <Link to="#" className="text-white/45 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-white/45 hover:text-white text-xs transition-colors">Terms of Service</Link>
            <Link to="#" className="text-white/45 hover:text-white text-xs transition-colors">Cookie Policy</Link>
            <Link to="#" className="text-white/45 hover:text-white text-xs transition-colors">Refund Policy</Link>
            <span className="text-white/45 text-xs">GSTIN: XXXXXXXXXXXXXXX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
