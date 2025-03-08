/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://uiforest.dev', // Your website URL
    generateRobotsTxt: true, // Generates robots.txt
    sitemapSize: 5000,
    exclude: ['/admin', '/dashboard'], // Exclude private pages
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  };
  