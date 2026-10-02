'use client';

import {useRef, useState, type FormEvent} from 'react';
import {AnimatePresence} from 'framer-motion';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Heading';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';
import {TextInput} from '@astryxdesign/core/TextInput';
import {TextArea} from '@astryxdesign/core/TextArea';
import {Selector} from '@astryxdesign/core/Selector';
import {Banner} from '@astryxdesign/core/Banner';
import {Card} from '@astryxdesign/core/Card';
import {Divider} from '@astryxdesign/core/Divider';
import {Link} from '@astryxdesign/core/Link';
import {ArrowRight} from 'lucide-react';
import {MotionVStack} from '@/components/motion/Motion';
import {Eyebrow} from '@/components/storytelling/Eyebrow';
import {Lines} from '@/components/storytelling/Lines';
import {expressive} from '@/motion/springs';
import {EnquiryError, submitProjectEnquiry} from '@/lib/api';
import {
  NOT_SURE,
  beforeSubmitting,
  formCopy,
  humanNudge,
  notSureHelper,
  projectTypes,
  stageOptions,
  timelineOptions,
} from '@/content/enquiry';
import {ChoiceChips} from './ChoiceChips';
import {EnquiryConfirmation} from './EnquiryConfirmation';
import {EMPHASIS} from '@/theme/emphasis';
import {typeRole} from '@/theme/typeScale';

type Fields = {
  name: string;
  email: string;
  company: string;
  message: string;
  projectType: string;
  difficulty: string;
  stage: string;
  timeline: string;
  notes: string;
};

const initialFields: Fields = {
  name: '',
  email: '',
  company: '',
  message: '',
  projectType: '',
  difficulty: '',
  stage: '',
  timeline: '',
  notes: '',
};

// Native validation is off; the form shows its own accessible messages.
const nativeFormProps = {noValidate: true};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: Fields): Partial<Record<keyof Fields, string>> {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!fields.name.trim()) errors.name = 'Tell us what to call you';
  if (!fields.email.trim()) errors.email = 'We need an email to reply';
  else if (!EMAIL_PATTERN.test(fields.email.trim())) errors.email = 'Enter a valid email address';
  if (fields.message.trim().length < 10) errors.message = 'A sentence or two helps us prepare';
  return errors;
}

function errorStatus(message?: string) {
  return message ? {type: 'error' as const, message} : undefined;
}

const optional = (value: string) => value.trim() || undefined;

type ProjectFormProps = {
  /**
   * "short" asks only what is needed to start a conversation (homepage).
   * "full" is the Start a Project form: what they need help with, where they
   * are, what feels difficult, plus a couple of reassuring interruptions.
   */
  variant?: 'short' | 'full';
};

/**
 * Project enquiry form, adapted from the Astryx "contact-form" template.
 * Validates on submit, then live as fields are corrected.
 */
