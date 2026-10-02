import {defineTheme} from '@astryxdesign/core/theme';
import {stoneTheme} from '@astryxdesign/theme-stone';
import {astryxTypeMapping, typeTokens} from './typeScale';

/** Points each Astryx text style's size and line height at its Graphikx type role. */
const mappedTextTokens = Object.fromEntries(
  Object.entries(astryxTypeMapping).flatMap(([astryxType, role]) => [
    [`--text-${astryxType}-size`, `var(--type-${role}-size)`],
    [`--text-${astryxType}-leading`, `var(--type-${role}-leading)`],
  ]),
);

/**
 * The Graphikx theme: Astryx Stone (warm stone and slate, Montserrat headings,
 * Figtree body) with the Graphikx Responsive Typography Scale v1 (see
 * typeScale.ts). Sizes step down at tablet (below 1024px) and mobile (below 768px).
 *
 * After editing, rebuild the CSS with `npm run theme:build`.
 */
export const graphikxTheme = defineTheme({
  name: 'graphikx',
  extends: stoneTheme,
  localTokens: typeTokens('desktop'),
  tokens: mappedTextTokens,
  adaptations: {
    rules: [
      {when: {width: {below: 'lg'}}, value: {localTokens: typeTokens('tablet')}},
      {when: {width: {below: 'md'}}, value: {localTokens: typeTokens('mobile')}},
    ],
  },
});
