import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // The TOG logo still lives on the old Webflow CDN.
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
    ],
  },
  // /blog is server-rendered (the pillar filter reads searchParams), so the
  // markdown has to travel with the deployed function. Tracing can't see a
  // readdir, so name the directory.
  outputFileTracingIncludes: {
    '/**': ['./content/posts/**/*'],
  },
  async rewrites() {
    return [
      // Sveltia CMS is a static page in public/. Next serves it at
      // /admin/index.html; this makes the address people actually type work.
      { source: '/admin', destination: '/admin/index.html' },
    ];
  },
};

export default nextConfig;
