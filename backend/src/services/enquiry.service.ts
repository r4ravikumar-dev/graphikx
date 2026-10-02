import type {ProjectEnquiry} from '../models/enquiry.js';
import type {EmailService} from './email.service.js';

export type EnquiryService = {
  submit(enquiry: ProjectEnquiry): Promise<void>;
};

function formatEnquiry(enquiry: ProjectEnquiry): string {
  const sections = [
    ['What they are working on', enquiry.message],
    ['What feels difficult', enquiry.difficulty],
    ['Anything else', enquiry.notes],
  ].filter((section): section is [string, string] => Boolean(section[1]));

  return [
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Company / product: ${enquiry.company ?? 'Not provided'}`,
    `Help with: ${enquiry.projectType ?? 'Not provided'}`,
    `Where they are: ${enquiry.stage ?? 'Not provided'}`,
    `Timeline: ${enquiry.timeline ?? 'Not provided'}`,
    ...sections.flatMap(([heading, text]) => ['', `${heading}:`, text]),
  ].join('\n');
}

export function createEnquiryService(
  email: EmailService,
  notifyTo: string | undefined,
): EnquiryService {
  return {
    async submit(enquiry) {
      await email.send({
        to: notifyTo ?? 'studio@localhost',
        replyTo: enquiry.email,
        subject: `New project enquiry from ${enquiry.name}${enquiry.projectType ? ` (${enquiry.projectType})` : ''}`,
        text: formatEnquiry(enquiry),
      });
    },
  };
}
