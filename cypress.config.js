const { defineConfig } = require('cypress');

module.exports = defineConfig({
   e2e: {
    setupNodeEvents() {},
  },
  
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
