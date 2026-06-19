import type { Metadata } from 'next';
import PartnerWithUs from '@/pages/PartnerWithUs';

export const metadata: Metadata = {
  title: 'Partner With Sarwagyna — Technology & Channel Programs',
  description: 'Partner with Sarwagyna\'s 20+ member team to access our AI technology, global reach, and SaaS ecosystem. Explore technology and channel programs designed to accelerate your growth.',
};

export default function PartnerPage() {
  return <PartnerWithUs />;
}
