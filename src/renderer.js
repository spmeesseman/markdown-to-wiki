
'use strict';

// Exposes a customized instance of marked.Renderer.

const marked = require( 'marked' );
let renderer = new marked.Renderer();

renderer.heading = function( text, level ) {
	return '='.repeat( level ) + text;
};

module.exports = renderer;