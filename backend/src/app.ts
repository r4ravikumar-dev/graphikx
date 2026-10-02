import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import type {Env} from './config/env.js';
import {createApiRouter} from './routes/index.js';
import {errorHandler, notFound} from './middleware/errors.js';
import {createEmailService, type EmailService} from './services/email.service.js';
import {createEnquiryService} from './services/enquiry.service.js';
import {createThinkingService} from './services/thinking.service.js';
import {articles} from './data/articles.js';

type AppOptions = {
  env: Env;
  /** Override the email transport, e.g. in tests. */
  email?: EmailService;
};

export function createApp({env, email = createEmailService(env)}: AppOptions) {
  const app = express();

  app.disable('x-powered-by');
  app.set('trust proxy', 1);
  app.use(helmet());
  app.use(cors({origin: env.CORS_ORIGIN}));
  app.use(express.json({limit: '50kb'}));

  app.use(
    '/api',
    createApiRouter({
      enquiries: createEnquiryService(email, env.ENQUIRY_NOTIFY_TO),
      thinking: createThinkingService(articles),
    }),
  );

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
