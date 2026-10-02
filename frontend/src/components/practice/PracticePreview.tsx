'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Container} from '@/components/layout/Container';
import {SectionIntro} from '@/components/storytelling/SectionIntro';
import {CtaButton} from '@/components/navigation/CtaButton';
import {Reveal} from '@/components/motion/Reveal';
import {Capability} from './Capability';
import {capabilities} from '@/content/practice';

type PracticePreviewProps = {
  eyebrow: string;
  title: string;
  description: string;
  action: {label: string; href: string};
};

/** Home-page overview of the practice, linking through to /practice. */
export function PracticePreview({eyebrow, title, description, action}: PracticePreviewProps) {
  return (
    <Container paddingBlock={10}>
      <VStack gap={8}>
        <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        <Grid columns={{minWidth: 260}} gap={4}>
          {capabilities.map((capability, index) => (
            <Reveal key={capability.slug} delay={0.05 * index} height="100%">
              <Capability capability={capability} />
            </Reveal>
          ))}
        </Grid>
        <HStack>
          <CtaButton {...action} variant="secondary" />
        </HStack>
      </VStack>
    </Container>
  );
}
