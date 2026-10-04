import {ANCHORS, fluid} from './breakpoints';

/**
 * Graphikx space scale: the generous rhythm that makes pages read as one idea
 * per screen. Every value is fluid between the anchor widths in
 * breakpoints.ts, the way the reference studios let space breathe with the
 * screen: 320px (mobile-sm), 390px (mobile), 1440px (desktop), 2560px (wide).
 */
type SpaceSpec = {mobileSm: number; mobile: number; desktop: number; wide: number};

export const spaceScale: Record<string, SpaceSpec> = {
  /** Top and bottom padding of every section. */
  '--space-section': {mobileSm: 72, mobile: 96, desktop: 160, wide: 224},
  /** Between a chapter's title block and its content. */
  '--space-chapter-gap': {mobileSm: 32, mobile: 40, desktop: 96, wide: 128},
  /** Between related blocks inside a section. */
  '--space-block': {mobileSm: 24, mobile: 32, desktop: 48, wide: 64},
  /** Side gutter between content and the edge of the screen. */
  '--space-gutter': {mobileSm: 16, mobile: 20, desktop: 64, wide: 112},
};

export type SpaceTier = 'base' | 'below-xl' | 'below-sm';

/** Theme-local space tokens for one tier ("base" is 1440px and up). */
export function spaceTokens(tier: SpaceTier): Record<string, string> {
  return Object.fromEntries(
    Object.entries(spaceScale).map(([name, spec]) => [
      name,
      tier === 'base'
        ? fluid(spec.desktop, spec.wide, ANCHORS.desktop, ANCHORS.wide)
        : tier === 'below-xl'
          ? fluid(spec.mobile, spec.desktop, ANCHORS.mobile, ANCHORS.desktop)
          : fluid(spec.mobileSm, spec.mobile, ANCHORS.mobileSm, ANCHORS.mobile),
    ]),
  );
}

/**
 * Widest the content column gets. Below this, content fills the screen minus
 * the gutters, so wide screens use their width like the references do.
 */
export const CONTENT_MAX = '2080px';

/** Illustrations scale up on large screens: 1 below 1440px, then 1.2, then 1.45 from 1920px. */
export const ILLUSTRATION_SCALE = {base: '1.45', belowWide: '1.2', belowXl: '1'} as const;
