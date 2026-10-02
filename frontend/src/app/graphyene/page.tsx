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
import {KeyStatement} from '@/components/storytelling/KeyStatement';
import {LayeredLines} from '@/components/storytelling/LayeredLines';
import {Microcopy} from '@/components/storytelling/Microcopy';
import {TopicGrid} from '@/components/storytelling/TopicGrid';
import {ProjectInvitation} from '@/components/storytelling/ProjectInvitation';
import {Lines} from '@/components/storytelling/Lines';
import {Principle} from '@/components/graphyene/Principle';
import {Architecture} from '@/components/graphyene/Architecture';
import {Exploration} from '@/components/graphyene/Exploration';
import {StatusBadge} from '@/components/graphyene/StatusBadge';
import {
  architecture,
  closing,
  experiments,
  idea,
  principlesSection,
  problem,
  stillBecoming,
  view,
} from '@/content/graphyene';
import {typeRole} from '@/theme/typeScale';

export const metadata: Metadata = {
  title: 'Graphyene',
  description:
    "Graphyene is Graphikx's evolving design-system idea: an exploration into how a system can keep growing products clear and connected while leaving room for ideas.",
  alternates: {canonical: '/graphyene'},
};

function BodyText({children, delay = 0}: {children: string; delay?: number}) {
  return (
    <Reveal delay={delay}>
      <Text type="large" color="secondary" as="p" textWrap="pretty">
        <Lines text={children} />
      </Text>
    </Reveal>
  );
}

export default function GraphyenePage() {
  return (
    <VStack gap={0}>
      {/* 01: What problem are we exploring? */}
      <VStack paddingBlockStart={10}>
        <NarrativeBlock
          level={1}
          eyebrow={problem.eyebrow}
          title={problem.title}
          paragraphs={problem.opening}
          microcopy={problem.microcopy}>
        <LayeredLines lines={problem.buildUp} />
        {problem.paragraphs.map((paragraph, index) => (
          <BodyText key={paragraph} delay={0.06 * index}>
            {paragraph}
          </BodyText>
        ))}
          <KeyStatement>{problem.statement}</KeyStatement>
        </NarrativeBlock>
      </VStack>

      {/* 02: The Graphyene idea */}
      <Section variant="muted" padding={0}>
        <NarrativeBlock
          eyebrow={idea.eyebrow}
          title={idea.title}
          paragraphs={idea.paragraphs}
          microcopy={idea.microcopy}>
          <VStack gap={1}>
            {idea.questions.map((question, index) => (
              <Reveal key={question} delay={0.06 * index} distance={12}>
                <Text type="large" weight="medium">
                  {question}
                </Text>
              </Reveal>
            ))}
          </VStack>
          <KeyStatement>{idea.statement}</KeyStatement>
        </NarrativeBlock>
      </Section>

      {/* 03: What we believe a system should do */}
      <NarrativeBlock eyebrow={view.eyebrow} title={view.title} paragraphs={view.paragraphs} />
      <Container paddingBlockEnd={10}>
        <VStack gap={6}>
          <Reveal>
            <Heading level={3} style={typeRole('headline-l')}>
              {view.listTitle}
            </Heading>
          </Reveal>
          <TopicGrid topics={view.items} />
        </VStack>
      </Container>

      {/* 04: Principles we're exploring */}
      <Section variant="muted" padding={0}>
        <NarrativeBlock
          eyebrow={principlesSection.eyebrow}
          title={principlesSection.title}
          paragraphs={principlesSection.paragraphs}
        />
        <Container paddingBlockEnd={10}>
          <VStack gap={10}>
            <Grid columns={{minWidth: 280, max: 3}} gap={8}>
              {principlesSection.principles.map((principle, index) => (
                <Principle key={principle.title} principle={principle} index={index} />
              ))}
            </Grid>
            <KeyStatement>{principlesSection.statement}</KeyStatement>
          </VStack>
        </Container>
      </Section>

      {/* 05: Conceptual architecture */}
      <Container paddingBlock={10}>
        <Grid columns={{minWidth: 320, max: 2}} gap={10}>
          <VStack gap={5}>
            <SectionIntro eyebrow={architecture.eyebrow} title={architecture.title} />
            {architecture.paragraphs.map((paragraph, index) => (
              <BodyText key={paragraph} delay={0.06 * index}>
                {paragraph}
              </BodyText>
            ))}
            <KeyStatement>{architecture.statement}</KeyStatement>
            <Microcopy>{architecture.microcopy}</Microcopy>
          </VStack>
          <Architecture layers={architecture.layers} />
        </Grid>
      </Container>

      {/* 06: Experiments / explorations */}
      <Section variant="muted" padding={0}>
        <NarrativeBlock
          eyebrow={experiments.eyebrow}
          title={experiments.title}
          paragraphs={experiments.paragraphs}>
          <VStack gap={1}>
            {experiments.outcomes.map((outcome, index) => (
              <Reveal key={outcome} delay={0.1 * index} distance={12}>
                <Text type="large" weight="medium">
                  {outcome}
                </Text>
              </Reveal>
            ))}
          </VStack>
          <BodyText>{experiments.closing}</BodyText>
        </NarrativeBlock>
        <Container paddingBlockEnd={10}>
          <VStack gap={6}>
            <Grid columns={{minWidth: 280, max: 2}} gap={4}>
              {experiments.explorations.map((exploration, index) => (
                <Reveal key={exploration.question} delay={0.06 * index} height="100%">
                  <Exploration number={index + 1} {...exploration} />
                </Reveal>
              ))}
            </Grid>
            <HStack gap={6} justify="between" vAlign="center" wrap="wrap">
              <Microcopy>{experiments.microcopy}</Microcopy>
              <CtaButton {...experiments.action} variant="secondary" direction="down" />
            </HStack>
          </VStack>
        </Container>
      </Section>

      {/* 07: What's changing */}
      <VStack gap={0} id={stillBecoming.id}>
        <NarrativeBlock
          eyebrow={stillBecoming.eyebrow}
          title={stillBecoming.title}
          paragraphs={[stillBecoming.opening]}>
          <LayeredLines lines={stillBecoming.changes} />
          <BodyText>{stillBecoming.paragraph}</BodyText>
        </NarrativeBlock>
        <Container paddingBlockEnd={10}>
          <VStack gap={6}>
            <Reveal>
              <Heading level={3} style={typeRole('headline-l')}>
                {stillBecoming.listTitle}
              </Heading>
            </Reveal>
            <Grid columns={{minWidth: 260, max: 2}} gap={6}>
              {stillBecoming.exploring.map((item, index) => (
                <Reveal key={item.title} delay={0.06 * index} gap={2}>
                  <Text type="large" weight="semibold">
                    {item.title}
                  </Text>
                  <Text color="secondary" textWrap="pretty">
                    {item.question}
                  </Text>
                </Reveal>
              ))}
            </Grid>
            <Reveal delay={0.2}>
              <StatusBadge {...stillBecoming.status} />
            </Reveal>
          </VStack>
        </Container>
      </VStack>

      {/* Closing statement */}
      <Section variant="muted" padding={0}>
        <ProjectInvitation {...closing} />
      </Section>
    </VStack>
  );
}
