import type {Metadata} from 'next';
import {VStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {NarrativeBlock} from '@/components/storytelling/NarrativeBlock';
import {SectionIntro} from '@/components/storytelling/SectionIntro';
import {KeyStatement} from '@/components/storytelling/KeyStatement';
import {LayeredLines} from '@/components/storytelling/LayeredLines';
import {Microcopy} from '@/components/storytelling/Microcopy';
import {ProcessSteps} from '@/components/storytelling/ProcessSteps';
import {TopicGrid} from '@/components/storytelling/TopicGrid';
import {Eyebrow} from '@/components/storytelling/Eyebrow';
import {ProjectInvitation} from '@/components/storytelling/ProjectInvitation';
import {MascotDialogue} from '@/components/mascot/MascotDialogue';
import {FounderProfile} from '@/components/studio/FounderProfile';
import {FocusArea} from '@/components/studio/FocusArea';
import {
  beliefs,
  closing,
  currentlyExploring,
  howWeWork,
  mascotMoment,
  opening,
  outsideTheWork,
  people,
  whyWeStarted,
} from '@/content/studio';
import {typeRole} from '@/theme/typeScale';

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'Why Graphikx exists, what we believe, how we work, and the people and curiosity behind the studio.',
  alternates: {canonical: '/studio'},
};

/** A list of short lines that arrive one after another. */
function StaggeredLines({lines}: {lines: string[]}) {
  return (
    <VStack gap={1}>
      {lines.map((line, index) => (
        <Reveal key={line} delay={0.08 * index} distance={12}>
          <Text type="large" weight="medium">
            {line}
          </Text>
        </Reveal>
      ))}
    </VStack>
  );
}

function BodyText({children}: {children: string}) {
  return (
    <Reveal>
      <Text type="large" color="secondary" as="p" textWrap="pretty">
        {children}
      </Text>
    </Reveal>
  );
}

export default function StudioPage() {
  return (
    <VStack gap={0}>
      {/* 01: Opening */}
      <VStack paddingBlockStart={10}>
        <NarrativeBlock
          level={1}
          eyebrow={opening.eyebrow}
          title={opening.title}
          paragraphs={opening.paragraphs}
          microcopy={opening.microcopy}>
          <LayeredLines lines={opening.tooMany} />
          <BodyText>{opening.turn}</BodyText>
          <StaggeredLines lines={opening.approach} />
          <Reveal delay={0.2}>
            <Heading level={2} style={typeRole('headline-l')} color="accent">
              {opening.closing}
            </Heading>
          </Reveal>
        </NarrativeBlock>
      </VStack>

      {/* 02: Why Graphikx exists */}
      <Section variant="muted" padding={0}>
        <NarrativeBlock
          eyebrow={whyWeStarted.eyebrow}
          title={whyWeStarted.title}
          paragraphs={whyWeStarted.paragraphs}>
          <VStack gap={2}>
            {whyWeStarted.questions.map((question, index) => (
              <Reveal key={question} delay={0.1 * index} distance={12}>
                <Heading level={3}>{question}</Heading>
              </Reveal>
            ))}
          </VStack>
          <BodyText>{whyWeStarted.afterQuestions}</BodyText>
          <KeyStatement>{whyWeStarted.statement}</KeyStatement>
        </NarrativeBlock>
      </Section>

      {/* 03: What we believe */}
      <Container paddingBlock={10}>
        <VStack gap={8}>
          <SectionIntro eyebrow={beliefs.eyebrow} title={beliefs.title} />
          <TopicGrid topics={beliefs.items} />
        </VStack>
      </Container>

      {/* 04: How we work */}
      <Section variant="muted" padding={0}>
        <NarrativeBlock
          eyebrow={howWeWork.eyebrow}
          title={howWeWork.title}
          paragraphs={howWeWork.paragraphs}
        />
        <Container paddingBlockEnd={10}>
          <VStack gap={10}>
            <ProcessSteps steps={howWeWork.steps} />
            <KeyStatement>{howWeWork.statement}</KeyStatement>
          </VStack>
        </Container>
      </Section>

      {/* 05: The people behind Graphikx */}
      <NarrativeBlock eyebrow={people.eyebrow} title={people.title} paragraphs={people.paragraphs} />
      <Container paddingBlockEnd={10}>
        <VStack gap={10}>
          <FounderProfile {...people.founder} />
          <Grid columns={{minWidth: 320, max: 2}} gap={8}>
            <SectionIntro eyebrow="The team" title={people.team.title} />
            <VStack gap={4} vAlign="end">
              <BodyText>{people.team.description}</BodyText>
              <Microcopy>{people.team.microcopy}</Microcopy>
            </VStack>
          </Grid>
        </VStack>
      </Container>

      {/* 06: What we're exploring */}
      <Section variant="muted" padding={0}>
        <NarrativeBlock
          eyebrow={currentlyExploring.eyebrow}
          title={currentlyExploring.title}
          paragraphs={currentlyExploring.paragraphs}
        />
        <Container paddingBlockEnd={10}>
          <VStack gap={8}>
            <Grid columns={{minWidth: 260, max: 2}} gap={4}>
              {currentlyExploring.areas.map((area, index) => (
                <Reveal key={area.title} delay={0.06 * index} height="100%">
                  <FocusArea {...area} isFeatured={Boolean(area.action)} />
                </Reveal>
              ))}
            </Grid>
            <KeyStatement>{currentlyExploring.statement}</KeyStatement>
          </VStack>
        </Container>
      </Section>

      {/* 07: A little more about us */}
      <NarrativeBlock
        eyebrow={outsideTheWork.eyebrow}
        title={outsideTheWork.title}
        paragraphs={outsideTheWork.paragraphs}
        microcopy={outsideTheWork.microcopy}>
        <LayeredLines lines={outsideTheWork.noticing} />
        <BodyText>{outsideTheWork.afterNoticing}</BodyText>
        <StaggeredLines lines={outsideTheWork.outcomes} />
      </NarrativeBlock>

      {/* 08: Mascot moment */}
      <Section variant="muted" padding={0}>
        <Container size="narrow" paddingBlock={10}>
          <VStack gap={6} hAlign="center">
            <Reveal hAlign="center">
              <Eyebrow justify="center">{mascotMoment.eyebrow}</Eyebrow>
            </Reveal>
            <MascotDialogue frames={mascotMoment.frames} />
            <Microcopy justify="center">{mascotMoment.microcopy}</Microcopy>
          </VStack>
        </Container>
      </Section>

      {/* 09: Closing statement */}
      <ProjectInvitation {...closing} />
    </VStack>
  );
}
