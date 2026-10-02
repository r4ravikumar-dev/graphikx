import nodemailer, {type Transporter} from 'nodemailer';
import type {Env} from '../config/env.js';

export type EmailMessage = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

export type EmailService = {
  send(message: EmailMessage): Promise<void>;
};

/**
 * Sends email over SMTP when EMAIL_HOST is configured. Without it, messages are
 * logged to the console so local development works with no email provider.
 */
export function createEmailService(env: Env): EmailService {
  if (!env.EMAIL_HOST) {
    return {
      async send(message) {
        console.info('[email] EMAIL_HOST not set; logging instead of sending:\n', message);
      },
    };
  }

  const transporter: Transporter = nodemailer.createTransport({
    host: env.EMAIL_HOST,
    port: env.EMAIL_PORT,
    secure: env.EMAIL_PORT === 465,
    auth: env.EMAIL_USER ? {user: env.EMAIL_USER, pass: env.EMAIL_PASSWORD} : undefined,
  });

  return {
    async send(message) {
      await transporter.sendMail({from: env.EMAIL_FROM ?? env.EMAIL_USER, ...message});
    },
  };
}
