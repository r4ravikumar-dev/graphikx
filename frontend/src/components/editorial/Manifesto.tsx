'use client';

import {useRef} from 'react';
import {motion, useReducedMotion, useScroll, useTransform, type MotionValue} from 'framer-motion';
import {Heading} from '@astryxdesign/core/Heading';
import {typeRole} from '@/theme/typeScale';
import {accentStyle} from '@/components/storytelling/Lines';

type ManifestoProps = {
  /** "*word*" marks a keyword: the italic serif accent, in brand blue once lit. "\n" breaks a line. */
  text: string;
  level?: 2 | 3;
};

type Token = {word: string; isKeyword: boolean; position: number} | {lineBreak: true};

/** Splits text into words (with their position among all words) and line breaks. */
/** Keywords: the italic serif accent used across the site, in brand blue once lit. */
const keywordStyle = {...accentStyle, color: 'var(--color-brand-text)'} as const;

function tokenize(text: string): Token[] {
  let position = 0;
  return text.split('\n').flatMap((line, lineIndex) => {
    const words: Token[] = line
      .split(/\s+/)
      .filter(Boolean)
      .map(raw => {
        const isKeyword = /^\*.+\*[.,!?]?$/.test(raw);
        return {word: isKeyword ? raw.replace(/\*/g, '') : raw, isKeyword, position: position++};
      });
    return lineIndex === 0 ? words : [{lineBreak: true}, ...words];
  });
}

function Word({
  word,
  isKeyword,
  progress,
  range,
}: {
  word: string;
  isKeyword: boolean;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span
      style={{
        opacity,
        ...(isKeyword ? keywordStyle : undefined),
      }}>
      {word}{' '}
    </motion.span>
  );
}

/**
 * A large paragraph whose words light up one by one as it scrolls through the
 * viewport, so the reader's pace sets the rhythm. Nothing plays on its own.
 * Screen readers and reduced-motion users get the plain, fully lit text.
 */
export function Manifesto({text, level = 2}: ManifestoProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduceMotion = useReducedMotion();
  const {scrollYProgress} = useScroll({target: ref, offset: ['start 85%', 'end 45%']});
  const tokens = tokenize(text);
  const wordCount = tokens.filter(token => !('lineBreak' in token)).length;

  return (
    <Heading
      ref={ref}
      level={level}
      textWrap="pretty"
      style={{...typeRole('display-m'), letterSpacing: '-0.02em', maxInlineSize: '24ch'}}>
      {tokens.map((token, index) => {
        if ('lineBreak' in token) return <br key={`br-${index}`} />;
        const start = token.position / wordCount;
        if (reduceMotion) {
          return (
            <span
              key={index}
              style={token.isKeyword ? keywordStyle : undefined}>
              {token.word}{' '}
            </span>
          );
        }
        return (
          <Word
            key={index}
            word={token.word}
            isKeyword={token.isKeyword}
            progress={scrollYProgress}
            range={[start, Math.min(1, start + 1.5 / wordCount)]}
          />
        );
      })}
    </Heading>
  );
}
