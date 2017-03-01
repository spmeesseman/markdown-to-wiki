
'use strict';

const app = require( '../src/app' );

describe( 'app', () => {
	describe( 'convertString', () => {
		describe( 'fixture', () => {
			let checkFixture = function( fixtureName ) {
				return it( fixtureName, function() {
					return getFixture( fixtureName )
						.then( fixtures => expect( app.convertString( fixtures.input ) ).to.be.eql( fixtures.expected ) );
				} );
			};

			checkFixture( 'appTest1' );
			checkFixture( 'appTest2' );
			checkFixture( 'lists' );
		} );
	} );
} );
