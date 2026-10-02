'use client';

import {Text} from '@astryxdesign/core/Text';
import {Reveal} from '@/components/motion/Reveal';
import {Lines} from './Lines';

type MicrocopyProps = {
  children: string;
  justify?: 'start' | 'center';
  delay?: number;
};

/** A quiet closing line that follows a section's main content. */
export function Microcopy({children, justify = 'start', delay = 0}: MicrocopyProps) {
  return (
    <Reveal delay={delay} hAlign={justify}>
      <Text type="supporting" color="secondary" justify={justify} textWrap="balance">
        <Lines text={children} />
      </Text>
    </Reveal>
  );
}
