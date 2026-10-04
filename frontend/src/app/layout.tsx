import type {Metadata, Viewport} from 'next';
import './globals.css';
import {Providers} from './providers';
import {SiteShell} from '@/components/layout/SiteShell';
import {site} from '@/content/site';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    'Product Design',
    'UX Design',
    'UI Design',
    'Interaction Design',
    'UX Flow Revamp',
    'SaaS Product Design',
    'No-code Design',
    'Design Systems',
  ],
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
  },
};

/**
 * The site has no light/dark toggle: it always follows the device setting.
 * These tell the browser both schemes are supported and colour the mobile
 * browser bar to match the page (Stone's --color-background-surface).
 */
export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: '#ffffff'},
    {media: '(prefers-color-scheme: dark)', color: '#1b1b1f'},
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    // The theme attribute is rendered on the server so theme colours apply from
    // the first paint, before JavaScript runs (no flash of the wrong scheme).
    // data-scroll-behavior: keep smooth scrolling for in-page links, but let
    // Next.js jump instantly between pages (see ScrollManager).
    <html lang="en" data-astryx-theme="graphikx" data-scroll-behavior="smooth">
      <head>
        {/* Typefaces: IBM Plex Sans headings and body, IBM Plex Mono eyebrows, Instrument Serif accent words. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400..700;1,400&family=Instrument+Serif:ital@0;1&display=swap"
        />
      </head>
      <body>
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
