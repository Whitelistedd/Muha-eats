module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true,
      "alias": {
        "screens": './src'
      }
    },
    ],
    [
      'module-resolver',
      {
        alias: {
          src: './src'
        }
      }
    ],
    'react-native-reanimated/plugin',
    "@babel/plugin-proposal-export-namespace-from"
  ]
};