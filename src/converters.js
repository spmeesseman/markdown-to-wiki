
'use strict';

module.exports = {
	headers( input ) {
		return input.replace( /^(#+)/gm, function( match ) {
			return '='.repeat( match.length );
		} );
	}
};
