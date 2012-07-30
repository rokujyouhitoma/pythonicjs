var inherits = require('./util').inherits;

/**
 * ValueError.
 * @param {string} message .
 * @constructor
 * @extends {Error}
 */
var ValueError = function(message) {
  Error.call(this, message);
  this.name = 'ValueError';
};
inherits(ValueError, Error);
exports.ValueError = ValueError;

/**
 * TypeError.
 * @param {string} message .
 * @constructor
 * @extends {Error}
 */
var TypeError = function(message) {
  this.name = 'TypeError';
  this.message = message;
};
inherits(TypeError, Error);
exports.TypeError = TypeError;

/**
 * http://docs.python.org/library/stdtypes.html#dict
 * @param {object} arg .
 * @constructor
 */
var dict = function(arg) {
  this.obj_ = arg || {};
};

/**
 * http://docs.python.org/library/stdtypes.html#dict.get 
 * @param {string} key .
 * @param {*} opt_default .
 * @return {*} .
 */
dict.prototype.get = function(key, opt_default) {
  if(arguments.length === 0) {
    throw new TypeError("get() takes at least 1 arguments (0 given)");
  }
  var obj_ = this.obj_;
  if(key in obj_) {
    return obj_[key];
  }
  return opt_default || null;
};

/**
 * http://docs.python.org/library/stdtypes.html#dict.keys
 */
dict.prototype.keys = function() {
  var keys_ = [];
  var obj_ = this.obj_;
  for(var key in obj_) {
    keys_[keys_.length] = key;
  }
  return keys_;
};

/**
 * http://docs.python.org/library/stdtypes.html#dict.has_key
 * @param {string} key .
 * @return {boolean} .
 */
dict.prototype.has_key = function(key) {
  if(arguments.length === 0) {
    throw new TypeError("has_key() takes at least 1 arguments (0 given)");
  }
  return key in this.obj_;
};

/**
 * http://docs.python.org/library/stdtypes.html#dict.setdefault
 */
dict.prototype.setdefault = function(key, opt_default) {
  if(arguments.length === 0) {
    throw new TypeError("setdefault() takes at least 1 arguments (0 given)");
  } else if(arguments.length < 2) {
    return null;
  }
  var obj_ = this.obj_;
  if(key in obj_) {
    return obj_[key];
  }
  return obj_[key] = opt_default;
};

exports.dict = dict;

/**
 * http://docs.python.org/library/stdtypes.html#set
 * @param {Array|set} iterable .
 * @constructor
 */
var set = function(iterable) {
  throw new Error("not implemented yet");
};

//http://docs.python.org/library/stdtypes.html#set.intersection
set.prototype.intersection = function(other) {
  throw new Error("not implemented yet");
};

//http://docs.python.org/library/stdtypes.html#set.add
set.prototype.add = function(elem) {
  throw new Error("not implemented yet");
};

//http://docs.python.org/library/stdtypes.html#set.difference
set.prototype.difference = function() {
  throw new Error("not implemented yet");
};

//http://docs.python.org/library/stdtypes.html#set.update
set.prototype.update = function() {
  throw new Error("not implemented yet");
};

exports.set = set;
