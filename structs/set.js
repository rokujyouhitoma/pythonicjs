/**
 * http://docs.python.org/library/stdtypes.html#set
 * @param {Array|set} iterable .
 * @constructor
 */
var Set = function(iterable) {
  throw new Error("not implemented yet");
};

//http://docs.python.org/library/stdtypes.html#set.intersection
Set.prototype.intersection = function(other) {
  throw new Error("not implemented yet");
};

//http://docs.python.org/library/stdtypes.html#set.add
Set.prototype.add = function(elem) {
  throw new Error("not implemented yet");
};

//http://docs.python.org/library/stdtypes.html#set.difference
Set.prototype.difference = function() {
  throw new Error("not implemented yet");
};

//http://docs.python.org/library/stdtypes.html#set.update
Set.prototype.update = function() {
  throw new Error("not implemented yet");
};

/**
 * @param {Array|set} iterable .
 */
var set = function(iterable) {
    return new Set(iterable);
};

exports.set = set;
