// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node
const fs = require( 'fs' );
const StringDecoder = require( 'string_decoder' ).StringDecoder;

// Vendor
const Promise = require( 'bluebird' );
const literati = require( 'sfco-literati' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const decoder = new StringDecoder( 'utf8' );

var ROOT_PATH = `${__dirname}/..`;
var TEMPLATES_PATH = `${ROOT_PATH}/templates`;
var SETTINGS = null;
var MANIFEST = null;

// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
function init( options ) {
	return new Promise( ( resolve, reject ) => {
		_validateInput( options )
			.then( _getCommands )
			.then( _fetchCommandManifest )
			.then( _parseData )
			.then( _parseManifest )
			.then( _readFile )
			.then( _writeFile )
			.then( _returnOverview )
			.then( resolve )
			.catch( reject );
	} )
}

function _validateInput( options ) {
	SETTINGS = options;

	return new Promise( ( resolve, reject ) => {
		resolve( true );
	} );
}

function _getCommands() {
	return new Promise( ( resolve, reject ) => {
		fs.readdir( `${TEMPLATES_PATH}`, ( err, data ) => {
			if ( err ) {
				/// TODO[@jrmykolyn] - Handle error.
				reject( err );
			}

			resolve( data );
		} );
	} );
}

function _fetchCommandManifest( data ) {
	if ( data.includes( SETTINGS.COMMAND ) ) {
		return literati.read( `${TEMPLATES_PATH}/${SETTINGS.COMMAND}/_manifest.json` );
	} else {
		throw new Error( `Whoops! Looks like you invoked "mk" with a missing or invalid command` );
	}
}

function _parseManifest( data ) {
		MANIFEST = JSON.parse( data );

		return new Promise( ( resolve, reject ) => {
			resolve( `${TEMPLATES_PATH}/${SETTINGS.COMMAND}/${MANIFEST[ SETTINGS.VARIANT || 'default' ]}` );
		} );
}

function _readFile( path ) {
	return literati.read( path );
}

function _writeFile( data ) {
	return literati.write( `${process.cwd()}/${MANIFEST[ 'default' ]}`, data );
}

function _parseData( data ) {
	return new Promise( ( resolve, reject ) => {
		if ( !data ) {
			throw new Error( 'Whoops! Something went wrong!' );
		}

		resolve( ( data instanceof Buffer ) ? decoder.write( data ) : data );
	} );
}

function _returnOverview() {
	return new Promise( ( resolve, reject ) => {
		resolve( `Created new \`${MANIFEST[ 'default' ]}\` file at ${process.cwd()}` );
	} );
}

module.exports = {
	init
};
