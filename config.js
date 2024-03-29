module.exports = {
  pathPrefix: '',
  siteUrl: 'https://www.teamrubot.co.uk',
  siteTitle: 'Team Rubot',
  siteDescription: 'Logbook of a software developer',
  author: 'Team Rubot',
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
      description: 'Road Trip Adventures.',
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
    party: {
      name: 'party',
      description: 'Parties and Meals.',
      color: '#f9c646',
    },
    diy: {
      name: 'diy',
      description: 'DIY Tools.',
      color: '#f9c646',
    },
    travel: {
      name: 'travel',
      description: 'Places and Travel.',
      color: '#f9c646',
    },
  },
};
