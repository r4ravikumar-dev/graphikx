const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

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
    response = await fetch(`${API_URL}/api/projects/enquiry`, {
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
