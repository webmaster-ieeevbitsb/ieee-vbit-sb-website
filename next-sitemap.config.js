/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ieeevbitsb.in', 
  generateRobotsTxt: true,
  
  // This adds the custom AI directive and keeps your existing rules.
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Example of disallowing a specific bot (if you ever need it)
      // {
      //   userAgent: 'bad-bot',
      //   disallow: ['/'],
      // },
    ],
    additionalSitemaps: [
      'https://ieeevbitsb.in/sitemap.xml',
    ],
    transform: async (config, robotsTxt) => {
        const customDirectives = `User-Agent: Google-Extended\ndisallow: /\n\nUser-Agent: *\nContent-signal: search=yes,ai-train=no`;
        return `${customDirectives}\n\n${robotsTxt}`;
    },
  },
};