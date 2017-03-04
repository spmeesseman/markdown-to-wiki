
'use strict';

const marked = require( 'marked' );
const renderer = require( './renderer' );

module.exports = {
	/**
	 * Converts given input string to WikiMarkdown and returns it as a string.
	 *
	 * @param {String} input
	 * @returns {String} WikiMarkup output.
	 */
	convertString: function( input ) {
		let ret = marked( input, { renderer: renderer } );

		if ( ret[ 0 ] === '\n' ) {
			ret = ret.substring( 1 );
		}

		return ret;
	}
};