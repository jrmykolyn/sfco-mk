// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node
const fs = require( 'fs' );

// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
function list() {
	var commands = {};

	// Read contents of 'templates/' dir.
	/// TODO[@jrmykolyn] - Refactor to use Promise chain.
	fs.readdir( `${__dirname}/../../templates/`, function( err, data ) {
		if ( err ) {
			return;
		}

		// Parse 'manifest' file for each command.
		data.forEach( ( command ) => {
			commands[ command ] = JSON.parse( fs.readFileSync( `${__dirname}/../../templates/${command}/_manifest.json`, 'utf-8' ) );
		} );

		// Print command variant data to console.
		console.log( `\`mk\` supports the following templates and template variants:`);
		console.log( '-----' );

		for ( let command in commands ) {
			var variantList = Object.keys( commands[ command ] ).filter( variant => variant !== 'default' ).join( '|' );
			var commandStr = variantList.length ? `- ${command} [${variantList}]` : `- ${command}`;

			console.log( commandStr );
		}

		console.log( '\n' );
	} );
}

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = list;
