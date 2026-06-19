import type { Metadata } from 'next';
import HoldingCompany from '@/pages/HoldingCompany';

export const metadata: Metadata = {
  title: 'About | Sarwagyna',
  description: 'Learn about Sarwagyna — India\'s next-gen multi-industry company with a 20+ member team building enterprise AI, SaaS products, and strategic holdings.',
};

export default function AboutPage() {
  return <HoldingCompany />;
}
