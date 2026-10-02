'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Banner} from '@astryxdesign/core/Banner';
import {Card} from '@astryxdesign/core/Card';
import {Reveal} from '@/components/motion/Reveal';
import {KeyStatement} from '@/components/storytelling/KeyStatement';
import {Eyebrow} from '@/components/storytelling/Eyebrow';
import {typeRole} from '@/theme/typeScale';

type FounderProfileProps = {
  name: string;
  role: string;
  /** "{name}" is replaced with the founder's name. */
  bio: string[];
  quote: string;
  photo?: string;
};

const PLACEHOLDER_NAME = '[Name]';

/**
 * The founder's profile. Until a name is provided it renders only in
 * development, with a placeholder, so a draft never ships by accident.
 */
export function FounderProfile({name, role, bio, quote, photo}: FounderProfileProps) {
  const isDraft = !name;
  if (isDraft && process.env.NODE_ENV === 'production') return null;
  const displayName = name || PLACEHOLDER_NAME;

  return (
    <Reveal>
      <Card padding={8} elevation="low">
        <Grid columns={{minWidth: 280, max: 2}} gap={8}>
          <VStack gap={4}>
            {isDraft && (
              <Banner
                status="warning"
                title="Draft profile"
                description="Add the founder's name in content/studio.ts. This card is hidden in production until then."
              />
            )}
            <HStack gap={4} vAlign="center">
              <Avatar name={displayName} src={photo} size="lg" tooltip={false} />
              <VStack gap={0.5}>
                <Eyebrow>Founder / Creative lead</Eyebrow>
                <Heading level={3} style={typeRole('headline-m')}>
                  {displayName}
                </Heading>
                <Text type="supporting">{role}</Text>
              </VStack>
            </HStack>
            {bio.map(paragraph => (
              <Text key={paragraph} type="large" color="secondary" as="p" textWrap="pretty">
                {paragraph.replaceAll('{name}', displayName)}
              </Text>
            ))}
          </VStack>
          <VStack vAlign="center">
            <KeyStatement>{`“${quote}”`}</KeyStatement>
          </VStack>
        </Grid>
      </Card>
    </Reveal>
  );
}
