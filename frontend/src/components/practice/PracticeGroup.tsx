'use client';

import {VStack} from '@astryxdesign/core/Layout';
import {Divider} from '@astryxdesign/core/Divider';
import {Container} from '@/components/layout/Container';
import {NarrativeBlock} from '@/components/storytelling/NarrativeBlock';
import {PracticeSection} from './PracticeSection';
import type {Capability, PracticeGroup as PracticeGroupData} from '@/content/practice';

type PracticeGroupProps = {
  group: PracticeGroupData;
  number: number;
  capabilities: Capability[];
};

/** A numbered chapter of the practice (e.g. "01 · Product thinking") and its capabilities. */
export function PracticeGroup({group, number, capabilities}: PracticeGroupProps) {
  return (
    <VStack gap={0} as="section" aria-label={group.eyebrow}>
      <NarrativeBlock
        eyebrow={`${String(number).padStart(2, '0')} · ${group.eyebrow}`}
        title={group.title}
        paragraphs={group.paragraphs}
      />
      <Container paddingBlockEnd={10}>
        <VStack gap={10}>
          {capabilities.map(capability => (
            <VStack key={capability.slug} gap={10}>
              <Divider />
              <PracticeSection capability={capability} />
            </VStack>
          ))}
        </VStack>
      </Container>
    </VStack>
  );
}
