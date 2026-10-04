import type {ProjectEnquiry} from '../models/enquiry.js';
import type {EmailAttachment} from '../services/email.service.js';
import {ILLUSTRATION_GIF_BASE64, LOGO_PNG_BASE64} from './assets.js';

/**
 * The enquiry notification sent to the studio, in the site's visual language:
 * the logo, a mono eyebrow, a headline with one italic serif word in brand
 * blue, the brief-arriving illustration, details as label-over-value
 * pairs in two columns and
 * the answers as numbered blocks. Plain block markup (no layout tables) with
 * inline styles, which Zoho, Gmail and Apple Mail render as designed; older
 * desktop Outlook shows it full width. A plain-text version goes with it.
 */

const INK = '#1d1d22';
const SECONDARY = '#5f5f6b';
const BRAND = '#2059DF';
const HAIRLINE = '#e6e6ea';
const PAGE = '#f4f4f6';
const SANS = "'IBM Plex Sans', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif";
const MONO = "'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace";
const SERIF = "'Instrument Serif', Georgia, 'Times New Roman', serif";

const LOGO_CID = 'graphikx-logo';
const ILLUSTRATION_CID = 'graphikx-illustration';

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

function details(enquiry: ProjectEnquiry): [string, string][] {
  return [
    ['Name', enquiry.name],
    ['Email', enquiry.email],
    ['Company / product', enquiry.company ?? 'Not provided'],
    ['Help with', enquiry.projectType ?? 'Not provided'],
    ['Where they are', enquiry.stage ?? 'Not provided'],
    ['Timeline', enquiry.timeline ?? 'Not provided'],
  ];
}

function answers(enquiry: ProjectEnquiry): [string, string][] {
  return [
    ['What they are working on', enquiry.message],
    ['What feels difficult', enquiry.difficulty],
    ['Anything else', enquiry.notes],
  ].filter((answer): answer is [string, string] => Boolean(answer[1]));
}

function formatReceivedAt(date: Date) {
  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  }).format(date);
}

/** The subject of the studio's reply: what they asked about, and for whom. */
export function replySubject(enquiry: ProjectEnquiry) {
  const topic = enquiry.projectType ?? 'your project';
  return `Re: Your Graphikx enquiry about ${topic}${enquiry.company ? ` for ${enquiry.company}` : ''}`;
}

/**
 * A mailto link that opens a reply to the visitor: their address as the
 * recipient (left unencoded, since some mail apps don't decode %40), the
 * enquiry-specific subject and a greeting to start from.
 */
export function replyHref(enquiry: ProjectEnquiry) {
  const firstName = enquiry.name.split(/\s+/)[0] ?? enquiry.name;
  const query = [
    `subject=${encodeURIComponent(replySubject(enquiry))}`,
    `body=${encodeURIComponent(`Hi ${firstName},\n\nThanks for reaching out to Graphikx.\n\n`)}`,
  ].join('&');
  return `mailto:${encodeURI(enquiry.email)}?${query}`;
}

export function enquirySubject(enquiry: ProjectEnquiry) {
  return `New project enquiry from ${enquiry.name}${enquiry.projectType ? ` (${enquiry.projectType})` : ''}`;
}

export function enquiryText(enquiry: ProjectEnquiry, receivedAt = new Date()): string {
  return [
    `New project enquiry, ${formatReceivedAt(receivedAt)} IST`,
    '',
    ...details(enquiry).map(([label, value]) => `${label}: ${value}`),
    ...answers(enquiry).flatMap(([heading, text]) => ['', `${heading}:`, text]),
    '',
    `Reply to this email to answer ${enquiry.name} directly.`,
  ].join('\n');
}

