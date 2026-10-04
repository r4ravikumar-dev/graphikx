import type {Metadata} from 'next';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Reveal} from '@/components/motion/Reveal';
import {Lines} from '@/components/storytelling/Lines';
import {BigStatement} from '@/components/editorial/BigStatement';
import {BuildUp} from '@/components/editorial/BuildUp';
import {Chapter} from '@/components/editorial/Chapter';
import {ChapterHeader} from '@/components/editorial/ChapterHeader';
import {EditorialHero} from '@/components/editorial/EditorialHero';
import {IndexLabel} from '@/components/editorial/IndexLabel';
import {IndexList} from '@/components/editorial/IndexList';
import {SequenceRail} from '@/components/editorial/SequenceRail';
import {Manifesto} from '@/components/editorial/Manifesto';
import {QuestionRail} from '@/components/editorial/QuestionRail';
import {StepTimeline} from '@/components/editorial/StepTimeline';
import {StickySplit} from '@/components/editorial/StickySplit';
import {StackedLayers, SystemBlocks} from '@/components/illustrations/scenes';
import {
  architecture,
  closing,
  explorations,
  hero,
  idea,
  principles,
  problem,
  shouldDo,
  stillBecoming,
} from '@/content/graphyene';
import {typeRole} from '@/theme/typeScale';

export const metadata: Metadata = {
  title: 'Graphyene',
  description:
    "Graphyene is Graphikx's evolving exploration into design systems that keep growing products clear and connected.",
  alternates: {canonical: '/graphyene'},
};

export default function GraphyenePage() {
  return (
    <VStack gap={0}>
      <EditorialHero
        {...hero}
        illustration={<SystemBlocks label="Mixed shapes held in an ordered grid" />}
      />

      {/* 01: The problem, told as layers. */}
      <Chapter label={problem.label}>
        <StickySplit
          aside={
            <>
              <ChapterHeader index={1} label={problem.label} title={problem.title} size="display-l" />
              <StackedLayers maxWidth={340} />
            </>
          }>
          <BuildUp layers={problem.layers} resolution={problem.resolution} />
        </StickySplit>
      </Chapter>

      {/* 02: The idea. */}
      <Chapter label={idea.label}>
        <Reveal>
          <IndexLabel index={2}>{idea.label}</IndexLabel>
        </Reveal>
        <Manifesto text={idea.text} />
      </Chapter>

      {/* 03: What a system should do. */}
      <Chapter label={shouldDo.label}>
        <ChapterHeader index={3} label={shouldDo.label} title={shouldDo.title} />
        <IndexList items={shouldDo.items} />
      </Chapter>

      {/* 04: Principles, on the muted surface. */}
      <Chapter tone="muted" label={principles.label}>
        <StickySplit
          aside={<ChapterHeader index={4} label={principles.label} title={principles.title} size="display-l" />}>
          <StepTimeline steps={principles.steps} />
        </StickySplit>
      </Chapter>

      {/* 05: Architecture. */}
      <Chapter label={architecture.label}>
        <VStack gap={6}>
          <Reveal>
            <IndexLabel index={5}>{architecture.label}</IndexLabel>
          </Reveal>
          <Reveal delay={0.05} distance={32}>
            <Heading level={2} textWrap="balance" style={{...typeRole('display-xl'), letterSpacing: '-0.03em', maxInlineSize: '14ch'}}>
              <Lines text={architecture.title} />
            </Heading>
          </Reveal>
          <HStack justify="end">
            <Reveal delay={0.1}>
              <Text type="large" color="secondary" textWrap="pretty" style={{maxInlineSize: '44ch'}}>
                {architecture.description}
              </Text>
            </Reveal>
          </HStack>
        </VStack>
        <SequenceRail steps={architecture.layers} label="The Graphyene layers, in order" />
      </Chapter>

      {/* 06: Explorations. */}
      <Chapter label={explorations.label}>
        <ChapterHeader index={6} label={explorations.label} title={explorations.title} />
        <QuestionRail items={explorations.items} />
      </Chapter>

      {/* 07: Still becoming. */}
      <Chapter tone="muted" label={stillBecoming.label}>
        <ChapterHeader index={7} label={stillBecoming.label} title={stillBecoming.title} />
        <IndexList items={stillBecoming.items} isNumbered={false} />
      </Chapter>

      <BigStatement {...closing} />
    </VStack>
  );
}
