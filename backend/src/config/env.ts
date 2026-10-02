import {z} from 'zod';

const optional = z
  .string()
  .trim()
  .transform(value => (value === '' ? undefined : value))
  .optional();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(4000),
  CORS_ORIGIN: z
    .string()
    .default('http://localhost:3000')
    .transform(value =>
      value
        .split(',')
        .map(origin => origin.trim())
        .filter(Boolean),
    ),
  DATABASE_URL: optional,
  EMAIL_HOST: optional,
  EMAIL_PORT: z.coerce.number().int().positive().default(587),
  EMAIL_USER: optional,
  EMAIL_PASSWORD: optional,
  EMAIL_FROM: optional,
  ENQUIRY_NOTIFY_TO: optional,
});

export type Env = z.infer<typeof envSchema>;

export function loadEnv(source: NodeJS.ProcessEnv = process.env): Env {
  const result = envSchema.safeParse(source);
  if (!result.success) {
    const problems = result.error.issues
      .map(issue => `  ${issue.path.join('.')}: ${issue.message}`)
      .join('\n');
    throw new Error(`Invalid environment configuration:\n${problems}`);
  }
  return result.data;
}
