
'use strict';

const renderer = require( '../src/renderer' );

describe( 'renderer', () => {
	describe( 'heading', () => {
		it( 'works with a header level 1', () => {
			expect( renderer.heading( 'abcDEF', 1 ) ).to.be.eql( '= abcDEF\n' );
		} );
		it( 'works with a header level 6', () => {
			expect( renderer.heading( 'aa', 6 ) ).to.be.eql( '====== aa\n' );
		} );
	} );

	describe( 'paragraph', () => {
		it( 'works', () => {
			expect( renderer.paragraph( 'foo bar BAZ!' ) ).to.be.eql( 'foo bar BAZ!\n' );
		} );
	} );

	describe( 'link', () => {
		it( 'works with a title', () => {
			expect( renderer.link( 'http://foo', 'title', 'text' ) ).to.be.eql( '[http://foo text]' );
		} );

		it( 'works without a title', () => {
			expect( renderer.link( 'http://foo', '', 'text' ) ).to.be.eql( '[http://foo text]' );
		} );
	} );
} );
