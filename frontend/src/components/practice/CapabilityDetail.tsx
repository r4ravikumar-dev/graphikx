'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {accentStyle} from '@/components/storytelling/Lines';
import type {Capability} from '@/content/practice';
import {typeRole} from '@/theme/typeScale';
import {EYEBROW_STYLE} from '@/theme/eyebrow';

/** What opens inside a capability row: the idea, what we work on, and one line to remember. */
export function CapabilityDetail({capability}: {capability: Capability}) {
  return (
    <VStack gap={5} style={{maxInlineSize: '64ch'}}>
      <Heading level={4} textWrap="balance" style={typeRole('headline-m')}>
        {capability.headline.replace('\n', ' ')}
      </Heading>
      <Text type="large" color="secondary" textWrap="pretty">
        {capability.body.join(' ')}
      </Text>
      <VStack gap={2}>
        <Text type="supporting" color="secondary" style={EYEBROW_STYLE}>
          What we work on
        </Text>
        <HStack gap={0} wrap="wrap" role="list" style={{columnGap: 'var(--spacing-5)', rowGap: 'var(--spacing-2)'}}>
          {capability.workOn.map(item => (
            <Text key={item} role="listitem">
              {item}
            </Text>
          ))}
        </HStack>
      </VStack>
      <Text type="large" color="secondary" style={accentStyle}>
        {capability.nudge}
      </Text>
    </VStack>
  );
}
