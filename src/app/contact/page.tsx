import type { Metadata } from 'next';
import Contact from '@/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Sarwagyna',
  description: 'Get in touch with Sarwagyna\'s 20+ member team. Reach out for AI & IT services, partnerships, or general inquiries.',
};

export default function ContactPage() {
  return <Contact />;
}
