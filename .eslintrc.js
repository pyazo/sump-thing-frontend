const path = require('path');

module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "import",
        "jsx-a11y",
        "babel"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 7,
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      "node": true,
      "browser": true,
      "mocha": true,
      "es6": true
    },
    "globals": {
      "expect": true,
      "globals": true,
    },
    "rules": {
      "no-warning-comments": "off",
      "no-console": "off",
      "jsx-a11y/img-uses-alt": "off",
      "jsx-a11y/label-uses-for": "off",
      "jsx-a11y/mouse-events-map-to-key-events": "off",
      "jsx-a11y/redundant-alt": "off",
      "jsx-a11y/valid-aria-role": "off",
      "jsx-a11y/href-no-hash": "off",
      "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
      "import/no-extraneous-dependencies": "off",
      "import/no-unresolved": [
         "error",
         {
           "ignore": [ 'js/', 'img/' ]
         }
       ],
     "import/extensions": "off",
     "react/prefer-stateless-function": "off",
     "react/forbid-prop-types": "off",
     "quotes": [
       "error",
       "single",
       {
         "allowTemplateLiterals": true,
       }
     ],
     "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
    }]
  }
};
