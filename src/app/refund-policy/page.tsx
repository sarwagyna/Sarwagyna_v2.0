import type { Metadata } from 'next';
import RefundPolicy from '@/pages/RefundPolicy';

export const metadata: Metadata = {
  title: 'Refund Policy | Sarwagyna',
  description: 'Understand Sarwagyna\'s refund and cancellation policy for our products and services.',
};

export default function RefundPolicyPage() {
  return <RefundPolicy />;
}
