module.exports = {
  pathPrefix: '',
  siteUrl: 'https://www.teamrubot.co.uk',
  siteTitle: 'team rubot',
  siteDescription: 'Logbook of team rubot',
  author: 'team rubot',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/rolwin100',
    facebook: 'https://www.facebook.com/rolwin.monteiro',
    twitter: 'https://twitter.com/rolwin100',
    instagram: 'https://www.instagram.com/reevan100/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'asas',
  tags: {    
    roadtrip: {
      name: 'roadtrip',
      description: 'Travel adventures.',
      color: '#f9c646',
    },
    boxset: {
      name: 'boxset',
      description: 'Movies and TV shows.',
      color: '#f9c646',
    },
    gardening: {
      name: 'gardening',
      description: 'Gardening.',
      color: '#f9c646',
    },
    meal: {
      name: 'meal',
      description: 'Meals and Cooking.',
      color: '#f9c646',
    },
  },
};
