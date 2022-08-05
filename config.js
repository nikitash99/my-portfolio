module.exports = {
  pathPrefix: '',
  siteUrl: 'https://nikitasharma.vercel.app',
  siteTitle: 'Nikita Sharma',
  siteDescription: 'A nice portfolio Design',
  author: 'Nikita Sharma',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  pages: {
    home: '/',
    blog: 'blog',
    resume: 'resume',
  },
  social: {
    github: 'https://github.com/nikitash99',
    facebook: 'https://www.facebook.com/sharma.nikita',
    twitter: 'https://twitter.com/sharma.nikitas',
    instagram: 'https://www.instagram.com/sharma.nikitas',
  },
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
};
