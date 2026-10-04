import nodemailer, {type Transporter} from 'nodemailer';
import type {Env} from '../config/env.js';
import {HttpError} from '../middleware/errors.js';

export type EmailAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
  /** Referenced from the HTML as src="cid:…". */
  cid: string;
};

export type EmailMessage = {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
  attachments?: EmailAttachment[];
};

/** The message without its HTML and images, for logs. */
const forLog = ({to, subject, replyTo, text}: EmailMessage) => ({to, subject, replyTo, text});

export type EmailService = {
  send(message: EmailMessage): Promise<void>;
};

/**
 * Sends email over SMTP when EMAIL_HOST is configured. Without it, local
 * development logs messages to the console; production refuses with a 503 so
 * an enquiry is never reported as sent when it wasn't (the message is still
 * logged, so it can be recovered).
 */
export function createEmailService(env: Env): EmailService {
  if (!env.EMAIL_HOST) {
    return {
      async send(message) {
        if (env.NODE_ENV === 'production') {
          console.error('[email] EMAIL_HOST not set in production; message not sent:\n', forLog(message));
          throw new HttpError(
            503,
            `We couldn't send your enquiry just now. Please email us at ${message.to} instead.`,
          );
        }
        console.info('[email] EMAIL_HOST not set; logging instead of sending:\n', forLog(message));
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
      try {
        await transporter.sendMail({from: env.EMAIL_FROM ?? env.EMAIL_USER, ...message});
      } catch (error) {
        console.error('[email] SMTP send failed:', error);
        throw new HttpError(
          502,
          `We couldn't send your enquiry just now. Please try again, or email us at ${message.to}.`,
        );
      }
    },
  };
}
