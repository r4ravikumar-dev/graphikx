'use client';

import Link from 'next/link';
import {MotionConfig} from 'framer-motion';
import {Theme} from '@astryxdesign/core/theme';
import {LinkProvider} from '@astryxdesign/core/Link';
import {graphikxTheme} from '@/theme/graphikx';
import {springs} from '@/motion/springs';

export function Providers({children}: {children: React.ReactNode}) {
  return (
    // mode="system": always follow the device's light/dark setting. There is no toggle.
    <Theme theme={graphikxTheme} mode="system">
      <LinkProvider component={Link}>
        <MotionConfig reducedMotion="user" transition={springs.spatial.default}>
          {children}
        </MotionConfig>
      </LinkProvider>
    </Theme>
  );
}
