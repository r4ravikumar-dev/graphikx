import {describe, expect, it, vi} from 'vitest';
import request from 'supertest';
import {createApp} from '../src/app.js';
import {loadEnv} from '../src/config/env.js';
import type {EmailService} from '../src/services/email.service.js';

function setup() {
  const email: EmailService = {send: vi.fn().mockResolvedValue(undefined)};
  const env = loadEnv({NODE_ENV: 'test', ENQUIRY_NOTIFY_TO: 'studio@example.com'});
  return {app: createApp({env, email}), email};
}

const validEnquiry = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  company: 'Example',
  projectType: 'Product Design',
  message: 'We are redesigning an existing product.',
};

describe('GET /api/health', () => {
  it('reports ok', async () => {
    const res = await request(setup().app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({status: 'ok'});
  });
});

describe('POST /api/projects/enquiry', () => {
  it('accepts a valid enquiry and notifies the studio', async () => {
    const {app, email} = setup();
    const res = await request(app).post('/api/projects/enquiry').send(validEnquiry);

    expect(res.status).toBe(201);
    expect(email.send).toHaveBeenCalledWith(
      expect.objectContaining({to: 'studio@example.com', replyTo: 'jane@example.com'}),
    );
  });

  it('includes the optional detail fields in the notification', async () => {
    const {app, email} = setup();
    await request(app)
      .post('/api/projects/enquiry')
      .send({
        ...validEnquiry,
        stage: 'Early exploration',
        difficulty: 'People drop off during onboarding.',
        notes: 'We launch in spring.',
      });

    const [message] = vi.mocked(email.send).mock.calls[0]!;
    expect(message.text).toContain('Where they are: Early exploration');
    expect(message.text).toContain('People drop off during onboarding.');
    expect(message.text).toContain('We launch in spring.');
  });

  it('accepts an enquiry with only the required fields', async () => {
    const {app} = setup();
    const res = await request(app).post('/api/projects/enquiry').send({
      name: 'Jane',
      email: 'jane@example.com',
      message: 'Our onboarding flow loses people.',
    });
    expect(res.status).toBe(201);
  });

  it('returns field errors for an invalid enquiry', async () => {
    const {app, email} = setup();
    const res = await request(app)
      .post('/api/projects/enquiry')
      .send({...validEnquiry, email: 'not-an-email', message: 'short'});

    expect(res.status).toBe(422);
    expect(Object.keys(res.body.fields)).toEqual(['email', 'message']);
    expect(email.send).not.toHaveBeenCalled();
  });

  it('rejects malformed JSON', async () => {
    const res = await request(setup().app)
      .post('/api/projects/enquiry')
      .set('Content-Type', 'application/json')
      .send('{"name":');
    expect(res.status).toBe(400);
  });
});

describe('GET /api/thinking', () => {
  it('lists articles newest first', async () => {
    const res = await request(setup().app).get('/api/thinking');
    expect(res.status).toBe(200);
    const dates = res.body.articles.map((article: {publishedAt: string}) => article.publishedAt);
    expect(dates).toEqual([...dates].sort().reverse());
  });

  it('filters by category', async () => {
    const res = await request(setup().app).get('/api/thinking?category=ux');
    expect(res.body.articles.every((article: {category: string}) => article.category === 'UX')).toBe(true);
  });

  it('returns one article by slug, or 404', async () => {
    const app = setup().app;
    const found = await request(app).get('/api/thinking/clarity-is-a-feature');
    expect(found.status).toBe(200);
    expect(found.body.article.title).toBe('Clarity is a feature');

    const missing = await request(app).get('/api/thinking/nope');
    expect(missing.status).toBe(404);
  });
});
