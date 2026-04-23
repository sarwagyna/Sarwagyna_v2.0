import type { Metadata } from 'next';
import HoldingCompany from '@/pages/HoldingCompany';

export const metadata: Metadata = {
  title: 'Holding Company | Sarwagyna',
  description: 'Sarwagyna\'s strategic holdings division — cross-vertical portfolio management, investments, and SaaS incubation.',
};

export default function HoldingCompanyPage() {
  return <HoldingCompany />;
}
