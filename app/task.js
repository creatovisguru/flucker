'use strict';

// Module Dependencies
var pkg = require( '../package' );

// Private Methods

/**
  * Task constructor
  * @param {obj} options The constructor for creating a new Task
  */
var Task = module.exports = function( options ) {
    options = options || {};
    this.options = options;

    // Instance properties
};

// Static properties
Task.version = pkg.version;

// Public Methods
