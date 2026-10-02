'use client';

import type {ComponentProps} from 'react';
import {VStack} from '@astryxdesign/core/Layout';

/** The site's content column. The header uses it too, so everything lines up on wide screens. */
export const CONTENT_MAX_WIDTH = 1120;

/** Side gutter between the content column and the edge of the screen. */
export const CONTENT_GUTTER = 'var(--spacing-6)';

const widths = {
  narrow: 760,
  default: CONTENT_MAX_WIDTH,
} as const;

type ContainerProps = ComponentProps<typeof VStack> & {
  size?: keyof typeof widths;
};

/** Caps and centres page content so wide screens keep comfortable gutters. */
export function Container({size = 'default', style, ...props}: ContainerProps) {
  return (
    <VStack
      width="100%"
      maxWidth={widths[size]}
      style={{marginInline: 'auto', paddingInline: CONTENT_GUTTER, ...style}}
      {...props}
    />
  );
}
