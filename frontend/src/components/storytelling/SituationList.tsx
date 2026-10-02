'use client';

import {VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {Divider} from '@astryxdesign/core/Divider';
import {Dot} from 'lucide-react';
import {MotionHStack} from '@/components/motion/Motion';
import {expressive} from '@/motion/springs';

/** Familiar situations a visitor might recognise, each sliding in on its own beat. */
export function SituationList({situations}: {situations: string[]}) {
  return (
    <VStack gap={0} as="ul" role="list">
      {situations.map((situation, index) => (
        <VStack key={situation} gap={0} as="li">
          {index > 0 && <Divider />}
          <MotionHStack
            gap={3}
            vAlign="center"
            paddingBlock={4}
            initial={{opacity: 0, x: -24}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, margin: '0px 0px -10% 0px'}}
            transition={expressive('default', 0.08 * index)}>
            <Icon icon={Dot} size="lg" color="accent" />
            <Text type="large" textWrap="pretty">
              {situation}
            </Text>
          </MotionHStack>
        </VStack>
      ))}
    </VStack>
  );
}
