import type {RequestHandler} from 'express';
import type {ZodType} from 'zod';
import {HttpError} from './errors.js';

/** Validates req.body against a schema and replaces it with the parsed value. */
export function validateBody(schema: ZodType): RequestHandler {
  return (req, _res, next) => {
    const result = schema.safeParse(req.body);
    if (result.success) {
      req.body = result.data;
      next();
      return;
    }

    const fields: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const key = String(issue.path[0] ?? 'body');
      fields[key] ??= issue.message;
    }
    next(new HttpError(422, 'Please check the highlighted fields', fields));
  };
}
