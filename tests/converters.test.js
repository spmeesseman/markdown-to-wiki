
'use strict';

const converters = require( '../src/converters' );

describe( 'converters', () => {
	describe( 'header', () => {
		it( 'works with a single line', () => {
			expect( converters.headers( '## A header!' ) ).to.be.eql( '== A header!' );
		} );

		it( 'works with a multiple lines', () => {
			let input = 'The following text contains some headers!\n\n' +
					'# Wow!\n' +
					'###### Soo much headers!!!\n' +
					'This is # not a header.\n' +
					'\n' +
					'### Such an order!',
				expected = 'The following text contains some headers!\n\n' +
					'= Wow!\n' +
					'====== Soo much headers!!!\n' +
					'This is # not a header.\n' +
					'\n' +
					'=== Such an order!';

			expect( converters.headers( input ) ).to.be.eql( expected );
		} );
	} );
} );
