var TypeError = require('./../exceptions').TypeError;

/**
 * http://docs.python.org/library/stdtypes.html#dict
 * @param {object} arg .
 * @constructor
 */
var Dict = function(arg) {
    this.obj_ = arg || {};
};

/**
 * http://docs.python.org/library/stdtypes.html#dict.get 
 * @param {string} key .
 * @param {*} opt_default .
 * @return {*} .
 */
Dict.prototype.get = function(key, opt_default) {
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
Dict.prototype.keys = function() {
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
Dict.prototype.has_key = function(key) {
  if(arguments.length === 0) {
    throw new TypeError("has_key() takes at least 1 arguments (0 given)");
  }
  return key in this.obj_;
};

/**
 * http://docs.python.org/library/stdtypes.html#dict.setdefault
 */
Dict.prototype.setdefault = function(key, opt_default) {
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

/**
 * http://docs.python.org/library/stdtypes.html#dict
 * @param {object} arg .
 */
var dict = function(arg) {
    return new Dict(arg);
};

exports.dict = dict;
