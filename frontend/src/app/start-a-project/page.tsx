import type {Metadata} from 'next';
import {VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';
import {Reveal} from '@/components/motion/Reveal';
import {BigStatement} from '@/components/editorial/BigStatement';
import {Chapter} from '@/components/editorial/Chapter';
import {ChapterHeader} from '@/components/editorial/ChapterHeader';
import {EditorialHero} from '@/components/editorial/EditorialHero';
import {FaqList} from '@/components/editorial/FaqList';
import {StickySplit} from '@/components/editorial/StickySplit';
import {ProjectForm} from '@/components/forms/ProjectForm';
import {Conversation} from '@/components/illustrations/scenes';
import {startProjectPage} from '@/content/enquiry';
import {site} from '@/content/site';
import {typeRole} from '@/theme/typeScale';
import {EYEBROW_STYLE} from '@/theme/eyebrow';

export const metadata: Metadata = {
  title: 'Start a Project',
  description:
    "You don't need a perfect brief. Tell Graphikx what you're working on and we'll start from there.",
  alternates: {canonical: '/start-a-project'},
};

export default function StartAProjectPage() {
  const {hero, enquiry, faq, closing} = startProjectPage;

  return (
    <VStack gap={0}>
      <EditorialHero
        {...hero}
        action={{label: 'Start with step one', href: `#${enquiry.id}`, direction: 'down'}}
        illustration={<Conversation />}
      />

      {/* 01: The form, in a panel, with the email beside it. */}
      <Chapter id={enquiry.id} label={enquiry.label}>
        <StickySplit
          aside={
            <>
              <ChapterHeader index={1} label={enquiry.label} title={enquiry.title} intro={undefined} size="display-l" />
              <Reveal delay={0.1}>
                <Text type="large" color="secondary" textWrap="pretty" style={{maxInlineSize: '36ch'}}>
                  {enquiry.intro}
                </Text>
              </Reveal>
              <Reveal delay={0.15}>
                <VStack gap={2} style={{borderBlockStart: '1px solid var(--color-border)', paddingBlockStart: 'var(--spacing-5)'}}>
                  <Text type="supporting" color="secondary" style={EYEBROW_STYLE}>
                    {enquiry.contactLabel}
                  </Text>
                  <Link href={`mailto:${site.email}`} isStandalone style={typeRole('headline-s')}>
                    {site.email}
                  </Link>
                </VStack>
              </Reveal>
            </>
          }>
          <VStack
            gap={0}
            style={{
              backgroundColor: 'var(--color-background-muted)',
              borderRadius: 'var(--radius-container-lg, 16px)',
              padding: 'var(--space-block)',
            }}>
            <ProjectForm />
          </VStack>
        </StickySplit>
      </Chapter>

      {/* 02: Questions. */}
      <Chapter label={faq.label}>
        <StickySplit aside={<ChapterHeader index={2} label={faq.label} title={faq.title} size="display-l" />}>
          <FaqList items={faq.items} />
        </StickySplit>
      </Chapter>

      <BigStatement {...closing} hasProjectAction={false} />
    </VStack>
  );
}
