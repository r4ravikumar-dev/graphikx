import type {Metadata} from 'next';
import {LegalContent} from '@/components/storytelling/LegalContent';
import {terms} from '@/content/legal';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'The terms for using the Graphikx website.',
  alternates: {canonical: '/terms'},
};

export default function TermsPage() {
  return <LegalContent page={terms} />;
}
