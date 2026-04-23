import type { Metadata } from 'next';
import Home from '@/pages/Home';

export const metadata: Metadata = {
  title: 'Sarwagyna | India\'s Next-Gen Multi-Industry Company',
  description: 'Sarwagyna is India\'s next-gen multi-industry company delivering enterprise-grade AI solutions, strategic holdings, and scalable SaaS products for modern businesses.',
  openGraph: {
    type: 'website',
    title: 'Sarwagyna: India\'s Next-Gen Multi-Industry Company',
    description: 'Discover Sarwagyna Pvt Ltd. We build enterprise AI solutions, manage global operations, and develop scalable SaaS products.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function HomePage() {
  return <Home />;
}
