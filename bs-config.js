const BROWSER_SYNC = {
  server: {
    baseDir: 'docs/',
    index: 'index.html',
    serveStaticOptions: {
      extensions: ['html']
    }
  },
  files: [
    'docs/*',
  ],
  ghostMode: {
    clicks: false,
    scroll: false,
    forms: false
  },
};

module.exports = BROWSER_SYNC;
