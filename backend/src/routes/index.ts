import {Router} from 'express';
import {rateLimit} from 'express-rate-limit';
import {projectEnquirySchema} from '../models/enquiry.js';
import {validateBody} from '../middleware/validate.js';
import {createProjectsController} from '../controllers/projects.controller.js';
import {createThinkingController} from '../controllers/thinking.controller.js';
import type {EnquiryService} from '../services/enquiry.service.js';
import type {ThinkingService} from '../services/thinking.service.js';

type Services = {
  enquiries: EnquiryService;
  thinking: ThinkingService;
};

export function createApiRouter({enquiries, thinking}: Services) {
  const router = Router();
  const projects = createProjectsController(enquiries);
  const articles = createThinkingController(thinking);

  router.get('/health', (_req, res) => {
    res.json({status: 'ok'});
  });

  router.post(
    '/projects/enquiry',
    rateLimit({windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: 'draft-8', legacyHeaders: false}),
    validateBody(projectEnquirySchema),
    projects.submitEnquiry,
  );

  router.get('/thinking', articles.list);
  router.get('/thinking/:slug', articles.get);

  return router;
}
