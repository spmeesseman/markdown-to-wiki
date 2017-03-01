
'use strict';

// Exposes a customized instance of marked.Renderer.

const marked = require( 'marked' );
let renderer = new marked.Renderer();

renderer.heading = ( text, level ) => `${'='.repeat( level )} ${text}\n`;

renderer.paragraph = text => String( text ) + '\n';

renderer.link = ( href, title, text ) => `[${href} ${text}]`;

module.exports = renderer;