'use client';

import {useId} from 'react';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {Token} from '@astryxdesign/core/Token';
import {MotionHStack} from '@/components/motion/Motion';
import {springs} from '@/motion/springs';
import {EMPHASIS} from '@/theme/emphasis';

type ChoiceChipsProps = {
  label: string;
  hint?: string;
  options: string[];
  value: string;
  /** Called with "" when the selected chip is pressed again. */
  onChange: (value: string) => void;
};

/** A single-choice question answered by tapping one chip. Tapping it again clears it. */
export function ChoiceChips({label, hint, options, value, onChange}: ChoiceChipsProps) {
  const labelId = useId();

  return (
    <VStack gap={2} role="group" aria-labelledby={labelId}>
      <VStack gap={0.5}>
        <Text type="label" id={labelId}>
          {label}
        </Text>
        {hint && <Text type="supporting">{hint}</Text>}
      </VStack>
      <HStack gap={2} wrap="wrap">
        {options.map(option => {
          const isSelected = value === option;
          return (
            <MotionHStack
              key={option}
              animate={{scale: isSelected ? 1.04 : 1}}
              whileTap={{scale: 0.95}}
              transition={springs.spatial.fast}>
              <Token
                label={option}
                color={isSelected ? EMPHASIS : 'default'}
                onClick={() => onChange(isSelected ? '' : option)}
                description={isSelected ? 'Selected' : undefined}
              />
            </MotionHStack>
          );
        })}
      </HStack>
    </VStack>
  );
}
