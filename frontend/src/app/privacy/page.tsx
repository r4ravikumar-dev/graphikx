import type {Metadata} from 'next';
import {PageFaq} from '@/components/editorial/PageFaq';
import {privacyFaq} from '@/content/faqs';
import {LegalContent} from '@/components/storytelling/LegalContent';
import {PrivacyShield} from '@/components/illustrations/scenes';
import {privacy} from '@/content/legal';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'What the Graphikx website collects, why, and what happens to it.',
  alternates: {canonical: '/privacy'},
};

export default function PrivacyPage() {
  return (
    <>
      <LegalContent page={privacy} illustration={<PrivacyShield />} />
      <PageFaq group={privacyFaq} tone="muted" />
    </>
  );
}
