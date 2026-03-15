import React from 'react';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const LINKS = [
  { id: 1, title: 'Our Website', url: 'https://sarwagyna.com', icon: 'Globe' },
  { id: 2, title: 'SarwHub', url: 'https://sarwagyna.com/products/sarwhub', icon: 'LayoutDashboard' },
  { id: 3, title: 'SarwCal', url: 'https://sarwagyna.com/products/sarwcal', icon: 'Calendar' },
  { id: 4, title: 'SarwBill', url: 'https://sarwagyna.com/products/sarwbill', icon: 'Receipt' },
  { id: 5, title: 'AgentZ Store', url: 'https://sarwagyna.com/products/agentz', icon: 'Bot' },
  { id: 6, title: 'Partner With Us', url: 'https://sarwagyna.com/partner', icon: 'Handshake' },
  { id: 7, title: 'Contact Us', url: 'https://sarwagyna.com/contact', icon: 'Mail' },
];

const SOCIALS = [
  { icon: 'Linkedin', url: 'https://linkedin.com/company/sarwagyna' },
  { icon: 'Github', url: 'https://github.com/sarwagyna' },
  { icon: 'Twitter', url: 'https://x.com/sarwagynahq' },
  { icon: 'Instagram', url: 'https://instagram.com/sarwagyna' },
  { icon: 'Youtube', url: 'https://youtube.com/@sarwagyna' },
];

const LinksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 selection:bg-black selection:text-white">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .delay-6 { animation-delay: 0.6s; }
        .delay-7 { animation-delay: 0.7s; }
        .delay-8 { animation-delay: 0.8s; }
        .delay-9 { animation-delay: 0.9s; }
        .delay-10 { animation-delay: 1s; }
      `}} />

      <div className="w-full max-w-md flex flex-col items-center text-center">
        {/* Avatar Section */}
        <div className="animate-fade-up delay-1 mb-4">
          <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center border border-white shadow-lg overflow-hidden p-4">
            <img src="/favicon.svg" alt="Sarwagyna Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="animate-fade-up delay-2 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Sarwagyna Pvt Ltd</h1>
          <p className="text-gray-600 font-medium">AI & IT · Trade · Holding Co.</p>
          <p className="text-gray-500 text-sm mt-1">🇮🇳 India</p>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-3 mb-10">
          {LINKS.map((link, index) => {
            const IconComponent = (Icons as any)[link.icon] as LucideIcon;
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 w-full p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-black transition-all duration-300 group animate-fade-up`}
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                {IconComponent && <IconComponent size={20} className="text-gray-600 group-hover:text-black transition-colors" />}
                <span className="font-semibold text-gray-800 group-hover:text-black">{link.title}</span>
              </a>
            );
          })}
        </div>

        {/* Socials Section */}
        <div className="flex justify-center gap-6 mb-8 animate-fade-up" style={{ animationDelay: `${(LINKS.length + 3) * 0.1}s` }}>
          {SOCIALS.map((social, index) => {
            const IconComponent = (Icons as any)[social.icon] as LucideIcon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.icon}
                className="text-gray-600 hover:text-black transition-colors p-2 hover:bg-gray-100 rounded-full"
              >
                {IconComponent && <IconComponent size={24} />}
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="animate-fade-up text-gray-400 text-sm" style={{ animationDelay: `${(LINKS.length + 4) * 0.1}s` }}>
          &copy; {new Date().getFullYear()} Sarwagyna Pvt Ltd
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
