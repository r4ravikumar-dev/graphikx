# Graphikx — Frontend

The Graphikx website, built with Next.js (App Router), the [Astryx](https://astryx.atmeta.com) design system with the Stone theme, and Framer Motion.

See the [root README](../README.md) for setup, structure, and conventions.

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Astryx

Astryx components come pre-built (`@astryxdesign/core`), so no StyleX compiler is needed. Use component props first, then `style` with Astryx tokens (`var(--color-*)`, `var(--spacing-*)`, `var(--radius-*)`). `xstyle` needs a StyleX compiler, so don't use it here.

The Astryx CLI is the reference for components, templates, and tokens:

```bash
npx astryx search "<thing>"
npx astryx component <Name>
npx astryx template --list
```

## Motion

Motion uses Material Design 3 Expressive springs, defined in `src/motion/springs.ts`:

- `springs.spatial.*` (fast / default / slow) move things. They overshoot slightly, then settle.
- `springs.effects.*` change opacity or colour. They never bounce.
- `expressive(speed, delay)` pairs a spatial spring with an effects spring for opacity.

`MotionConfig reducedMotion="user"` in `src/app/providers.tsx` swaps motion for instant changes when the OS asks for reduced motion.
