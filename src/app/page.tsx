import type { Metadata } from 'next';
import Home from '@/pages/Home';

export const metadata: Metadata = {
  title: 'Sarwagyna | India\'s Next-Gen Multi-Industry Company',
  description: 'Sarwagyna is India\'s next-gen multi-industry company delivering enterprise-grade AI solutions, strategic holdings, and scalable SaaS products for modern businesses.',
};

export default function HomePage() {
  return <Home />;
}
