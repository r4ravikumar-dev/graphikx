import type {RequestHandler} from 'express';
import type {ProjectEnquiry} from '../models/enquiry.js';
import type {EnquiryService} from '../services/enquiry.service.js';

export function createProjectsController(enquiries: EnquiryService) {
  const submitEnquiry: RequestHandler = async (req, res) => {
    await enquiries.submit(req.body as ProjectEnquiry);
    res.status(201).json({status: 'received'});
  };

  return {submitEnquiry};
}
