'use client';

import {useRef, useState, type FormEvent} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
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
import {Link} from '@astryxdesign/core/Link';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import {MotionVStack} from '@/components/motion/Motion';
import {Lines} from '@/components/storytelling/Lines';
import {expressive, springs} from '@/motion/springs';
import {EnquiryError, submitProjectEnquiry} from '@/lib/api';
import {
  NOT_SURE,
  formCopy,
  formSteps,
  humanNudge,
  notSureHelper,
  projectTypes,
  stageOptions,
  timelineOptions,
} from '@/content/enquiry';
import {ChoiceChips} from './ChoiceChips';
import {EnquiryConfirmation} from './EnquiryConfirmation';
import {typeRole} from '@/theme/typeScale';
import {EYEBROW_STYLE} from '@/theme/eyebrow';

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

type FieldErrors = Partial<Record<keyof Fields, string>>;

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

/** Which step each field lives on, so a server error can send people back to it. */
const fieldStep: Record<keyof Fields, number> = {
  name: 0,
  email: 0,
  company: 0,
  message: 1,
  projectType: 1,
  difficulty: 1,
  stage: 2,
  timeline: 2,
  notes: 2,
};

// Native validation is off; the form shows its own accessible messages.
const nativeFormProps = {noValidate: true};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: Fields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.name.trim()) errors.name = 'Tell us what to call you';
  if (!fields.email.trim()) errors.email = 'We need an email to reply';
  else if (!EMAIL_PATTERN.test(fields.email.trim())) errors.email = 'Enter a valid email address';
  if (fields.message.trim().length < 10) errors.message = 'A sentence or two helps us prepare';
  return errors;
}

function errorsOnStep(errors: FieldErrors, step: number) {
  return (Object.keys(errors) as (keyof Fields)[]).filter(key => fieldStep[key] === step);
}

function errorStatus(message?: string) {
  return message ? {type: 'error' as const, message} : undefined;
}

const optional = (value: string) => value.trim() || undefined;

/** The progress rail: three labelled segments that fill in brand blue as you go. */
function StepRail({current}: {current: number}) {
  return (
    <Grid columns={formSteps.length} gap={3} role="list" aria-label="Progress">
      {formSteps.map((step, index) => {
        const isDone = index <= current;
        return (
          <VStack key={step.title} gap={2} role="listitem" aria-current={index === current ? 'step' : undefined}>
            <span aria-hidden style={{display: 'block', blockSize: '2px', backgroundColor: 'var(--color-border)', overflow: 'hidden'}}>
              <motion.span
                initial={false}
                animate={{scaleX: isDone ? 1 : 0}}
                transition={springs.spatial.default}
                style={{display: 'block', blockSize: '100%', backgroundColor: 'var(--color-brand-text)', transformOrigin: 'left'}}
              />
            </span>
            <Text type="supporting" color={isDone ? 'primary' : 'secondary'} style={EYEBROW_STYLE}>
              {String(index + 1).padStart(2, '0')} {step.title}
            </Text>
          </VStack>
        );
      })}
    </Grid>
  );
}

/**
 * The Start a Project enquiry as three short steps (About you, The project,
 * Where you are), adapted from the Astryx "contact-form" template. Each step
 * validates before moving on; server errors send people back to the step
 * that needs attention.
 */
