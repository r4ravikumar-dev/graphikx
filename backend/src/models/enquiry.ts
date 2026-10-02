import {z} from 'zod';

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .transform(value => (value === '' ? undefined : value))
    .optional();

export const projectEnquirySchema = z.object({
  name: z.string().trim().min(1, 'Tell us your name').max(120),
  email: z.email('Enter a valid email address').max(254),
  company: optionalText(160),
  /** What they'd like help with, e.g. "UX Design" or "Not sure yet". */
  projectType: optionalText(80),
  /** Where they are right now, e.g. "Early exploration". */
  stage: optionalText(80),
  timeline: optionalText(80),
  message: z
    .string()
    .trim()
    .min(10, 'A sentence or two helps us prepare')
    .max(4000, 'Please keep it under 4000 characters'),
  /** What feels difficult right now. */
  difficulty: optionalText(4000),
  notes: optionalText(4000),
});

export type ProjectEnquiry = z.infer<typeof projectEnquirySchema>;
