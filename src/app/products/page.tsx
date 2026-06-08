import type { Metadata } from 'next';
import Products from '@/pages/Products';

export const metadata: Metadata = {
  title: 'Products — SvaraRx, RizzMyResume & Sarwagyna School | Sarwagyna',
  description: 'Explore Sarwagyna\'s AI products built for India: SvaraRx voice-to-prescription for clinics, RizzMyResume ATS-optimised resume builder, Sarwagyna School live learning, and SvaraRx HMS clinic management (coming soon).',
};

export default function ProductsPage() {
  return <Products />;
}
