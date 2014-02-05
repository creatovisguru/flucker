'use strict';

// Module Dependencies
var pkg = require( '../package' );

// Private Methods

/**
  * Person constructor
  * @param {obj} options The constructor for creating a new Person
  */
var Person = module.exports = function( options ) {
    options = options || {};
    this.options = options;

    // Instance properties
    this.first_name     = this.options.firstName;
    this.last_name      = this.options.lastName;
    this.email_address  = this.options.emailAddress;
};

// Static properties
Person.version = pkg.version;

// Public Methods
