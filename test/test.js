'use strict';

// MODULES //

var test = require( 'tape' );
var getKeys = require( 'object-keys' );
var setReadOnly = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof setReadOnly === 'function', 'main export is a function' );
	t.end();
});

test( 'the function sets a property on a provided object', function test( t ) {
	var obj = {};
	setReadOnly( obj, 'foo', 'bar' );
	t.equal( obj.foo, 'bar', 'prop foo equals bar' );
	t.end();
});

test( 'the read-only property is not writable', function test( t ) {
	var obj = {};
	setReadOnly( obj, 'foo', 'bar' );
	t.throws( foo, Error, 'property cannot be set' );
	t.end();

	function foo() {
		obj.foo = 'bip';
	}
});

test( 'the read-only property is not configurable', function test( t ) {
	var obj = {};
	setReadOnly( obj, 'foo', 'bar' );
	t.throws( foo, Error, 'property cannot be deleted' );
	t.throws( bar, Error, 'property cannot be reconfigured' );
	t.end();

	function foo() {
		delete obj.foo;
	}
	function bar() {
		Object.defineProperty( obj, 'foo', {
			'value': 'boop',
			'writable': true,
			'configurable': false,
			'enumerable': true
		});
	}
});

test( 'the read-only property is enumerable', function test( t ) {
	var obj = {};
	setReadOnly( obj, 'foo', 'bar' );
	t.equal( getKeys( obj )[ 0 ], 'foo', 'property is enumerable' );
	t.end();
});
