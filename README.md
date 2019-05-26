
# markdown-to-wiki

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![app-publisher](https://app1.development.pjats.com/res/img/app-publisher-badge.svg)](https://npm.development.pjats.com/-/web/detail/@perryjohnson/app-publisher)

A simple Markdown to WikiMarkup converter.

## Example

```javascript
const mdToWiki = require('markdown-to-wiki-markup');

// Logs: "== foo\nbar".
console.log( mdToWiki.convertString('## foo\nbar'));
```

## API

## `mdToWiki.convertString`

Parameters:

* input : String - Input Markdown to be transformed into a WikiMarkup.

Returns:

* String - WikiMarkup output
