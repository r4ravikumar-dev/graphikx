'use client';

import {TabList, Tab} from '@astryxdesign/core/TabList';

export const ALL_CATEGORIES = 'All';

type CategoryFilterProps = {
  categories: readonly string[];
  value: string;
  onChange: (value: string) => void;
};

/** Narrows the Thinking list to one category. */
export function CategoryFilter({categories, value, onChange}: CategoryFilterProps) {
  return (
    <TabList value={value} onChange={onChange} hasDivider aria-label="Filter articles by category">
      {[ALL_CATEGORIES, ...categories].map(category => (
        <Tab key={category} value={category} label={category} />
      ))}
    </TabList>
  );
}
