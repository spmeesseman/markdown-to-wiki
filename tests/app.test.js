
'use strict';

const app = require( '../src/app' );

describe( 'app', () => {
	describe( 'convertString', () => {
		it( 'works', () => {
			let input = 'Sample markdown\n' +
					'## Header lvl 2\n' +
					'random paragraph\n' +
					'Closing words',
				expected = 'Sample markdown\n' +
					'== Header lvl 2\n' +
					'random paragraph\n' +
					'Closing words';

			expect( app.convertString( input ) ).to.be.eql( expected );
		} );
	} );
} );
