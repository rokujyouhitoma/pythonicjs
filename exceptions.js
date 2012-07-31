var inherits = require('./util').inherits;

/**
 * NotImplementedError.
 * @param {string=} message .
 * @constructor
 * @extends {Error}
 */
var NotImplementedError = function(message) {
    this.name = 'NotImplementedError';
    this.message = message || 'not implemented yet';
};
inherits(NotImplementedError, Error);
/** @type {NotImplementedError} */
exports.NotImplementedError = NotImplementedError;

/**
 * StopIteration
 * @param {string=} message .
 * @constructor
 * @extends {Error}
 */
var StopIteration = function(message) {
   this.name = 'StopIteration';
   this.message = message || message;
};
inherits(StopIteration, Error);
/** @type {StopIteration} */
exports.StopIteration = StopIteration;

/**
 * ValueError.
 * @param {string} message .
 * @constructor
 * @extends {Error}
 */
var ValueError = function(message) {
  this.name = 'ValueError';
  this.message = message || '';
};
inherits(ValueError, Error);
/** @type {ValueError} */
exports.ValueError = ValueError;

/**
 * TypeError.
 * @param {string} message .
 * @constructor
 * @extends {Error}
 */
var TypeError = function(message) {
  this.name = 'TypeError';
  this.message = message || '';
};
inherits(TypeError, Error);
/** @type {TypeError} */
exports.TypeError = TypeError;
