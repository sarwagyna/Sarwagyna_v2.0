import LinksPage from '@/pages/LinksPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Links | Sarwagyna Pvt Ltd',
  description: 'All official links for Sarwagyna Pvt Ltd.',
};

export default function Page() {
  return <LinksPage />;
}
