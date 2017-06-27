// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node

// Vendor
var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------

// --------------------------------------------------
// DEFINE TASKS
// --------------------------------------------------
/**
 * Wrapper around any/all tasks to be executed when `gulp` is run.
 */
gulp.task( 'default', [ 'styles', 'scripts' ], function() {
	console.log( 'INSIDE TASK: `default`' );
} );

/**
 * Wrapper around any/all style-related tasks.
 */
gulp.task( 'styles', function() {
	console.log( 'INSIDE TASK: `styles`' );
} );

/**
 * Wrapper around any/all script-related tasks.
 */
gulp.task( 'scripts', function() {
	console.log( 'INSIDE TASK: `scripts`' );
} );
