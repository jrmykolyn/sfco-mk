// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
function strStartsWith( str, chars ) {
	if ( !str || !chars ) {
		return false;
	}

	return str.substring( 0, chars.length ) === chars;
}

function strIsOpt( str ) {
	return strStartsWith( str, '-' ) || strStartsWith( str, '--' );
}

function strIsArg( str ) {
	return !strStartsWith( str, '-' );
}

function sanitizeOptKey( key ) {
	if ( typeof key !== 'string' ) {
		return key;
	}

	if ( strStartsWith( key, '--' ) ) {
		return key.substring( 2 );
	} else if ( strStartsWith( key, '-' ) ) {
		return key.substring( 1 );
	} else {
		return key;
	}
}

function parseOpts( opts ) {
	var output = {};

	if ( !Array.isArray( opts ) || !opts.length ) {
		return output;
	}

	output = opts.filter( ( opt ) => {
		return strIsOpt( opt )
	} )
	.map( ( opt ) => {
		return opt.split( '=' );
	} )
	.reduce( ( obj, opt ) => {
		var [ key, val ] = opt;

		obj[ sanitizeOptKey( key ) ] = val;

		return obj;
	}, {} );

	return output;
}


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = {
	parseOpts,
	strStartsWith,
	strIsOpt,
	strIsArg
};
