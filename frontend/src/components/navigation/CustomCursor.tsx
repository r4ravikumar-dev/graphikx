'use client';

import {useEffect, useState, useSyncExternalStore} from 'react';
import {motion, useMotionValue, useReducedMotion, useSpring} from 'framer-motion';
import {springs} from '@/motion/springs';

/** Only for a real mouse or trackpad; touch screens keep their own behaviour. */
const FINE_POINTER = '(hover: hover) and (pointer: fine)';

function subscribe(onChange: () => void) {
  const query = window.matchMedia(FINE_POINTER);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function useFinePointer() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(FINE_POINTER).matches, () => false);
}

const INTERACTIVE = 'a, button, [role="button"], [role="tab"], summary, label, select, input[type="checkbox"], input[type="radio"]';
const TEXT_FIELD = 'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]), textarea, [contenteditable="true"]';

type Mode = 'default' | 'interactive' | 'text' | 'hidden';

/** A squircle (superellipse) in a 100 × 100 box: softer than a circle, rounder than a square. */
const SQUIRCLE = 'M50 0C88 0 100 12 100 50C100 88 88 100 50 100C12 100 0 88 0 50C0 12 12 0 50 0Z';

/**
 * The Graphikx cursor: one filled squircle that inverts whatever it passes
 * over (white with mix-blend-mode: difference), so it reads on light and
 * dark surfaces alike. It follows the pointer on a quick spring, grows over
 * links and buttons, presses in on click, and steps aside over text fields
 * for the native text cursor. Pointer events pass straight through,
 * keyboard use is untouched, and touch devices never see it.
 */
export function CustomCursor() {
  const isFinePointer = useFinePointer();
  const reduceMotion = useReducedMotion();
  const [mode, setMode] = useState<Mode>('hidden');
  const [isPressed, setIsPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // A quick spring keeps it fluid without lagging; reduced motion follows exactly.
  const springX = useSpring(x, reduceMotion ? {duration: 0} : springs.spatial.fast);
  const springY = useSpring(y, reduceMotion ? {duration: 0} : springs.spatial.fast);

  useEffect(() => {
    if (!isFinePointer) return;
    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    function onMove(event: PointerEvent) {
      if (event.pointerType !== 'mouse') return;
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as Element | null;
      setMode(
        target?.closest(TEXT_FIELD) ? 'text' : target?.closest(INTERACTIVE) ? 'interactive' : 'default',
      );
    }
    const onLeave = () => setMode('hidden');
    const onDown = () => setIsPressed(true);
    const onUp = () => setIsPressed(false);

    window.addEventListener('pointermove', onMove, {passive: true});
    root.addEventListener('pointerleave', onLeave);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    return () => {
      root.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
    };
  }, [isFinePointer, x, y]);

  if (!isFinePointer) return null;

  const isVisible = mode !== 'hidden' && mode !== 'text';
  const scale = !isVisible ? 0.4 : isPressed ? 0.8 : mode === 'interactive' ? 2.4 : 1;

  return (
    <motion.span aria-hidden className="cursor-squircle" style={{x: springX, y: springY}}>
      <motion.svg
        viewBox="0 0 100 100"
        initial={false}
        animate={{scale, opacity: isVisible ? 1 : 0}}
        transition={springs.spatial.fast}>
        <path d={SQUIRCLE} />
      </motion.svg>
    </motion.span>
  );
}
