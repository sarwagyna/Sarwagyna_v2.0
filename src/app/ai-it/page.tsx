import type { Metadata } from 'next';
import AiIt from '@/pages/AiIt';

export const metadata: Metadata = {
  title: 'AI & IT Services for Enterprises & Startups | Sarwagyna',
  description: 'Sarwagyna\'s 20+ member team delivers enterprise AI agents, workflow automation, custom web development, fine-tuned AI models, and startup launchpad services for businesses across India.',
};

export default function AiItPage() {
  return <AiIt />;
}
