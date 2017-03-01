
'use strict';

const marked = require( 'marked' );
const renderer = require( './renderer' );

module.exports = {
	/**
	 * Converts given input string to WikiMarkdown and returns it as a string.
	 */
	convertString: function( input ) {
		let ret = marked( input, { renderer: renderer } );

		if ( ret[ ret.length - 1 ] === '\n' ) {
			ret = ret.substring( 0, ret.length - 1 );
		}

		return ret;
	}
};