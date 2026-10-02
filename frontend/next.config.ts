import type {NextConfig} from 'next';

/**
 * Local development only: when the frontend and backend run as separate dev
 * servers (`npm run dev` in each), proxy /api/* to the backend so the browser
 * can call the same-origin /api paths it uses in production.
 *
 * On Vercel, BACKEND_URL is not set and the top-level rewrite in vercel.json
 * routes /api/* to the backend service before Next.js sees the request.
 * `vercel dev` does the same locally.
 */
const backendUrl = process.env.BACKEND_URL;

const nextConfig: NextConfig = {
  async rewrites() {
    if (!backendUrl) return [];
    return [{source: '/api/:path*', destination: `${backendUrl}/api/:path*`}];
  },
};

export default nextConfig;
