// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node
const fs = require( 'fs' );
const path = require( 'path' );
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

/**
 * Given an `options` object, function updates the internal `SETTINGS` and returns a Promise.
 *
 * @param {Object} `options`
 * @return {Promise}
 *
 * TODO[@jrmykolyn] - Update function to actually validate input or rename.
 */
function _validateInput( options ) {
	SETTINGS = options;

	// Convert `COMMAND` string to lowercase or fall back to empty string.
	SETTINGS.COMMAND = ( typeof SETTINGS.COMMAND === 'string' ) ? SETTINGS.COMMAND.toLowerCase() : '';

	return new Promise( ( resolve, reject ) => {
		resolve( true );
	} );
}

/**
 * Function reads the `/templates/` dir. and returns the contents as a Promise.
 *
 * @return {Promise}
 */
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

/**
 * Function checks for the presence of the `SETTINGS.COMMAND` string within the `data` array provided.
 *
 * If present, function attempts to read the corresponding manifest file and return the contents as a Promise.
 *
 * @param {Array<string>} `data`
 * @return {Promise}
 */
function _fetchCommandManifest( data ) {
	if ( data.includes( SETTINGS.COMMAND ) ) {
		return literati.read( `${TEMPLATES_PATH}/${SETTINGS.COMMAND}/_manifest.json` );
	} else {
		throw new Error( `Whoops! Looks like you invoked "mk" with a missing or invalid command` );
	}
}

/**
 * Given the manifest data for a particular command, function:
 * - parses the data and updates the internal `MANIFEST` var.
 * - interpolates a file path using the manifest data.
 * - returns the file path as a Promise.
 *
 * @param {string} `data`
 * @return {Promise}
 */
function _parseManifest( data ) {
		MANIFEST = JSON.parse( data );

		var fileName = _getFileName( MANIFEST[ SETTINGS.VARIANT || 'default' ], { ignorePrepend: true } );

		return new Promise( ( resolve, reject ) => {
			resolve( `${TEMPLATES_PATH}/${SETTINGS.COMMAND}/${fileName}` );
		} );
}

/**
 * Given an object of file `data`, function extracts, assembles, and returns a file name.
 *
 * Output of function can be configured by passing in an additional `options` argument.
 *
 * @param {Object} `data`
 * @param {Object} `options`
 * @return {string}
 */
function _getFileName( data, options ) {
	if ( typeof data === 'string' ) { return data; }

	data = ( data && typeof data === 'object' ) ? data : {};
	options = ( options && typeof options === 'object' ) ? options : {};

	var output = '';

	if ( !options.ignorePrepend ) { output += ( data.prepend || '' ); }

	output += data.fileName;

	if ( !options.ignoreAppend ) { output += ( data.append || '' ); }

	return output;
}

/**
 * Given a `filePath`, function reads the file and returns its contents as a Promise.
 *
 * @param {string} `filePath`
 * @return {Promise}
 */
function _readFile( filePath ) {
	return literati.read( filePath )
		.then(
			( data ) => { return data; },
			( err ) => { throw new Error( `Whoops! Cannot find the following file: ${path.basename( filePath )}` ); }
	);
}

/**
 * Function creates a new file in the current working directory with the `data` provided.
 *
 * Name of created file matches the 'default' file for the current command.
 *
 * @param {string} `data`
 * @return {Promise}
 */
function _writeFile( data ) {
	var defaultFileName = _getFileName( MANIFEST[ SETTINGS.VARIANT || 'default' ] );
	var overrideFileName = SETTINGS.OPTS.outFile || '';

	return new Promise( ( resolve, reject ) => {
		literati.write( `${process.cwd()}/${overrideFileName || defaultFileName}`, data )
			.then( () => {
				resolve( {
					defaultFileName,
					overrideFileName
				} );
			} );
	} );
}

/**
 * Function decodes Buffer `data` if required, returns `data` 'as-is' otherwise.
 *
 * @param {Buffer|string} `data`
 * @return {Promise}
 */
function _parseData( data ) {
	return new Promise( ( resolve, reject ) => {
		if ( !data ) {
			throw new Error( 'Whoops! Something went wrong!' );
		}

		resolve( ( data instanceof Buffer ) ? decoder.write( data ) : data );
	} );
}

/**
 * Function prints process information to the console.
 *
 * @param {Object} `data`
 * @return {Promise}
 */
function _returnOverview( data ) {
	return new Promise( ( resolve, reject ) => {
		var msg = '';

		if ( data.overrideFileName ) {
			msg = `Created new ${data.overrideFileName || ''} [${data.defaultFileName}] file at ${process.cwd()}`;
		} else {
			msg = `Created new ${data.defaultFileName || ''} file at ${process.cwd()}`;
		}

		resolve( msg );
	} );
}

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = {
	init
};