export function ProjectForm() {
  const ref = useRef<HTMLDivElement>(null);
  /** Set when the step changes, so the next step's heading takes focus as it mounts. */
  const shouldFocusHeading = useRef(false);
  const difficultyRef = useRef<HTMLTextAreaElement>(null);
  const [fields, setFields] = useState<Fields>(initialFields);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [checkedSteps, setCheckedSteps] = useState<Set<number>>(new Set());
  const [serverErrors, setServerErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [needsGuidance, setNeedsGuidance] = useState(false);

  // Errors show for steps the visitor has tried to leave, then update live.
  const allErrors: FieldErrors = {...validate(fields), ...serverErrors};
  const errors = Object.fromEntries(
    Object.entries(allErrors).filter(([key]) => checkedSteps.has(fieldStep[key as keyof Fields])),
  ) as FieldErrors;
  const isLastStep = step === formSteps.length - 1;

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

  function goTo(next: number) {
    setDirection(next > step ? 1 : -1);
    setStep(next);
    shouldFocusHeading.current = true;
    // Bring the form's top into view if the visitor has scrolled past it.
    const top = ref.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) ref.current?.scrollIntoView({block: 'start'});
  }

  /** Moves focus to a step's heading when it mounts after a step change. */
  function focusHeading(node: HTMLHeadingElement | null) {
    if (node && shouldFocusHeading.current) {
      shouldFocusHeading.current = false;
      node.focus({preventScroll: true});
    }
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
    setFormError(null);
    setCheckedSteps(previous => new Set([...previous, step]));

    if (!isLastStep) {
      if (errorsOnStep(validate(fields), step).length === 0) goTo(step + 1);
      return;
    }

    const localErrors = validate(fields);
    if (Object.keys(localErrors).length > 0) {
      setCheckedSteps(new Set(formSteps.map((_, index) => index)));
      const firstStep = Math.min(...(Object.keys(localErrors) as (keyof Fields)[]).map(key => fieldStep[key]));
      goTo(firstStep);
      return;
    }

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
        setServerErrors(error.fields as FieldErrors);
        setFormError(error.message);
        setCheckedSteps(new Set(formSteps.map((_, index) => index)));
        const steps = (Object.keys(error.fields) as (keyof Fields)[])
          .map(key => fieldStep[key])
          .filter(value => value !== undefined);
        if (steps.length > 0) goTo(Math.min(...steps));
      } else {
        setFormError('Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  function reset() {
    setFields(initialFields);
    setStep(0);
    setCheckedSteps(new Set());
    setServerErrors({});
    setNeedsGuidance(false);
    setIsSent(false);
  }

  const stepFields = [
    // 01 About you
    <VStack key="about" gap={5}>
      <Grid columns={{minWidth: 240}} gap={4}>
        <TextInput
          label={formCopy.name.label}
          description={formCopy.name.hint}
          value={fields.name}
          onChange={update('name')}
          autoComplete="name"
          htmlName="name"
          isRequired
          status={errorStatus(errors.name)}
        />
        <TextInput
          label={formCopy.email.label}
          description={formCopy.email.hint}
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
        label={formCopy.company.label}
        description={formCopy.company.hint}
        value={fields.company}
        onChange={update('company')}
        autoComplete="organization"
        htmlName="company"
        isOptional
      />
    </VStack>,

    // 02 The project
    <VStack key="project" gap={6}>
      <Text type="large" color="secondary" textWrap="pretty">
        <Lines text={humanNudge} />
      </Text>
      <TextArea
        label={formCopy.message.label}
        description={formCopy.message.hint}
        value={fields.message}
        onChange={update('message')}
        rows={5}
        maxLength={4000}
        htmlName="message"
        isRequired
        status={errorStatus(errors.message)}
      />
      <VStack gap={3}>
        <ChoiceChips
          label={formCopy.helpWith.label}
          hint={formCopy.helpWith.hint}
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
        label={formCopy.difficulty.label}
        description={formCopy.difficulty.hint}
        value={fields.difficulty}
        onChange={update('difficulty')}
        rows={4}
        maxLength={4000}
        htmlName="difficulty"
        isOptional
      />
    </VStack>,

    // 03 Where you are
    <VStack key="where" gap={6}>
      <ChoiceChips
        label={formCopy.stage.label}
        options={stageOptions}
        value={fields.stage}
        onChange={update('stage')}
      />
      <Selector
        label={formCopy.timeline.label}
        placeholder="Choose one"
        options={timelineOptions}
        value={fields.timeline}
        onChange={update('timeline')}
        isOptional
      />
      <TextArea
        label={formCopy.notes.label}
        value={fields.notes}
        onChange={update('notes')}
        rows={3}
        maxLength={4000}
        htmlName="notes"
        isOptional
      />
    </VStack>,
  ];

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
            <EnquiryConfirmation onSendAnother={reset} />
          </MotionVStack>
        ) : (
          <MotionVStack
            key="form"
            as="form"
            {...nativeFormProps}
            onSubmit={handleSubmit}
            gap={8}
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -16}}
            transition={expressive('default')}>
            <StepRail current={step} />

            {formError && <Banner status="error" title={formError} />}

            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <MotionVStack
                key={step}
                gap={6}
                custom={direction}
                initial={{opacity: 0, x: 32 * direction}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -32 * direction, transition: springs.effects.fast}}
                transition={expressive('default')}>
                <VStack gap={1}>
                  <Heading
                    ref={focusHeading}
                    level={3}
                    tabIndex={-1}
                    style={{...typeRole('headline-l'), outline: 'none'}}>
                    {formSteps[step].title}
                  </Heading>
                  <Text color="secondary">{formSteps[step].description}</Text>
                </VStack>
                {stepFields[step]}
              </MotionVStack>
            </AnimatePresence>

            <VStack gap={4} style={{borderBlockStart: '1px solid var(--color-border)', paddingBlockStart: 'var(--spacing-6)'}}>
              <HStack gap={3} justify="between" vAlign="center" wrap="wrap">
                {step > 0 ? (
                  <Button
                    label={formCopy.back}
                    variant="ghost"
                    size="lg"
                    onClick={() => goTo(step - 1)}
                    icon={<Icon icon={ArrowLeft} size="sm" color="inherit" />}
                  />
                ) : (
                  <Text type="supporting" color="secondary" style={EYEBROW_STYLE}>
                    Step 1 of {formSteps.length}
                  </Text>
                )}
                <Button
                  label={isLastStep ? formCopy.submit : formCopy.next}
                  variant="primary"
                  size="lg"
                  type="submit"
                  isLoading={isSubmitting}
                  endContent={<Icon icon={ArrowRight} size="sm" color="inherit" />}
                />
              </HStack>
              {isLastStep && (
                <Text type="supporting" color="secondary">
                  {formCopy.microcopy} {formCopy.privacy}{' '}
                  <Link href={formCopy.privacyLink.href} type="supporting">
                    {formCopy.privacyLink.label}
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
