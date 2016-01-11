'use strict';

var setReadOnly = require( './../lib' );

var foo = {};

setReadOnly( foo, 'beep', 'boop' );

try {
	foo.beep = 'bop';
} catch ( err ) {
	console.error( err.message );
}
