
# markdown-to-wiki-markup

[![AppVeyor Build status](https://ci.appveyor.com/api/projects/status/kn839goi38djm8bf?svg=true&passingText=master%20%E2%9C%93)](https://ci.appveyor.com/project/mlewand/markdown-to-wiki-markup)

A simple Markdown to WikiMarkup converter.

## Example

```javascript
const mdToWiki = require( 'markdown-to-wiki-markup' );

// Logs: "== foo\nbar".
console.log( mdToWiki.convertString( '## foo\nbar' ) );
```

## API

## `mdToWiki.convertString`

Parameters:
* input : String - Input Markdown to be transformed into a WikiMarkup.

Returns:
* String - WikiMarkup output
