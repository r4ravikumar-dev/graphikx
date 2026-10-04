'use client';

import {useCallback, useEffect, useRef, useState} from 'react';
import {usePathname} from 'next/navigation';
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';
import {VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {VisuallyHidden} from '@astryxdesign/core/VisuallyHidden';
import {EYEBROW_STYLE} from '@/theme/eyebrow';

/** How long the loader plays on every page change. */
const DURATION_MS = 1400;
/** If a page never arrives (failed navigation), give the screen back anyway. */
const SAFETY_MS = 8000;

/** A few fixed "stars" so the field looks the same on server and client. */
const STARS = [
  [-82, -60], [-64, 48], [-40, -86], [-12, 74], [18, -70], [44, 62],
  [70, -38], [86, 20], [-88, 8], [58, 84], [-58, -20], [30, 30],
] as const;

/** The universe: rings of the site's shapes revolving around one point. */
function Orbits() {
  return (
    <svg className="loader-orbits" viewBox="-100 -100 200 200" aria-hidden>
      {STARS.map(([x, y], index) => (
        <circle
          key={`${x},${y}`}
          className="loader-star"
          cx={x}
          cy={y}
          r={0.9}
          style={{animationDelay: `${-(index % 4) * 0.6}s`}}
        />
      ))}
      {[30, 52, 76].map((r, index) => (
        <circle
          key={r}
          className="loader-ring"
          r={r}
          strokeDasharray={index === 1 ? '1.5 5' : undefined}
        />
      ))}
      {/* Slow, linear drift like the illustration loops (14s, 20s, 28s a lap),
          each planet starting at a different angle so they never line up. */}
      <g className="loader-orbit" style={{animationDuration: '14s', animationDelay: '-3s'}}>
        <circle cx={0} cy={-30} r={3.5} className="loader-planet" />
      </g>
      <g className="loader-orbit" style={{animationDuration: '20s', animationDelay: '-12s', animationDirection: 'reverse'}}>
        <rect x={-3.5} y={-55.5} width={7} height={7} className="loader-planet is-outline" />
      </g>
      <g className="loader-orbit" style={{animationDuration: '28s', animationDelay: '-19s'}}>
        <path d="M0 -81 l4.5 7.5 h-9 Z" className="loader-planet is-outline" />
      </g>
      <circle r={9} className="loader-core-halo" />
      <circle r={6} className="loader-core" />
    </svg>
  );
}

/**
 * The page-change loader. It starts the moment an internal link to another
 * page is followed (or Back/Forward changes the page), plays for 1.4s, and
 * stays until the new page has arrived. Hash links, new tabs and modified
 * clicks are ignored; reduced-motion visitors skip it entirely.
 */
export function PageTransition() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const startedAt = useRef<number | null>(null);
  const hasArrived = useRef(false);
  const timers = useRef<number[]>([]);
  const previousPath = useRef(pathname);

  const clearTimers = () => {
    timers.current.forEach(id => window.clearTimeout(id));
    timers.current = [];
  };

  /** Hides the loader once it has played for 1.4s and the new page is in. */
  const hideWhenReady = useCallback(() => {
    if (startedAt.current === null || !hasArrived.current) return;
    const remaining = DURATION_MS - (performance.now() - startedAt.current);
    timers.current.push(
      window.setTimeout(() => {
        startedAt.current = null;
        setIsVisible(false);
      }, Math.max(0, remaining)),
    );
  }, []);

  const start = useCallback(() => {
    if (reduceMotion) return;
    clearTimers();
    startedAt.current = performance.now();
    hasArrived.current = false;
    setIsVisible(true);
    timers.current.push(
      window.setTimeout(() => {
        startedAt.current = null;
        setIsVisible(false);
      }, SAFETY_MS),
    );
  }, [reduceMotion]);

  // Start on clicks that will change the page. Capture phase, because
  // Next.js links prevent the default before a bubbling listener would run.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest('a');
      if (!anchor || anchor.hasAttribute('download')) return;
      if (anchor.target && anchor.target !== '_self') return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      start();
    }
    function onPopState() {
      if (window.location.pathname !== previousPath.current) start();
    }
    document.addEventListener('click', onClick, true);
    window.addEventListener('popstate', onPopState);
    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('popstate', onPopState);
      clearTimers();
    };
  }, [start]);

  // The new page has arrived: hide once the full 1.4s has played.
  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    hasArrived.current = true;
    hideWhenReady();
  }, [pathname, hideWhenReady]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="page-transition"
          className="page-transition"
          role="status"
          aria-live="polite"
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {duration: 0.2, ease: [0.2, 0, 0, 1]}}}
          exit={{opacity: 0, transition: {duration: 0.3, ease: [0.4, 0, 1, 1]}}}>
          <VisuallyHidden>Loading page</VisuallyHidden>
          <VStack gap={6} hAlign="center">
            <Orbits />
            <Text type="supporting" color="secondary" style={EYEBROW_STYLE}>
              Making sense of it
            </Text>
          </VStack>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
