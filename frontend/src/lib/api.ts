/**
 * The API is served from the same origin under /api: on Vercel a top-level
 * rewrite routes /api/* to the backend service, and in local development
 * next.config.ts proxies /api/* to BACKEND_URL. So the browser never needs to
 * know the backend's address.
 */
const ENQUIRY_ENDPOINT = '/api/projects/enquiry';

export type ProjectEnquiry = {
  name: string;
  email: string;
  company?: string;
  /** What they'd like help with, e.g. "UX Design". */
  projectType?: string;
  /** Where they are right now, e.g. "Early exploration". */
  stage?: string;
  timeline?: string;
  message: string;
  /** What feels difficult right now. */
  difficulty?: string;
  notes?: string;
};

export type ApiError = {
  error: string;
  fields?: Record<string, string>;
};

export class EnquiryError extends Error {
  constructor(
    message: string,
    readonly fields: Record<string, string> = {},
  ) {
    super(message);
  }
}

export async function submitProjectEnquiry(enquiry: ProjectEnquiry): Promise<void> {
  let response: Response;
  try {
    response = await fetch(ENQUIRY_ENDPOINT, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(enquiry),
    });
  } catch {
    throw new EnquiryError('We could not reach the server. Please try again in a moment.');
  }

  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as ApiError | null;
    throw new EnquiryError(
      body?.error ?? 'Something went wrong. Please try again.',
      body?.fields,
    );
  }
}
