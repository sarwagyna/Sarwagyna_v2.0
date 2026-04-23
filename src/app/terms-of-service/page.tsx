import type { Metadata } from 'next';
import TermsOfService from '@/pages/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service | Sarwagyna',
  description: 'Review the terms and conditions governing the use of Sarwagyna\'s products and services.',
};

export default function TermsOfServicePage() {
  return <TermsOfService />;
}
