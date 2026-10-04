import {afterAll, beforeAll, describe, expect, it, vi} from 'vitest';
import request from 'supertest';
import {SMTPServer} from 'smtp-server';
import {simpleParser, type ParsedMail} from 'mailparser';
import type {AddressInfo} from 'node:net';
import {createApp} from '../src/app.js';
import {DEFAULT_ENQUIRY_INBOX, loadEnv} from '../src/config/env.js';
import {replyHref} from '../src/emails/enquiryEmail.js';

const enquiry = {
  name: 'Jane <Doe>',
  email: 'jane@example.com',
  company: 'Example',
  projectType: 'Product Design',
  timeline: 'Next month',
  message: 'We are redesigning an existing product.',
  difficulty: 'Onboarding takes too long.',
};

/** A local SMTP server that keeps every message it receives. */
type Received = {to: string[]; mail: ParsedMail};
const received: Received[] = [];
let smtp: SMTPServer;
let port: number;

beforeAll(async () => {
  smtp = new SMTPServer({
    authOptional: true,
    disabledCommands: ['STARTTLS'],
    onData(stream, session, callback) {
      simpleParser(stream)
        .then(mail => {
          received.push({to: session.envelope.rcptTo.map(r => r.address), mail});
          callback();
        })
        .catch(callback);
    },
  });
  await new Promise<void>(resolve => smtp.listen(0, '127.0.0.1', resolve));
  port = (smtp.server.address() as AddressInfo).port;
});

afterAll(() => new Promise<void>(resolve => smtp.close(() => resolve())));

describe('reply button', () => {
  it('opens a reply to the visitor with an enquiry-specific subject', () => {
    const url = new URL(replyHref(enquiry));
    expect(url.protocol).toBe('mailto:');
    expect(url.pathname).toBe('jane@example.com');
    expect(url.searchParams.get('subject')).toBe(
      'Re: Your Graphikx enquiry about Product Design for Example',
    );
    expect(url.searchParams.get('body')).toMatch(/^Hi Jane,/);
  });

  it('falls back to a general subject without a service or company', () => {
    const url = new URL(replyHref({...enquiry, projectType: undefined, company: undefined}));
    expect(url.searchParams.get('subject')).toBe('Re: Your Graphikx enquiry about your project');
  });
});

describe('enquiry email over SMTP', () => {
  it('delivers the enquiry to design@graphikx.in by default', async () => {
    received.length = 0;
    const env = loadEnv({
      NODE_ENV: 'test',
      EMAIL_HOST: '127.0.0.1',
      EMAIL_PORT: String(port),
      EMAIL_FROM: 'Graphikx Website <website@graphikx.in>',
    });
    expect(env.ENQUIRY_NOTIFY_TO).toBe(DEFAULT_ENQUIRY_INBOX);

    const res = await request(createApp({env})).post('/api/projects/enquiry').send(enquiry);
    expect(res.status).toBe(201);

    expect(received).toHaveLength(1);
    const [{to, mail}] = received as [Received];
    expect(to).toEqual(['design@graphikx.in']);
    expect(mail.subject).toBe('New project enquiry from Jane <Doe> (Product Design)');
    expect(mail.replyTo?.text).toBe('jane@example.com');
    expect(mail.from?.text).toContain('website@graphikx.in');
    expect(mail.text).toContain('Timeline: Next month');
    expect(mail.text).toContain('Onboarding takes too long.');
    // The HTML part carries the same content, with user input escaped.
    expect(mail.html).toContain('Jane &lt;Doe&gt;');
    expect(mail.html).not.toContain('<Doe>');
    // The logo and illustration travel inline, referenced by cid.
    expect(mail.attachments.map(a => a.cid).sort()).toEqual([
      'graphikx-illustration',
      'graphikx-logo',
    ]);
    // mailparser resolves the cid references to the attached images.
    expect(mail.html).toContain('src="data:image/gif;base64,');
  });

  it('reports a failure instead of success when SMTP is unreachable', async () => {
    const env = loadEnv({NODE_ENV: 'test', EMAIL_HOST: '127.0.0.1', EMAIL_PORT: '1'});
    vi.spyOn(console, 'error').mockImplementation(() => {});
    const res = await request(createApp({env})).post('/api/projects/enquiry').send(enquiry);
    expect(res.status).toBe(502);
    expect(res.body.error).toContain('design@graphikx.in');
  });

  it('refuses in production when SMTP is not configured', async () => {
    const env = loadEnv({NODE_ENV: 'production'});
    vi.spyOn(console, 'error').mockImplementation(() => {});
    const res = await request(createApp({env})).post('/api/projects/enquiry').send(enquiry);
    expect(res.status).toBe(503);
    expect(res.body.error).toContain('design@graphikx.in');
  });
});
