#! /usr/bin/env node

// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Project
const mk = require( './lib/mk' );
const utils = require( './lib/utils' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const ARGS = process.argv.slice( 2 ).filter( utils.strIsArg ) || [];
const OPTS = utils.parseOpts( process.argv.slice( 0 ) ) || {};

var COMMAND = ARGS[ 0 ];
var VARIANT = ARGS[ 1 ];

var options = {
	ARGS,
	OPTS,
	COMMAND,
	VARIANT
};

// --------------------------------------------------
// INIT
// --------------------------------------------------
mk.init( options )
	.then(
		console.log,
		console.log
	);
