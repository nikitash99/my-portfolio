module.exports = {
  pathPrefix: '',
  siteUrl: 'https://yashraj.now.sh',
  siteTitle: 'Yashraj Mishra',
  siteDescription: 'A nice portfolio Design',
  author: 'Yashraj Mishra',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  pages: {
    home: '/',
    blog: 'blog',
    resume: 'resume',
  },
  social: {
    github: 'https://github.com/yashrajmishra',
    facebook: 'https://www.facebook.com/mishra.yashraj',
    twitter: 'https://twitter.com/MishraYashrajs',
    instagram: 'https://www.instagram.com/mishra.yashrajs',
  },
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
};
