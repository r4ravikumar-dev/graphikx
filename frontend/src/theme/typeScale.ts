/**
 * Graphikx — Responsive Typography Scale v1.
 *
 * Desktop base 16px, mobile base 14px. Largest size 56px on desktop, 44px on
 * mobile. Sizes are in px here and emitted as rem so they respect browser
 * font-size settings.
 *
 * Breakpoints follow the Astryx theme widths: tablet is 768–1023px (md–lg),
 * mobile is below 768px (md).
 */

export type TypeRole =
  | 'display-l'
  | 'display-m'
  | 'display-s'
  | 'headline-xl'
  | 'headline-l'
  | 'headline-m'
  | 'headline-s'
  | 'label-l'
  | 'label-m'
  | 'label-s'
  | 'body-l'
  | 'body-m'
  | 'body-s'
  | 'caption-l'
  | 'caption-m'
  | 'caption-s';

type RoleSpec = {desktop: number; tablet: number; mobile: number; lineHeight: number};

/** Line heights by family: display 110%, headline/label 125%, body 135%, small body 140%, caption 150%. */
const LINE_HEIGHT = {display: 1.1, headline: 1.25, label: 1.25, body: 1.35, smallBody: 1.4, caption: 1.5};

export const typeScale: Record<TypeRole, RoleSpec> = {
  'display-l': {desktop: 56, tablet: 50, mobile: 44, lineHeight: LINE_HEIGHT.display},
  'display-m': {desktop: 48, tablet: 44, mobile: 40, lineHeight: LINE_HEIGHT.display},
  'display-s': {desktop: 40, tablet: 36, mobile: 36, lineHeight: LINE_HEIGHT.display},
  'headline-xl': {desktop: 36, tablet: 34, mobile: 32, lineHeight: LINE_HEIGHT.headline},
  'headline-l': {desktop: 32, tablet: 30, mobile: 28, lineHeight: LINE_HEIGHT.headline},
  'headline-m': {desktop: 28, tablet: 26, mobile: 24, lineHeight: LINE_HEIGHT.headline},
  'headline-s': {desktop: 24, tablet: 22, mobile: 20, lineHeight: LINE_HEIGHT.headline},
  'label-l': {desktop: 18, tablet: 17, mobile: 16, lineHeight: LINE_HEIGHT.label},
  'label-m': {desktop: 16, tablet: 15, mobile: 14, lineHeight: LINE_HEIGHT.label},
  'label-s': {desktop: 14, tablet: 14, mobile: 14, lineHeight: LINE_HEIGHT.label},
  'body-l': {desktop: 20, tablet: 18, mobile: 18, lineHeight: LINE_HEIGHT.body},
  'body-m': {desktop: 16, tablet: 16, mobile: 14, lineHeight: LINE_HEIGHT.body},
  'body-s': {desktop: 14, tablet: 14, mobile: 14, lineHeight: LINE_HEIGHT.smallBody},
  'caption-l': {desktop: 14, tablet: 13, mobile: 13, lineHeight: LINE_HEIGHT.caption},
  'caption-m': {desktop: 13, tablet: 12, mobile: 12, lineHeight: LINE_HEIGHT.caption},
  'caption-s': {desktop: 12, tablet: 12, mobile: 12, lineHeight: LINE_HEIGHT.caption},
};

const rem = (px: number) => `${px / 16}rem`;

const sizeVar = (role: TypeRole) => `--type-${role}-size`;
const leadingVar = (role: TypeRole) => `--type-${role}-leading`;

/** Theme-local tokens for one breakpoint, e.g. {'--type-display-l-size': '3.5rem', ...}. */
export function typeTokens(breakpoint: 'desktop' | 'tablet' | 'mobile'): Record<string, string> {
  const tokens: Record<string, string> = {};
  for (const [role, spec] of Object.entries(typeScale) as [TypeRole, RoleSpec][]) {
    tokens[sizeVar(role)] = rem(spec[breakpoint]);
    if (breakpoint === 'desktop') tokens[leadingVar(role)] = String(spec.lineHeight);
  }
  return tokens;
}

/**
 * Inline style for a type role, for headings whose role differs from their
 * element's default (e.g. an <h3> set as Headline L). Values come from the
 * theme, so they follow the breakpoints automatically.
 */
export function typeRole(role: TypeRole) {
  return {fontSize: `var(${sizeVar(role)})`, lineHeight: `var(${leadingVar(role)})`};
}

/**
 * Astryx's built-in text styles, mapped onto the Graphikx scale. Components
 * that use `type="display-1"`, `<Heading level={2}>`, `type="large"` and so
 * on pick up the scale without any extra props.
 */
export const astryxTypeMapping: Record<string, TypeRole> = {
  'display-1': 'display-l',
  'display-2': 'display-m',
  'display-3': 'display-s',
  'heading-1': 'headline-xl',
  'heading-2': 'headline-l',
  'heading-3': 'headline-s',
  'heading-4': 'label-l',
  'heading-5': 'label-m',
  'heading-6': 'label-s',
  large: 'body-l',
  body: 'body-m',
  label: 'label-s',
  supporting: 'caption-m',
  code: 'body-s',
};
