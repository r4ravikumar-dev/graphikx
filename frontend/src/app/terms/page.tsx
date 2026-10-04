import type {Metadata} from 'next';
import {PageFaq} from '@/components/editorial/PageFaq';
import {termsFaq} from '@/content/faqs';
import {LegalContent} from '@/components/storytelling/LegalContent';
import {TermsDocument} from '@/components/illustrations/scenes';
import {terms} from '@/content/legal';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'The terms for using the Graphikx website.',
  alternates: {canonical: '/terms'},
};

export default function TermsPage() {
  return (
    <>
      <LegalContent page={terms} illustration={<TermsDocument />} />
      <PageFaq group={termsFaq} tone="muted" />
    </>
  );
}
