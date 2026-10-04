import type {ProjectEnquiry} from '../models/enquiry.js';
import type {EmailService} from './email.service.js';
import {
  enquiryAttachments,
  enquiryHtml,
  enquirySubject,
  enquiryText,
} from '../emails/enquiryEmail.js';

export type EnquiryService = {
  submit(enquiry: ProjectEnquiry): Promise<void>;
};

/** Sends each enquiry to the studio inbox; replying answers the visitor. */
export function createEnquiryService(email: EmailService, notifyTo: string): EnquiryService {
  return {
    async submit(enquiry) {
      const receivedAt = new Date();
      await email.send({
        to: notifyTo,
        replyTo: enquiry.email,
        subject: enquirySubject(enquiry),
        text: enquiryText(enquiry, receivedAt),
        html: enquiryHtml(enquiry, receivedAt),
        attachments: enquiryAttachments,
      });
    },
  };
}
