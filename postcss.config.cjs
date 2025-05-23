// postcss.config.cjs (CommonJS)
const prefixer = require('postcss-prefix-selector');
const tailwindcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    prefixer({
      prefix: '.arbtr-scrbrd',
      transform(prefix, selector, prefixedSelector) {
        if (
          selector.startsWith('html') ||
          selector.startsWith('body') ||
          selector.startsWith(':root') ||
          selector.includes('#arbiter-scoreboard') ||
          selector.includes('.arbtr-scrbrd')
        ) {
          return selector;
        }
        return prefixedSelector;
      },
    }),
  ],
};
