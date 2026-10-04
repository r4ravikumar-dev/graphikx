'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {MascotDialogue} from '@/components/mascot/MascotDialogue';
import {CtaButton} from '@/components/navigation/CtaButton';
import {IndexLabel} from '@/components/editorial/IndexLabel';
import {confirmation} from '@/content/enquiry';
import {typeRole} from '@/theme/typeScale';

type EnquiryConfirmationProps = {
  onSendAnother: () => void;
};

/** Shown after an enquiry is sent: a human thank-you, the mascot reading it, and where to go next. */
export function EnquiryConfirmation({onSendAnother}: EnquiryConfirmationProps) {
  return (
    <VStack gap={6} hAlign="center" paddingBlock={8} role="status">
      <VStack gap={3} hAlign="center">
        <IndexLabel>{confirmation.eyebrow}</IndexLabel>
        <Heading level={2} style={typeRole('headline-xl')} justify="center">
          {confirmation.title}
        </Heading>
        {confirmation.paragraphs.map(paragraph => (
          <Text key={paragraph} type="large" color="secondary" justify="center">
            {paragraph}
          </Text>
        ))}
      </VStack>
      <MascotDialogue frames={[confirmation.mascotLine]} look={{x: 0.3, y: 0.9}} />
      <HStack gap={3} wrap="wrap" justify="center">
        <CtaButton {...confirmation.action} />
        <CtaButton {...confirmation.secondaryAction} variant="ghost" />
      </HStack>
      <Button label="Send another enquiry" variant="ghost" size="sm" onClick={onSendAnother} />
    </VStack>
  );
}
