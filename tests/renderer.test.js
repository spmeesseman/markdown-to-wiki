
'use strict';

const renderer = require( '../src/renderer' );

describe( 'renderer', () => {
	describe( 'heading', () => {
		it( 'works with a header level 1', () => {
			expect( renderer.heading( 'abcDEF', 1 ) ).to.be.eql( '=abcDEF' );
		} );
		it( 'works with a header level 6', () => {
			expect( renderer.heading( 'aa', 6 ) ).to.be.eql( '======aa' );
		} );
	} );
} );
