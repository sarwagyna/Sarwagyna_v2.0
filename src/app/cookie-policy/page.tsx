import type { Metadata } from 'next';
import CookiePolicy from '@/pages/CookiePolicy';

export const metadata: Metadata = {
  title: 'Cookie Policy | Sarwagyna',
  description: 'Learn how Sarwagyna uses cookies and similar tracking technologies on our website.',
};

export default function CookiePolicyPage() {
  return <CookiePolicy />;
}