export function enquiryHtml(enquiry: ProjectEnquiry, receivedAt = new Date()): string {
  const name = escapeHtml(enquiry.name);
  const firstName = escapeHtml(enquiry.name.split(/\s+/)[0] ?? enquiry.name);
  const preheader = escapeHtml(enquiry.message.slice(0, 140));

  const detailItems = details(enquiry)
    .map(
      ([label, value]) => `
      <div style="display:inline-block;width:48%;min-width:220px;vertical-align:top;box-sizing:border-box;padding:14px 16px 14px 0;border-top:1px solid ${HAIRLINE}">
        <p style="margin:0 0 4px;font-family:${MONO};font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${SECONDARY}">${label}</p>
        <p style="margin:0;font-family:${SANS};font-size:15px;line-height:1.5;color:${INK};word-break:break-word">${
          label === 'Email'
            ? `<a href="mailto:${escapeHtml(value)}" style="color:${BRAND};text-decoration:none">${escapeHtml(value)}</a>`
            : escapeHtml(value)
        }</p>
      </div>`,
    )
    .join('');

  const answerBlocks = answers(enquiry)
    .map(
      ([heading, text], index) => `
      <div style="padding:24px 0 0;border-top:1px solid ${HAIRLINE}">
        <p style="margin:0 0 8px;font-family:${MONO};font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND}">${String(index + 1).padStart(2, '0')}&nbsp;&nbsp;${heading}</p>
        <p style="margin:0 0 24px;font-family:${SANS};font-size:16px;line-height:1.6;color:${INK};white-space:pre-wrap">${escapeHtml(text)}</p>
      </div>`,
    )
    .join('');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:wght@400;600;700&family=Instrument+Serif:ital@1&display=swap" rel="stylesheet">
<title>${escapeHtml(enquirySubject(enquiry))}</title>
</head>
<body style="margin:0;padding:0;background:${PAGE};-webkit-text-size-adjust:100%">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${PAGE}">${preheader}</div>
<div style="background:${PAGE};padding:32px 16px">
  <div style="max-width:600px;margin:0 auto">
    <div style="padding:0 4px 20px">
      <img src="cid:${LOGO_CID}" width="120" height="32" alt="Graphikx" style="display:block;border:0">
    </div>
    <div style="background:#ffffff;border:1px solid ${HAIRLINE};border-radius:16px;padding:40px 32px 12px">
      <p style="margin:0 0 20px;font-family:${MONO};font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:${SECONDARY}">New enquiry&nbsp;&nbsp;&middot;&nbsp;&nbsp;${escapeHtml(formatReceivedAt(receivedAt))} IST</p>
      <h1 style="margin:0 0 12px;font-family:${SANS};font-size:30px;line-height:1.15;font-weight:700;letter-spacing:-0.02em;color:${INK}">${name} wants to make <span style="font-family:${SERIF};font-style:italic;font-weight:400;color:${BRAND}">sense</span> of something.</h1>
      <p style="margin:0 0 28px;font-family:${SANS};font-size:16px;line-height:1.6;color:${SECONDARY}">A new message came in through the Start a project form. Everything they shared is below.</p>
      <img src="cid:${ILLUSTRATION_CID}" width="536" alt="" style="display:block;width:100%;max-width:536px;height:auto;border:0;margin:0 0 32px">
      <div style="font-size:0;border-bottom:1px solid ${HAIRLINE}">${detailItems}
      </div>
      <div style="margin-top:28px">${answerBlocks}
      </div>
      <div style="margin:8px 0 28px">
        <a href="${escapeHtml(replyHref(enquiry))}" style="display:inline-block;padding:14px 28px;background:${BRAND};border-radius:999px;font-family:${SANS};font-size:15px;font-weight:600;color:#ffffff;text-decoration:none">Reply to ${firstName} &rarr;</a>
      </div>
    </div>
    <p style="margin:0;padding:20px 4px 0;font-family:${MONO};font-size:11px;letter-spacing:0.06em;line-height:1.6;color:${SECONDARY}">Sent from the Start a project form on graphikx.in. Replying to this email answers ${name} directly.</p>
  </div>
</div>
</body>
</html>`;
}

/** The logo and illustration, referenced from the HTML by cid. */
export const enquiryAttachments: EmailAttachment[] = [
  {
    filename: 'graphikx.png',
    content: Buffer.from(LOGO_PNG_BASE64, 'base64'),
    contentType: 'image/png',
    cid: LOGO_CID,
  },
  {
    filename: 'illustration.gif',
    content: Buffer.from(ILLUSTRATION_GIF_BASE64, 'base64'),
    contentType: 'image/gif',
    cid: ILLUSTRATION_CID,
  },
];
