import type {Metadata} from 'next';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {CtaButton} from '@/components/navigation/CtaButton';
import {NarrativeBlock} from '@/components/storytelling/NarrativeBlock';
import {SectionIntro} from '@/components/storytelling/SectionIntro';
import {Statement} from '@/components/storytelling/Statement';
import {Microcopy} from '@/components/storytelling/Microcopy';
import {ProcessSteps} from '@/components/storytelling/ProcessSteps';
import {SituationList} from '@/components/storytelling/SituationList';
import {ProjectInvitation} from '@/components/storytelling/ProjectInvitation';
import {PracticeGroup} from '@/components/practice/PracticeGroup';
import {DisciplineFlow} from '@/components/practice/DisciplineFlow';
import {capabilities, practiceGroups, practicePage} from '@/content/practice';
import {typeRole} from '@/theme/typeScale';

export const metadata: Metadata = {
  title: 'Practice',
  description:
    'Product design, UX design, UX flow revamps, UI design, interaction design, no-code design, and SaaS product design at Graphikx.',
  alternates: {canonical: '/practice'},
};

export default function PracticePage() {
  const {opening, connects, approach, whereToStart, closing} = practicePage;

  return (
    <VStack gap={0}>
      {/* Opening */}
      <Container paddingBlock={10}>
        <VStack gap={6} paddingBlockStart={10}>
          <SectionIntro level={1} eyebrow={opening.eyebrow} title={opening.title} />
          <VStack gap={3} maxWidth={760}>
            {opening.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.1 + 0.06 * index}>
                <Text type="large" color="secondary" as="p" textWrap="pretty">
                  {paragraph}
                </Text>
              </Reveal>
            ))}
          </VStack>
          <Microcopy delay={0.25}>{opening.microcopy}</Microcopy>
        </VStack>
      </Container>

      {/* 01–03: Practice groups */}
      {practiceGroups.map((group, index) => (
        <Section
          key={group.id}
          variant={index % 2 === 1 ? 'muted' : 'transparent'}
          padding={0}>
          <PracticeGroup
            group={group}
            number={index + 1}
            capabilities={capabilities.filter(capability => capability.group === group.id)}
          />
        </Section>
      ))}

      {/* 04: How the practice connects */}
      <NarrativeBlock
        eyebrow={connects.eyebrow}
        title={connects.title}
        paragraphs={connects.paragraphs}
      />
      <Container paddingBlockEnd={10}>
        <VStack gap={4}>
          <DisciplineFlow steps={connects.sequence} />
          <Microcopy>{connects.microcopy}</Microcopy>
        </VStack>
      </Container>

      {/* 05: How we work */}
      <Container paddingBlock={10}>
        <VStack gap={8}>
          <SectionIntro eyebrow={approach.eyebrow} title={approach.title} />
          <ProcessSteps steps={approach.steps} />
        </VStack>
      </Container>
      <Statement statement={approach.closing} />

      {/* 06: Where to start */}
      <Container paddingBlock={10}>
        <Grid columns={{minWidth: 320, max: 2}} gap={10}>
          <SectionIntro eyebrow={whereToStart.eyebrow} title={whereToStart.title} />
          <VStack gap={6}>
            <SituationList situations={whereToStart.situations} />
            <Reveal>
              <Heading level={3} style={typeRole('headline-l')}>
                {whereToStart.closing}
              </Heading>
            </Reveal>
            <HStack>
              <CtaButton {...whereToStart.action} />
            </HStack>
          </VStack>
        </Grid>
      </Container>

      {/* 07: Closing */}
      <Section variant="muted" padding={0}>
        <ProjectInvitation {...closing} />
      </Section>
    </VStack>
  );
}
