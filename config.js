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
    facebook: 'https://www.facebook.com/mishra.yashraj',
    twitter: 'https://twitter.com/MishraYashrajs',
    instagram: 'https://www.instagram.com/mishra.yashrajs',
  },
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
};
