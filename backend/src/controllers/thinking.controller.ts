import type {RequestHandler} from 'express';
import {HttpError} from '../middleware/errors.js';
import type {ThinkingService} from '../services/thinking.service.js';

export function createThinkingController(thinking: ThinkingService) {
  const list: RequestHandler = (req, res) => {
    const category = typeof req.query.category === 'string' ? req.query.category : undefined;
    res.json({articles: thinking.list(category)});
  };

  const get: RequestHandler<{slug: string}> = (req, res) => {
    const article = thinking.get(req.params.slug);
    if (!article) throw new HttpError(404, 'Article not found');
    res.json({article});
  };

  return {list, get};
}
