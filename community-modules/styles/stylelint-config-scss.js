module.exports = {
    plugins: [
      "stylelint-scss"
    ],
    customSyntax: "postcss-scss",
    rules: {
      "at-rule-no-unknown": [
        true,
        {
          // IMPORTANT: this rule adds all Sass @rules except for @import which we want
          // to ban in favour of @use
          "ignoreAtRules": [
            "at-root",
            "content",
            "debug",
            "each",
            "else",
            "else if",
            "error",
            "extend",
            "for",
            "forward",
            "function",
            "if",
            "include",
            "media",
            "mixin",
            "return",
            "use",
            "warn",
            "while"
          ]
        }
      ],
      "scss/at-function-pattern": "^(?!-?ag-)",
      "scss/at-import-no-partial-leading-underscore": true,
      "scss/comment-no-loud": true,
      "scss/no-global-function-names": true,
      "scss/no-duplicate-mixins": true
    }
  }