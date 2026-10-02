'use client';

import {Heading} from '@astryxdesign/core/Heading';
import {MotionVStack} from '@/components/motion/Motion';
import {expressive} from '@/motion/springs';
import {Lines} from './Lines';
import {typeRole} from '@/theme/typeScale';

/**
 * A highlighted statement inside a section: larger type with an accent rule,
 * drawn in from the side when it scrolls into view.
 */
export function KeyStatement({children}: {children: string}) {
  return (
    <MotionVStack
      paddingInlineStart={5}
      paddingBlock={2}
      initial={{opacity: 0, x: -16}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true, margin: '0px 0px -10% 0px'}}
      transition={expressive('default')}
      style={{borderInlineStart: 'var(--spacing-1) solid var(--color-accent)'}}>
      <Heading level={3} style={typeRole('headline-l')} textWrap="balance">
        <Lines text={children} />
      </Heading>
    </MotionVStack>
  );
}
