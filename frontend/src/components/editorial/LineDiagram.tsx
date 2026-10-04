'use client';

import {Fragment} from 'react';
import {motion} from 'framer-motion';
import {HStack, VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {springs} from '@/motion/springs';
import {useSequence} from '@/motion/useSequence';

type LineDiagramProps = {
  /** Nodes, in order. */
  nodes: string[];
  /** Accessible description of what the diagram shows. */
  label: string;
};

/**
 * A thin-line diagram: nodes joined by hairlines that draw in one after the
 * other when it scrolls into view, then stay. Wraps to a vertical chain on
 * narrow screens (see .line-diagram in globals.css).
 */
export function LineDiagram({nodes, label}: LineDiagramProps) {
  const {ref, visible} = useSequence(nodes.length, {stepMs: 380});

  return (
    <VStack ref={ref} role="img" aria-label={label} gap={0}>
      <HStack className="line-diagram" gap={0} vAlign="center">
        {nodes.map((node, index) => {
          const isOn = index < visible;
          return (
            <Fragment key={node}>
              {index > 0 && (
                <motion.span
                  aria-hidden
                  className="line-diagram-link"
                  initial={false}
                  animate={{scaleX: isOn ? 1 : 0, scaleY: isOn ? 1 : 0}}
                  transition={springs.spatial.slow}
                />
              )}
              <motion.span
                aria-hidden
                className="line-diagram-node"
                initial={false}
                animate={{opacity: isOn ? 1 : 0.25, scale: isOn ? 1 : 0.92}}
                transition={isOn ? springs.spatial.default : springs.effects.default}
                style={{
                  borderColor: isOn ? 'var(--color-text-primary)' : 'var(--color-border)',
                }}>
                <Text type="label" hasTabularNumbers color="secondary">
                  {String(index + 1).padStart(2, '0')}
                </Text>
                <Text type="large">{node}</Text>
              </motion.span>
            </Fragment>
          );
        })}
      </HStack>
    </VStack>
  );
}
