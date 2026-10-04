'use client';

import {Text} from '@astryxdesign/core/Text';
import {Lines} from '@/components/storytelling/Lines';
import {IndexList} from './IndexList';

export type Faq = {question: string; answer: string};

/** Questions as expandable hairline rows, the way the reference studios close service pages. */
export function FaqList({items}: {items: readonly Faq[]}) {
  return (
    <IndexList
      isNumbered={false}
      size="medium"
      items={items.map(item => ({
        title: item.question,
        detail: (
          <Text type="large" color="secondary" textWrap="pretty" style={{maxInlineSize: '60ch'}}>
            <Lines text={item.answer} />
          </Text>
        ),
      }))}
    />
  );
}
