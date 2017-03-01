
'use strict';

// Exposes a customized instance of marked.Renderer.

const marked = require( 'marked' );
let renderer = new marked.Renderer();

renderer.heading = ( text, level ) => `${'='.repeat( level )} ${text}\n`;

renderer.paragraph = text => String( text ) + '\n';

renderer.link = ( href, title, text ) => `[${href} ${text}]`;

renderer.code = ( code, lang ) => `{{{${lang ? '#!' + lang : ''}
${code}
}}}
`;

renderer.br = () => '\n';

renderer.list = ( body, ordered ) => {
	return '\n' + ( ordered ? body : body.replace( /^1./gm, '*' ) ) + '\n';
};

renderer.listitem = text => `1. ${text}\n`;

module.exports = renderer;