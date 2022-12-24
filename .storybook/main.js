const path = require('path');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  staticDir: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook_vitest_addon',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          include: [path.resolve(__dirname, '../components')] // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false }
        }
      }
    },
    '@storybook/addon-a11y'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  }
};
