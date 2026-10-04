import {defineTheme} from '@astryxdesign/core/theme';
import {stoneTheme} from '@astryxdesign/theme-stone';
import {astryxTypeMapping, typeTokens} from './typeScale';
import {CONTENT_MAX, ILLUSTRATION_SCALE, spaceTokens} from './spaceScale';
import {BREAKPOINTS} from './breakpoints';

/** Points each Astryx text style's size and line height at its Graphikx type role. */
const mappedTextTokens = Object.fromEntries(
  Object.entries(astryxTypeMapping).flatMap(([astryxType, role]) => [
    [`--text-${astryxType}-size`, `var(--type-${role}-size)`],
    [`--text-${astryxType}-leading`, `var(--type-${role}-leading)`],
  ]),
);

const SYSTEM_SANS = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
/** Headings, body and interface text. */
const BODY_FONT = `"IBM Plex Sans", ${SYSTEM_SANS}`;
/** Eyebrows, index numbers and code. */
const EYEBROW_FONT = '"IBM Plex Mono", "SF Mono", Menlo, Consolas, monospace';

/**
 * The Graphikx theme: Astryx Stone (warm stone and slate) with IBM Plex Sans
 * for headings and body text, IBM Plex Mono for eyebrows, and:
 * - the Graphikx type scale (v1 plus the v2 expressive tier, typeScale.ts)
 * - the Graphikx space scale (spaceScale.ts)
 * - the brand blue from the logo, used sparingly: the primary action and
 *   accent keywords only
 * - an italic serif (Instrument Serif) for single accent words
 *
 * Responds across six tiers (breakpoints.ts): display type, gutters and
 * spacing are fluid; body text steps at 768px and 1024px.
 * After editing, rebuild the CSS with `npm run theme:build`.
 */
export const graphikxTheme = defineTheme({
  name: 'graphikx',
  extends: stoneTheme,
  localTokens: {
    ...typeTokens('base'),
    ...spaceTokens('base'),
    '--content-max': CONTENT_MAX,
    '--illustration-scale': ILLUSTRATION_SCALE.base,
    // Brand blue from the logo. Fill stays the same in both modes (white text on
    // it passes contrast); keyword text uses a lighter blue in dark mode.
    '--color-brand': '#2059DF',
    '--color-on-brand': '#FFFFFF',
    '--color-brand-text': ['#2059DF', '#8EAEFF'],
    '--font-family-accent': '"Instrument Serif", Georgia, "Times New Roman", serif',
    '--font-family-eyebrow': EYEBROW_FONT,
  },
  tokens: {
    ...mappedTextTokens,
    '--font-family-body': BODY_FONT,
    '--font-family-heading': BODY_FONT,
    '--font-family-code': EYEBROW_FONT,
  },
  components: {
    button: {
      'variant:primary': {
        backgroundColor: 'var(--color-brand)',
        color: 'var(--color-on-brand)',
      },
    },
  },
  adaptations: {
    widthBreakpoints: BREAKPOINTS,
    // Later rules win, so each narrower tier refines the one above it.
    rules: [
      // desktop-lg (1440–1919): visuals a little smaller than on wide screens.
      {
        when: {width: {below: '2xl'}},
        value: {localTokens: {'--illustration-scale': ILLUSTRATION_SCALE.belowWide}},
      },
      // desktop-sm and below: fluid from the mobile to the desktop sizes.
      {
        when: {width: {below: 'xl'}},
        value: {
          localTokens: {
            ...typeTokens('below-xl'),
            ...spaceTokens('below-xl'),
            '--illustration-scale': ILLUSTRATION_SCALE.belowXl,
          },
        },
      },
      // tablet: body text steps down.
      {when: {width: {below: 'lg'}}, value: {localTokens: typeTokens('below-lg')}},
      // mobile-lg: body text steps down again.
      {when: {width: {below: 'md'}}, value: {localTokens: typeTokens('below-md')}},
      // mobile-sm: display type and spacing ease down so everything fits 320px.
      {
        when: {width: {below: 'sm'}},
        value: {localTokens: {...typeTokens('below-sm'), ...spaceTokens('below-sm')}},
      },
    ],
  },
});
