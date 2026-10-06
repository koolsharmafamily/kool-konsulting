import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  async redirects() {
    return [
      { source: '/expertise', destination: '/services', permanent: true },
      { source: '/expertise/:slug*', destination: '/services/:slug*', permanent: true },
      { source: '/scorecard', destination: '/contact', permanent: true },
      { source: '/services/web-development', destination: '/services/websites', permanent: true },
      { source: '/services/local-visibility', destination: '/services/websites', permanent: true },
      { source: '/services/local-seo-nagpur', destination: '/services/websites', permanent: true },
      { source: '/services/google-business-profile-management', destination: '/services/websites', permanent: true },
      { source: '/services/reputation-management', destination: '/services/websites', permanent: true },
      { source: '/services/digital-marketing', destination: '/services/websites', permanent: true },
      { source: '/services/software-development', destination: '/services/software', permanent: true },
      { source: '/services/internal-tools', destination: '/services/software', permanent: true },
      { source: '/services/automation-ai', destination: '/services/automation', permanent: true },
      { source: '/services/ai-agents-for-business', destination: '/services/automation', permanent: true },
      { source: '/services/workflow-automation', destination: '/services/automation', permanent: true },
      { source: '/services/strategy-planning', destination: '/services', permanent: true },
      { source: '/services/business-plan-writing', destination: '/services', permanent: true },
      { source: '/services/financial-modelling', destination: '/services', permanent: true },
      { source: '/services/market-entry-strategy', destination: '/services', permanent: true },
      { source: '/work/construction-workforce-automation', destination: '/work/construction-site-app', permanent: true },
      { source: '/work/options-trading-agent', destination: '/work', permanent: true },
    ];
  },
};

export default nextConfig;
