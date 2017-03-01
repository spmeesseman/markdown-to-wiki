
'use strict';

const app = require( '../src/app' );

describe( 'app', () => {
	describe( 'convertString', () => {
		it( 'works', () => {
			return getFixture( 'appTest1' )
				.then( fixtures => expect( app.convertString( fixtures.input ) ).to.be.eql( fixtures.expected ) );
		} );
	} );
} );
