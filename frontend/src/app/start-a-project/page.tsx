import type {Metadata} from 'next';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {CtaButton} from '@/components/navigation/CtaButton';
import {SectionIntro} from '@/components/storytelling/SectionIntro';
import {KeyStatement} from '@/components/storytelling/KeyStatement';
import {Microcopy} from '@/components/storytelling/Microcopy';
import {ProjectForm} from '@/components/forms/ProjectForm';
import {startProjectPage} from '@/content/enquiry';
import {typeRole} from '@/theme/typeScale';

export const metadata: Metadata = {
  title: 'Start a Project',
  description:
    "You don't need a perfect brief. Tell Graphikx what you're working on and we'll start from there.",
  alternates: {canonical: '/start-a-project'},
};

/** Frame from the Astryx "contact-form" template: one centred, capped column. */
export default function StartAProjectPage() {
  const {opening, enquiry, closing} = startProjectPage;

  return (
    <VStack gap={0}>
      {/* 01: Opening */}
      <Container size="narrow" paddingBlock={10}>
        <VStack gap={5} paddingBlockStart={10}>
          <SectionIntro level={1} eyebrow={opening.eyebrow} title={opening.title} />
          <VStack gap={1}>
            {opening.lines.map((line, index) => (
              <Reveal key={line} delay={0.15 + 0.07 * index} distance={12}>
                <Text type="large" weight="medium">
                  {line}
                </Text>
              </Reveal>
            ))}
          </VStack>
          <Reveal delay={0.5}>
            <Text type="large" color="secondary">
              {opening.closing}
            </Text>
          </Reveal>
          <Microcopy delay={0.55}>{opening.microcopy}</Microcopy>
        </VStack>
      </Container>

      {/* 02–05: Project enquiry */}
      <Section variant="muted" padding={0}>
        <Container
          size="narrow"
          paddingBlock={10}
          gap={6}
          id={enquiry.id}>
          <SectionIntro
            eyebrow={enquiry.eyebrow}
            title={enquiry.title}
            description={enquiry.description}
          />
          <Reveal delay={0.1}>
            <Section padding={6}>
              <ProjectForm variant="full" />
            </Section>
          </Reveal>
        </Container>
      </Section>

      {/* 08: Closing statement */}
      <Container size="narrow" paddingBlock={10}>
        <VStack gap={5}>
          <Reveal>
            <Heading level={2} type="display-2" textWrap="balance">
              {closing.title}
            </Heading>
          </Reveal>
          <VStack gap={1}>
            {closing.lines.map((line, index) => (
              <Reveal key={line} delay={0.08 * index} distance={12}>
                <Text type="large" color="secondary">
                  {line}
                </Text>
              </Reveal>
            ))}
          </VStack>
          <KeyStatement>{closing.quote}</KeyStatement>
          <Reveal>
            <Heading level={3} style={typeRole('headline-l')}>
              {closing.enough}
            </Heading>
          </Reveal>
          <HStack>
            <CtaButton {...closing.action} />
          </HStack>
        </VStack>
      </Container>
    </VStack>
  );
}
