module.exports = {
    "stories": [
      "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    webpackFinal: async (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react-native$": "react-native-web"
      };
      config.resolve.extensions = [
        '.web.tsx',
        '.web.ts',
        '.tsx',
        '.ts',
        '.web.jsx',
        '.web.js',
        '.jsx',
        '.js'
      ];
      return config;
    },
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions"
    ],
    "framework": "@storybook/react"
  }  