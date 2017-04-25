const utils = require( '../lib/utils' );

describe( '`utils` module:', () => {
	it( 'Should correctly return whether or not a string starts with a provided substring.' , () => {
		var str = 'This is the test string';

		expect( utils.strStartsWith( str, 'This' ) ).toBe( true );
	} );

	it( 'Should correctly return whether or not a string is a command line option', () => {
		var str = '--version';

		expect( utils.strIsOpt( str ) ).toBe( true );
	} );

	it( 'Should correctly return whether or not a string is a command line argument', () => {
		var str = 'gulp';

		expect( utils.strIsArg( str ) ).toBe( true );
	} );
} )
