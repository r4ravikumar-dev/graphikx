'use client';

import {VStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {
  Blocks,
  CircleHelp,
  Eye,
  LayoutDashboard,
  Link,
  Minus,
  MousePointerClick,
  Palette,
  RefreshCw,
  Repeat,
  Route,
  Sparkles,
  Sprout,
  Users,
  WandSparkles,
  type LucideIcon,
} from 'lucide-react';
import {Reveal} from '@/components/motion/Reveal';
import {Lines} from './Lines';

const icons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  route: Route,
  palette: Palette,
  pointer: MousePointerClick,
  dashboard: LayoutDashboard,
  sprout: Sprout,
  repeat: Repeat,
  link: Link,
  refresh: RefreshCw,
  users: Users,
  eye: Eye,
  minus: Minus,
  question: CircleHelp,
  details: WandSparkles,
  blocks: Blocks,
};

export type Topic = {icon?: string; title: string; description: string};

/**
 * A grid of short topics: icon, title, one line. Grouped by spacing, not cards,
 * because the items are parts of one idea rather than separate things.
 */
export function TopicGrid({topics}: {topics: readonly Topic[]}) {
  return (
    <Grid columns={{minWidth: 260, max: 3}} gap={8}>
      {topics.map((topic, index) => {
        const icon = topic.icon ? icons[topic.icon] : undefined;
        return (
          <Reveal key={topic.title} delay={0.06 * index} gap={3}>
            {icon && <Icon icon={icon} size="lg" color="accent" />}
            <VStack gap={1}>
              <Heading level={3}>{topic.title}</Heading>
              <Text color="secondary" textWrap="pretty">
                <Lines text={topic.description} />
              </Text>
            </VStack>
          </Reveal>
        );
      })}
    </Grid>
  );
}
