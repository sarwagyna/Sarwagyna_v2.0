import type { Metadata } from 'next';
import Contact from '@/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Sarwagyna',
  description: 'Get in touch with Sarwagyna. Reach out for AI & IT services, partnerships, or general inquiries.',
};

export default function ContactPage() {
  return <Contact />;
}
