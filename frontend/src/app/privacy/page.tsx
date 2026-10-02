import type {Metadata} from 'next';
import {LegalContent} from '@/components/storytelling/LegalContent';
import {privacy} from '@/content/legal';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'What the Graphikx website collects, why, and what happens to it.',
  alternates: {canonical: '/privacy'},
};

export default function PrivacyPage() {
  return <LegalContent page={privacy} />;
}
