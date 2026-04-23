import type { Metadata } from 'next';
import VerifyCertificate from '@/pages/VerifyCertificate';

export const metadata: Metadata = {
  title: 'Verify Certificate Authenticity — Sarwagyna Certificate Portal',
  description: 'Instantly verify the authenticity of any Sarwagyna-issued certificate. Enter your unique certificate ID to confirm validity and view credential details.',
};

export default function VerifyPage() {
  return <VerifyCertificate />;
}
