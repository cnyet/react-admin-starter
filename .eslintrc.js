module.exports = {
  "env": {
      "browser": true,
      "es2021": true,
      "es6": true,
      "node": true,
      "jest": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
      "react", "jsx-a11y", "import"
  ],
  "rules": {
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": ["state"]
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"] 
      }
    ],
    "react/jsx-props-no-spreading": [
      "off",
      {
        "custom": "ignore",
        "html": "ignore"
      }
    ],
    "react/forbid-prop-types": "off"
  }
};
