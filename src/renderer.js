
'use strict';

// Exposes a customized instance of marked.Renderer.

const marked = require( 'marked' );
let renderer = new marked.Renderer();

renderer.heading = ( text, level ) => `\n${'='.repeat( level )} ${text}`;

renderer.paragraph = text => '\n' + String( text );

renderer.link = ( href, title, text ) => `[${href} ${text}]`;

renderer.code = ( code, lang ) => `
{{{${lang ? '#!' + lang : ''}
${code}
}}}`;

renderer.br = () => '\n';

renderer.list = ( body, ordered ) => {
	body = body.replace( /^1.  /gm, '1.' );

	let ret = ordered ? body : body.replace( /^1./gm, '*' );

	return '\n' + ret  + '\n';
};

renderer.listitem = text => {
	const indentation = '  ';

	let lines = text.split( /\n/g ).map( line => indentation + line.trim() );
	text = lines.join( '\n' );

	let ret = `1. ${text}`;


	return '\n' + ret;
};

renderer.codespan = code => `\`${code}\``;

renderer.image = href => `[[Image(${href})]]`;

module.exports = renderer;