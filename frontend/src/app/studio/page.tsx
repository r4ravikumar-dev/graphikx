import type {Metadata} from 'next';
import {VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {Reveal} from '@/components/motion/Reveal';
import {MascotDialogue} from '@/components/mascot/MascotDialogue';
import {BigStatement} from '@/components/editorial/BigStatement';
import {BuildUp} from '@/components/editorial/BuildUp';
import {Chapter} from '@/components/editorial/Chapter';
import {ChapterHeader} from '@/components/editorial/ChapterHeader';
import {EditorialHero} from '@/components/editorial/EditorialHero';
import {IndexLabel} from '@/components/editorial/IndexLabel';
import {IndexList} from '@/components/editorial/IndexList';
import {Manifesto} from '@/components/editorial/Manifesto';
import {QuestionRail} from '@/components/editorial/QuestionRail';
import {StepTimeline} from '@/components/editorial/StepTimeline';
import {StickySplit} from '@/components/editorial/StickySplit';
import {OriginRings, QuestionPath} from '@/components/illustrations/scenes';
import {FounderNote} from '@/components/studio/FounderNote';
import {
  beliefs,
  closing,
  currentlyExploring,
  founder,
  hero,
  howWeWork,
  manifesto,
  mascotMoment,
  whyWeStarted,
} from '@/content/studio';

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'Graphikx is a digital design studio founded by Ravi Kumar, working on the space between what a product wants to do and what people actually experience.',
  alternates: {canonical: '/studio'},
};

export default function StudioPage() {
  return (
    <VStack gap={0}>
      <EditorialHero {...hero} illustration={<OriginRings />} />

      {/* Manifesto: why Graphikx exists. */}
      <Chapter label={manifesto.label}>
        <Reveal>
          <IndexLabel>{manifesto.label}</IndexLabel>
        </Reveal>
        <Manifesto text={manifesto.text} />
      </Chapter>

      {/* 01: Why we started, told as the questions we ask. */}
      <Chapter label={whyWeStarted.label}>
        <StickySplit
          aside={
            <>
              <ChapterHeader index={1} label={whyWeStarted.label} title={whyWeStarted.title} size="display-l" />
              <QuestionPath maxWidth={340} />
            </>
          }>
          <Reveal>
            <Text type="large" color="secondary" textWrap="pretty" style={{maxInlineSize: '44ch'}}>
              {whyWeStarted.intro}
            </Text>
          </Reveal>
          <BuildUp label="Question" layers={whyWeStarted.questions} resolution={whyWeStarted.resolution} />
        </StickySplit>
      </Chapter>

      {/* 02: Beliefs. */}
      <Chapter label={beliefs.label}>
        <ChapterHeader index={2} label={beliefs.label} title={beliefs.title} />
        <IndexList
          items={beliefs.items.map(item => ({
            title: item.title,
            summary: item.summary,
            detail: (
              <Text type="large" color="secondary" textWrap="pretty" style={{maxInlineSize: '60ch'}}>
                {item.detail}
              </Text>
            ),
          }))}
        />
      </Chapter>

      {/* 03: How we work, on the muted surface. */}
      <Chapter tone="muted" label={howWeWork.label}>
        <StickySplit
          aside={<ChapterHeader index={3} label={howWeWork.label} title={howWeWork.title} size="display-l" />}>
          <StepTimeline steps={howWeWork.steps} />
        </StickySplit>
      </Chapter>

      {/* 04: The founder. */}
      {founder.name && (
        <Chapter label={founder.label}>
          <FounderNote index={4} {...founder} />
        </Chapter>
      )}

      {/* 05: Currently exploring. */}
      <Chapter label={currentlyExploring.label}>
        <ChapterHeader index={5} label={currentlyExploring.label} title={currentlyExploring.title} />
        <QuestionRail items={currentlyExploring.items} />
      </Chapter>

      {/* Mascot moment: the looping dialogue on its own screen. */}
      <Chapter label={mascotMoment.label} width="narrow">
        <VStack gap={8} hAlign="center">
          <Reveal hAlign="center">
            <IndexLabel>{mascotMoment.label}</IndexLabel>
          </Reveal>
          <MascotDialogue frames={mascotMoment.frames} />
        </VStack>
      </Chapter>

      <BigStatement {...closing} />
    </VStack>
  );
}