export function ProjectForm({variant = 'short'}: ProjectFormProps) {
  const ref = useRef<HTMLDivElement>(null);
  const difficultyRef = useRef<HTMLTextAreaElement>(null);
  const [fields, setFields] = useState<Fields>(initialFields);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [serverErrors, setServerErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [needsGuidance, setNeedsGuidance] = useState(false);

  const isFull = variant === 'full';
  const copy = isFull ? formCopy.full : formCopy.short;
  const errors = hasSubmitted ? {...validate(fields), ...serverErrors} : {};

  function update<K extends keyof Fields>(key: K) {
    return (value: Fields[K]) => {
      setFields(previous => ({...previous, [key]: value}));
      setServerErrors(previous => {
        const next = {...previous};
        delete next[key];
        return next;
      });
    };
  }

  function chooseHelp(value: string) {
    update('projectType')(value);
    setNeedsGuidance(value === NOT_SURE);
  }

  function helpMeFigureItOut() {
    setNeedsGuidance(true);
    update('projectType')(NOT_SURE);
    difficultyRef.current?.focus({preventScroll: true});
    difficultyRef.current?.scrollIntoView({block: 'center'});
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (isSubmitting) return;
    setHasSubmitted(true);
    setFormError(null);
    if (Object.keys(validate(fields)).length > 0) return;

    setIsSubmitting(true);
    try {
      await submitProjectEnquiry({
        name: fields.name.trim(),
        email: fields.email.trim(),
        company: optional(fields.company),
        message: fields.message.trim(),
        projectType: optional(fields.projectType),
        difficulty: optional(fields.difficulty),
        stage: optional(fields.stage),
        timeline: optional(fields.timeline),
        notes: optional(fields.notes),
      });
      setIsSent(true);
      // The confirmation is shorter than the form, so bring its top into view.
      ref.current?.scrollIntoView({block: 'start'});
    } catch (error) {
      if (error instanceof EnquiryError) {
        setServerErrors(error.fields);
        setFormError(error.message);
      } else {
        setFormError('Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  function reset() {
    setFields(initialFields);
    setHasSubmitted(false);
    setServerErrors({});
    setNeedsGuidance(false);
    setIsSent(false);
  }

  const timelineField = (
    <Selector
      label={copy.timeline.label}
      description={copy.timeline.hint || undefined}
      placeholder="Choose one"
      options={timelineOptions}
      value={fields.timeline}
      onChange={update('timeline')}
      isOptional={!isFull}
    />
  );

  return (
    <VStack ref={ref}>
      <AnimatePresence mode="wait" initial={false}>
        {isSent ? (
          <MotionVStack
            key="sent"
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.9}}
            transition={expressive('default')}>
            <EnquiryConfirmation hasBackLink={isFull} onSendAnother={reset} />
          </MotionVStack>
        ) : (
          <MotionVStack
            key="form"
            as="form"
            {...nativeFormProps}
            onSubmit={handleSubmit}
            gap={6}
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -16}}
            transition={expressive('default')}>
            {formError && <Banner status="error" title={formError} />}

            <VStack gap={5}>
              <Grid columns={{minWidth: 240}} gap={4}>
                <TextInput
                  label={copy.name.label}
                  description={copy.name.hint}
                  value={fields.name}
                  onChange={update('name')}
                  autoComplete="name"
                  htmlName="name"
                  isRequired
                  status={errorStatus(errors.name)}
                />
                <TextInput
                  label={copy.email.label}
                  description={copy.email.hint}
                  type="email"
                  placeholder="you@company.com"
                  value={fields.email}
                  onChange={update('email')}
                  autoComplete="email"
                  htmlName="email"
                  isRequired
                  status={errorStatus(errors.email)}
                />
              </Grid>

              <TextInput
                label={copy.company.label}
                description={copy.company.hint}
                value={fields.company}
                onChange={update('company')}
                autoComplete="organization"
                htmlName="company"
                isOptional
              />

              <TextArea
                label={copy.message.label}
                description={copy.message.hint}
                value={fields.message}
                onChange={update('message')}
                rows={5}
                maxLength={4000}
                htmlName="message"
                isRequired
                status={errorStatus(errors.message)}
              />
            </VStack>

            {isFull ? (
              <>
                {/* Human nudge: a visual interruption between fields. */}
                <Card variant={EMPHASIS} padding={5}>
                  <VStack gap={2}>
                    <Heading level={3}>{humanNudge.title}</Heading>
                    <Text color="secondary" textWrap="pretty">
                      <Lines text={humanNudge.description} />
                    </Text>
                    <Text type="supporting">{humanNudge.microcopy}</Text>
                  </VStack>
                </Card>

                <VStack gap={3}>
                  <ChoiceChips
                    label={formCopy.full.helpWith.label}
                    hint={formCopy.full.helpWith.hint}
                    options={projectTypes}
                    value={fields.projectType}
                    onChange={chooseHelp}
                  />
                  {needsGuidance ? (
                    <Banner status="info" title={<Lines text={notSureHelper.selected} />} />
                  ) : (
                    <HStack gap={2} vAlign="center" wrap="wrap">
                      <Text type="supporting">
                        <Text type="supporting" weight="semibold" color="primary">
                          {notSureHelper.title}
                        </Text>{' '}
                        {notSureHelper.description}
                      </Text>
                      <Button
                        label={notSureHelper.action}
                        variant="ghost"
                        size="sm"
                        onClick={helpMeFigureItOut}
                        endContent={<Icon icon={ArrowRight} size="sm" color="inherit" />}
                      />
                    </HStack>
                  )}
                </VStack>

                <TextArea
                  ref={difficultyRef}
                  label={formCopy.full.difficulty.label}
                  description={formCopy.full.difficulty.hint}
                  value={fields.difficulty}
                  onChange={update('difficulty')}
                  rows={4}
                  maxLength={4000}
                  htmlName="difficulty"
                />

                <ChoiceChips
                  label={formCopy.full.stage.label}
                  options={stageOptions}
                  value={fields.stage}
                  onChange={update('stage')}
                />

                {timelineField}

                <TextArea
                  label={formCopy.full.notes.label}
                  value={fields.notes}
                  onChange={update('notes')}
                  rows={3}
                  maxLength={4000}
                  htmlName="notes"
                  isOptional
                />

                <Divider />

                {/* Before submitting: lower the stakes of pressing send. */}
                <VStack gap={2}>
                  <Eyebrow>{beforeSubmitting.eyebrow}</Eyebrow>
                  <Heading level={3} style={typeRole('headline-l')}>
                    {beforeSubmitting.title}
                  </Heading>
                  {beforeSubmitting.paragraphs.map(paragraph => (
                    <Text key={paragraph} color="secondary" as="p" textWrap="pretty">
                      {paragraph}
                    </Text>
                  ))}
                  <Text type="supporting">{beforeSubmitting.microcopy}</Text>
                </VStack>
              </>
            ) : (
              timelineField
            )}

            <VStack gap={2}>
              <Button
                label={formCopy.submit}
                variant="primary"
                size="lg"
                type="submit"
                isLoading={isSubmitting}
                endContent={<Icon icon={ArrowRight} size="sm" color="inherit" />}
              />
              <Text type="supporting" justify="center">
                {copy.microcopy}
              </Text>
              {isFull && (
                <Text type="supporting" justify="center" color="secondary">
                  {formCopy.full.privacy}{' '}
                  <Link href={formCopy.full.privacyLink.href} type="supporting">
                    {formCopy.full.privacyLink.label}
                  </Link>
                </Text>
              )}
            </VStack>
          </MotionVStack>
        )}
      </AnimatePresence>
    </VStack>
  );
}
