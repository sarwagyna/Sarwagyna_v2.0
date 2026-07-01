import type { Metadata } from 'next';
import Products from '@/pages/Products';

export const metadata: Metadata = {
  title: 'Products — Svara Health, SvaraRx, SvaraCall AI, RizzMyResume & Sarwagyna School | Sarwagyna',
  description: 'Explore Sarwagyna\'s AI products built for India: the Svara Health ecosystem (SvaraRx voice-to-prescription, live in pilot; SvaraCall AI outbound voice agent, in development), RizzMyResume ATS-optimised resume builder, and Sarwagyna School live learning.',
};

export default function ProductsPage() {
  return <Products />;
}
