import type { Metadata } from 'next';
import Careers from '@/pages/Careers';

export const metadata: Metadata = {
  title: 'Careers at Sarwagyna — Join Our AI & Tech Team',
  description: 'Join Sarwagyna and help build the future of AI and enterprise software. Explore open positions, our culture, and why the best builders choose to work with us.',
};

export default function CareersPage() {
  return <Careers />;
}
