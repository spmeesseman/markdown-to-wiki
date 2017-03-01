
'use strict';

// Main file with chai and other lib configuration.
global.expect = require( 'chai' ).expect;

const fsp = require( 'fs-promise' ),
	path = require( 'path' );

global.getFixture = fixtureName => {
	let fixtureDir = path.join( __dirname, '_fixtures' ),
		expectedPath = path.join( fixtureDir, fixtureName + '.expected' ),
		inputPath = path.join( fixtureDir, fixtureName + '.md' );

	return Promise.all( [ fsp.readFile( expectedPath, { encoding: 'utf8' } ),
			fsp.readFile( inputPath, { encoding: 'utf8' } ) ] )
		.then( vals => ( { expected: vals[ 0 ], input: vals[ 1 ] } ) );
};