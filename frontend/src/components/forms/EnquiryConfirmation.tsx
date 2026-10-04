'use client';

import {useEffect, useRef} from 'react';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';
import {RotateCcw} from 'lucide-react';
import {IndexLabel} from '@/components/editorial/IndexLabel';
import {PaperPlane} from '@/components/illustrations/scenes';
import {confirmation} from '@/content/enquiry';
import {typeRole} from '@/theme/typeScale';

type EnquiryConfirmationProps = {
  onSendAnother: () => void;
};

/**
 * Shown after an enquiry is sent: the paper plane on its way, a human
 * thank-you, and one action, which opens a fresh form. Focus moves to the
 * heading so screen-reader and keyboard users land on the confirmation.
 */
export function EnquiryConfirmation({onSendAnother}: EnquiryConfirmationProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus({preventScroll: true});
  }, []);

  return (
    <VStack gap={8} hAlign="center" paddingBlock={6} role="status">
      <PaperPlane maxWidth={260} />
      <VStack gap={3} hAlign="center">
        <IndexLabel>{confirmation.eyebrow}</IndexLabel>
        <Heading
          ref={headingRef}
          tabIndex={-1}
          level={2}
          justify="center"
          style={{...typeRole('headline-xl'), outline: 'none'}}>
          {confirmation.title}
        </Heading>
        {confirmation.paragraphs.map(paragraph => (
          <Text key={paragraph} type="large" color="secondary" justify="center">
            {paragraph}
          </Text>
        ))}
      </VStack>
      <HStack justify="center">
        <Button
          label={confirmation.sendAnother}
          variant="primary"
          size="lg"
          onClick={onSendAnother}
          icon={<Icon icon={RotateCcw} size="sm" color="inherit" />}
        />
      </HStack>
    </VStack>
  );
}
