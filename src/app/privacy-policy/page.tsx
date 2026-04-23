import type { Metadata } from 'next';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sarwagyna',
  description: 'Read Sarwagyna\'s privacy policy to understand how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
