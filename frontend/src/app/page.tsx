import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Reveal} from '@/components/motion/Reveal';
import {CtaButton} from '@/components/navigation/CtaButton';
import {Lines} from '@/components/storytelling/Lines';
import {ArticleRows} from '@/components/editorial/ArticleRows';
import {BigStatement} from '@/components/editorial/BigStatement';
import {BuildUp} from '@/components/editorial/BuildUp';
import {Chapter} from '@/components/editorial/Chapter';
import {ChapterHeader} from '@/components/editorial/ChapterHeader';
import {EditorialHero} from '@/components/editorial/EditorialHero';
import {IndexLabel} from '@/components/editorial/IndexLabel';
import {IndexList} from '@/components/editorial/IndexList';
import {LineDiagram} from '@/components/editorial/LineDiagram';
import {Manifesto} from '@/components/editorial/Manifesto';
import {Marquee} from '@/components/editorial/Marquee';
import {StepTimeline} from '@/components/editorial/StepTimeline';
import {StickySplit} from '@/components/editorial/StickySplit';
import {
  QuestionPath,
  StackedLayers,
  SystemBlocks,
  TangleToLine,
  ThinkingLens,
} from '@/components/illustrations/scenes';
import {articles} from '@/content/articles';
import {capabilities} from '@/content/practice';
import {
  closing,
  familiar,
  graphyene,
  hero,
  howWeThink,
  manifesto,
  practice,
  problem,
  thinking,
} from '@/content/home';
import {typeRole} from '@/theme/typeScale';

export default function HomePage() {
  const previewArticles = thinking.articleSlugs
    .map(slug => articles.find(article => article.slug === slug))
    .filter(article => article !== undefined);

  return (
    <VStack gap={0}>
      {/* Hero: one line, one sentence, one action. */}
      <EditorialHero
        {...hero}
        size="display-xxl"
        isFullHeight
        illustration={<TangleToLine />}
      />

      {/* Manifesto: words light up as you scroll. */}
      <Chapter label={manifesto.label}>
        <Reveal>
          <IndexLabel>{manifesto.label}</IndexLabel>
        </Reveal>
        <Manifesto text={manifesto.text} />
      </Chapter>

      {/* 01 The problem: title pinned while the layers stack up. */}
      <Chapter label={problem.label}>
        <StickySplit
          aside={
            <>
              <ChapterHeader index={problem.index} label={problem.label} title={problem.title} size="display-l" />
              <StackedLayers maxWidth={360} />
            </>
          }>
          <BuildUp layers={problem.layers} resolution={problem.resolution} />
        </StickySplit>
      </Chapter>

      {/* 02 Practice: one row per discipline. */}
      <Chapter label={practice.label}>
        <ChapterHeader index={practice.index} label={practice.label} title={practice.title} />
        <IndexList
          items={capabilities.map(capability => ({
            title: capability.title,
            summary: capability.summary,
            href: `/practice#${capability.slug}`,
          }))}
        />
        <Reveal>
          <HStack>
            <CtaButton {...practice.action} variant="secondary" />
          </HStack>
        </Reveal>
      </Chapter>

      {/* 03 How we think: one step per row, paced by scrolling. */}
      <Chapter label={howWeThink.label}>
        <StickySplit
          aside={
            <>
              <ChapterHeader index={howWeThink.index} label={howWeThink.label} title={howWeThink.title} size="display-l" />
              <QuestionPath maxWidth={360} />
            </>
          }>
          <StepTimeline steps={howWeThink.steps} />
        </StickySplit>
      </Chapter>

      {/* 04 Graphyene: on the muted surface. */}
      <Chapter tone="muted" label={graphyene.label}>
        <Grid columns={{minWidth: 320, max: 2}} gap={10} style={{alignItems: 'center'}}>
          <VStack gap={6}>
            <Reveal>
              <IndexLabel index={graphyene.index}>{graphyene.label}</IndexLabel>
            </Reveal>
            <Reveal delay={0.05} distance={32}>
              <Heading level={2} style={{...typeRole('display-xl'), letterSpacing: '-0.04em'}}>
                {graphyene.title}
              </Heading>
            </Reveal>
            <Reveal delay={0.1}>
              <Text type="large" color="secondary" textWrap="pretty" style={{maxInlineSize: '36ch'}}>
                {graphyene.description}
              </Text>
            </Reveal>
            <Reveal delay={0.15}>
              <HStack>
                <CtaButton {...graphyene.action} variant="secondary" />
              </HStack>
            </Reveal>
          </VStack>
          <Reveal hAlign="center">
            <SystemBlocks label="Mixed shapes settling into an ordered grid" />
          </Reveal>
        </Grid>
        <LineDiagram
          nodes={graphyene.layers}
          label={`The Graphyene layers: ${graphyene.layers.join(', then ')}.`}
        />
        <Marquee items={graphyene.principles} />
      </Chapter>

      {/* 05 Thinking: articles as editorial rows. */}
      <Chapter label={thinking.label}>
        <Grid columns={{minWidth: 320, max: 2}} gap={10} style={{alignItems: 'end'}}>
          <ChapterHeader index={thinking.index} label={thinking.label} title={thinking.title} size="display-l" />
          <Reveal hAlign="end">
            <ThinkingLens maxWidth={340} />
          </Reveal>
        </Grid>
        <ArticleRows articles={previewArticles} />
        <Reveal>
          <HStack>
            <CtaButton {...thinking.action} variant="secondary" />
          </HStack>
        </Reveal>
      </Chapter>

      {/* 06 Maybe this sounds familiar: one large line at a time. */}
      <Chapter tone="muted" label={familiar.label}>
        <Reveal>
          <IndexLabel index={familiar.index}>{familiar.label}</IndexLabel>
        </Reveal>
        <VStack gap={0} role="list">
          {familiar.situations.map(situation => (
            <Reveal
              key={situation}
              role="listitem"
              distance={32}
              style={{borderBlockStart: '1px solid var(--color-border)', paddingBlock: 'var(--spacing-8)'}}>
              <Text style={{...typeRole('headline-xl'), letterSpacing: '-0.02em'}} textWrap="balance">
                {situation}
              </Text>
            </Reveal>
          ))}
        </VStack>
        <Reveal distance={32}>
          <Heading level={2} style={{...typeRole('display-l'), letterSpacing: '-0.03em'}}>
            <Lines text={familiar.closing} />
          </Heading>
        </Reveal>
      </Chapter>


      {/* Closing: statement and email, no form. */}
      <BigStatement {...closing} />
    </VStack>
  );
}
