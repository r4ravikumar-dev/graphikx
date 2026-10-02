import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {CtaButton} from '@/components/navigation/CtaButton';
import {Hero} from '@/components/storytelling/Hero';
import {NarrativeBlock} from '@/components/storytelling/NarrativeBlock';
import {SectionIntro} from '@/components/storytelling/SectionIntro';
import {Statement} from '@/components/storytelling/Statement';
import {Microcopy} from '@/components/storytelling/Microcopy';
import {Highlight} from '@/components/storytelling/Highlight';
import {LayeredLines} from '@/components/storytelling/LayeredLines';
import {TopicGrid} from '@/components/storytelling/TopicGrid';
import {ProcessSteps} from '@/components/storytelling/ProcessSteps';
import {SituationList} from '@/components/storytelling/SituationList';
import {Eyebrow} from '@/components/storytelling/Eyebrow';
import {PracticePreview} from '@/components/practice/PracticePreview';
import {GraphyenePreview} from '@/components/graphyene/GraphyenePreview';
import {ArticleCard} from '@/components/thinking/ArticleCard';
import {ProjectEnquiry} from '@/components/forms/ProjectEnquiry';
import {MascotDialogue} from '@/components/mascot/MascotDialogue';
import {articles} from '@/content/articles';
import {
  graphyenePreview,
  howWeThink,
  mascotMoment,
  opening,
  pointOfView,
  practicePreview,
  problem,
  startConversation,
  thinkingPreview,
  whatWeShape,
  whoWeWorkWith,
} from '@/content/home';
import {typeRole} from '@/theme/typeScale';

export default function HomePage() {
  const previewArticles = thinkingPreview.articleSlugs
    .map(slug => articles.find(article => article.slug === slug))
    .filter(article => article !== undefined);

  return (
    <VStack gap={0}>
      {/* 01: Opening statement */}
      <Hero {...opening} />

      {/* 02: Point of view */}
      <NarrativeBlock {...pointOfView} isStatement />

      {/* 03: The problem we notice */}
      <Section variant="muted" padding={0}>
        <NarrativeBlock
          eyebrow={problem.eyebrow}
          title={problem.title}
          paragraphs={[]}
          microcopy={problem.microcopy}>
          <LayeredLines lines={problem.buildUp} />
          {problem.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.08 * index}>
              <Text type="large" color="secondary" as="p" textWrap="pretty">
                {paragraph}
              </Text>
            </Reveal>
          ))}
          <Highlight lines={problem.highlight} />
        </NarrativeBlock>
      </Section>

      {/* 04: What we shape */}
      <Container paddingBlock={10}>
        <VStack gap={8}>
          <SectionIntro
            eyebrow={whatWeShape.eyebrow}
            title={whatWeShape.title}
            description={whatWeShape.description}
          />
          <TopicGrid topics={whatWeShape.items} />
          <Microcopy>{whatWeShape.microcopy}</Microcopy>
        </VStack>
      </Container>

      {/* 05: How we think */}
      <VStack gap={0} id={howWeThink.id}>
        <NarrativeBlock
          eyebrow={howWeThink.eyebrow}
          title={howWeThink.title}
          paragraphs={howWeThink.paragraphs}
        />
        <Container paddingBlockEnd={10}>
          <ProcessSteps steps={howWeThink.steps} />
        </Container>
        <Statement statement={howWeThink.closing} attribution={howWeThink.microcopy} />
      </VStack>

      {/* 06: Practice preview */}
      <PracticePreview {...practicePreview} />

      {/* 07: Graphyene preview */}
      <GraphyenePreview {...graphyenePreview} />

      {/* 08: Thinking preview */}
      <Container paddingBlock={10}>
        <VStack gap={8}>
          <SectionIntro
            eyebrow={thinkingPreview.eyebrow}
            title={thinkingPreview.title}
            description={thinkingPreview.description}
          />
          <Grid columns={{minWidth: 300}} gap={4}>
            {previewArticles.map((article, index) => (
              <Reveal key={article.slug} delay={0.06 * index} height="100%">
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </Grid>
          <HStack gap={6} justify="between" vAlign="center" wrap="wrap">
            <Microcopy>{thinkingPreview.microcopy}</Microcopy>
            <CtaButton {...thinkingPreview.action} variant="secondary" />
          </HStack>
        </VStack>
      </Container>

      {/* 09: Who we work with */}
      <Section variant="muted" padding={0}>
        <Container paddingBlock={10}>
          <Grid columns={{minWidth: 320, max: 2}} gap={10}>
            <SectionIntro eyebrow={whoWeWorkWith.eyebrow} title={whoWeWorkWith.title} />
            <VStack gap={6}>
              <SituationList situations={whoWeWorkWith.situations} />
              <Reveal gap={2}>
                <Heading level={3} style={typeRole('headline-l')}>
                  {whoWeWorkWith.closing}
                </Heading>
              </Reveal>
              <Microcopy>{whoWeWorkWith.microcopy}</Microcopy>
              <HStack>
                <CtaButton {...whoWeWorkWith.action} direction="down" />
              </HStack>
            </VStack>
          </Grid>
        </Container>
      </Section>

      {/* 10: Mascot moment */}
      <Container size="narrow" paddingBlock={10}>
        <VStack gap={6} hAlign="center">
          <Reveal hAlign="center">
            <Eyebrow justify="center">{mascotMoment.eyebrow}</Eyebrow>
          </Reveal>
          <MascotDialogue frames={mascotMoment.frames} />
          <Microcopy justify="center">{mascotMoment.microcopy}</Microcopy>
        </VStack>
      </Container>

      {/* 11: Start a conversation */}
      <Section variant="muted" padding={0}>
        <ProjectEnquiry {...startConversation} />
      </Section>
    </VStack>
  );
}
