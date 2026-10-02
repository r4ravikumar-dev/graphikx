'use client';

import {Text} from '@astryxdesign/core/Text';

type EyebrowProps = {
  children: string;
  justify?: 'start' | 'center';
};

/** The small uppercase label that names a section before its headline. */
export function Eyebrow({children, justify = 'start'}: EyebrowProps) {
  return (
    <Text
      type="label"
      color="accent"
      justify={justify}
      style={{textTransform: 'uppercase', letterSpacing: '0.08em'}}>
      {children}
    </Text>
  );
}
