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
	return strStartsWith( str, '-' );
}

function strIsArg( str ) {
	return !strStartsWith( str, '-' );
}

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = {
	strStartsWith,
	strIsOpt,
	strIsArg
};
