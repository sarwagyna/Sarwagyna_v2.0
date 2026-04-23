import type { Metadata } from 'next';
import VerifyCertificate from '@/pages/VerifyCertificate';

export const metadata: Metadata = {
  title: 'Verify Certificate | Sarwagyna',
  description: 'Verify the authenticity of a Sarwagyna-issued certificate using its unique ID.',
};

export default function VerifyPage() {
  return <VerifyCertificate />;
}
