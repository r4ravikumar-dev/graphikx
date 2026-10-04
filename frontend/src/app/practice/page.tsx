import type {Metadata} from 'next';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Reveal} from '@/components/motion/Reveal';
import {Lines} from '@/components/storytelling/Lines';
import {BigStatement} from '@/components/editorial/BigStatement';
import {Chapter} from '@/components/editorial/Chapter';
import {ChapterHeader} from '@/components/editorial/ChapterHeader';
import {EditorialHero} from '@/components/editorial/EditorialHero';
import {FaqList} from '@/components/editorial/FaqList';
import {IndexLabel} from '@/components/editorial/IndexLabel';
import {IndexList} from '@/components/editorial/IndexList';
import {LineDiagram} from '@/components/editorial/LineDiagram';
import {StepTimeline} from '@/components/editorial/StepTimeline';
import {StickySplit} from '@/components/editorial/StickySplit';
import {JourneyScreens} from '@/components/illustrations/scenes';
import {CapabilityDetail} from '@/components/practice/CapabilityDetail';
import {capabilities, practiceGroups, practicePage} from '@/content/practice';
import {typeRole} from '@/theme/typeScale';

export const metadata: Metadata = {
  title: 'Practice',
  description:
    'Product design, UX, UI, interaction design, UX flow revamps, no-code design and SaaS product design.',
  alternates: {canonical: '/practice'},
};

export default function PracticePage() {
  const {hero, connects, approach, faq, closing} = practicePage;
  // Chapters 01–03 are the groups; numbering continues after them.
  let chapter = practiceGroups.length;

  return (
    <VStack gap={0}>
      <EditorialHero {...hero} illustration={<JourneyScreens />} />

      {/* 01–03: the three groups. Rows keep their homepage numbers and open from /practice#slug. */}
      {practiceGroups.map((group, groupIndex) => (
        <Chapter key={group.id} label={group.label}>
          <StickySplit
            aside={
              <ChapterHeader
                index={groupIndex + 1}
                label={group.label}
                title={group.title}
                size="display-l"
              />
            }>
            <Reveal>
              <Text type="large" color="secondary" textWrap="pretty" style={{maxInlineSize: '44ch'}}>
                {group.intro}
              </Text>
            </Reveal>
            <IndexList
              items={capabilities
                .map((capability, index) => ({capability, number: index + 1}))
                .filter(({capability}) => capability.group === group.id)
                .map(({capability, number}) => ({
                  id: capability.slug,
                  number,
                  title: capability.title,
                  summary: capability.summary,
                  detail: <CapabilityDetail capability={capability} />,
                }))}
            />
          </StickySplit>
        </Chapter>
      ))}

      {/* 04: How it connects, on the muted surface. */}
      <Chapter tone="muted" label={connects.label}>
        <VStack gap={6}>
          <Reveal>
            <IndexLabel index={++chapter}>{connects.label}</IndexLabel>
          </Reveal>
          <Reveal delay={0.05} distance={32}>
            <Heading level={2} textWrap="balance" style={{...typeRole('display-xl'), letterSpacing: '-0.03em', maxInlineSize: '14ch'}}>
              <Lines text={connects.title} />
            </Heading>
          </Reveal>
          <HStack justify="end">
            <Reveal delay={0.1}>
              <Text type="large" color="secondary" textWrap="pretty" style={{maxInlineSize: '44ch'}}>
                {connects.description}
              </Text>
            </Reveal>
          </HStack>
        </VStack>
        <LineDiagram
          nodes={connects.sequence}
          label={`How the disciplines connect: ${connects.sequence.join(', then ')}.`}
        />
      </Chapter>

      {/* 05: Approach. */}
      <Chapter label={approach.label}>
        <StickySplit
          aside={<ChapterHeader index={++chapter} label={approach.label} title={approach.title} size="display-l" />}>
          <StepTimeline steps={approach.steps} />
        </StickySplit>
      </Chapter>

      {/* 06: Questions. */}
      <Chapter label={faq.label}>
        <StickySplit aside={<ChapterHeader index={++chapter} label={faq.label} title={faq.title} size="display-l" />}>
          <FaqList items={faq.items} />
        </StickySplit>
      </Chapter>

      <BigStatement {...closing} />
    </VStack>
  );
}
