import {loadEnv} from './config/env.js';
import {createApp} from './app.js';

const env = loadEnv();
const app = createApp({env});

const server = app.listen(env.PORT, () => {
  console.info(`Graphikx API listening on http://localhost:${env.PORT}`);
});

function shutdown(signal: string) {
  console.info(`${signal} received, closing server`);
  server.close(() => process.exit(0));
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
