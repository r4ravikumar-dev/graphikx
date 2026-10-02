import type {ErrorRequestHandler, RequestHandler} from 'express';

export class HttpError extends Error {
  constructor(
    readonly status: number,
    message: string,
    readonly fields?: Record<string, string>,
  ) {
    super(message);
  }
}

export const notFound: RequestHandler = (_req, _res, next) => {
  next(new HttpError(404, 'Not found'));
};

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof HttpError) {
    res.status(error.status).json({error: error.message, fields: error.fields});
    return;
  }

  // Malformed JSON bodies from express.json().
  if (error?.type === 'entity.parse.failed') {
    res.status(400).json({error: 'Request body must be valid JSON'});
    return;
  }

  console.error(error);
  res.status(500).json({error: 'Something went wrong. Please try again.'});
};
