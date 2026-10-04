'use client';

import {Chapter} from './Chapter';
import {ChapterHeader} from './ChapterHeader';
import {FaqList} from './FaqList';
import {StickySplit} from './StickySplit';
import {FaqQuestion} from '@/components/illustrations/scenes';
import type {FaqGroup} from '@/content/faqs';

/**
 * A page's contextual questions, just before its closing: the heading and
 * the FAQ illustration pinned on the left, the questions as accordion rows
 * on the right (stacked below 1024px).
 */
export function PageFaq({
  group,
  index,
  tone,
}: {
  group: FaqGroup;
  index?: number;
  tone?: 'default' | 'muted';
}) {
  return (
    <Chapter label={group.label} tone={tone}>
      <StickySplit
        aside={
          <>
            <ChapterHeader index={index} label={group.label} title={group.title} size="display-l" />
            <FaqQuestion maxWidth={320} />
          </>
        }>
        <FaqList items={group.items} />
      </StickySplit>
    </Chapter>
  );
}
