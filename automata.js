var clone_ = function(obj) {
  var f_ = function() {};
  f_.prototype = obj;
  var o_ = new f();
  return o_;
};

//https://gist.github.com/3158352

var bisect = require('./bisect');

/**
 * @param {Array} start_state .
 * @constructor
 */
function NFA(start_state) {
  this.EPSILON = {};
  this.ANY = {};

  //__init__
  this.transitions = {};
  this.final_states = {};
  this._start_state = start_state;
}

/***/
NFA.prototype.__defineGetter__('start_state', function() {
  return this._expand(clone_(this._start_state));
});

/***/
NFA.prototype.__defineSetter__('start_state', function(value) {
  throw new Error('not implemented yet');
});

/**
 * @param {*} src .
 * @param {*} input .
 * @param {*} dest .
 */
NFA.prototype.add_transition = function(src, input, dest) {
  throw new Error('not implemented yet');
};

/**
 * @param {*} state .
 */
NFA.prototype.add_final_state = function(state) {
  throw new Error('not implemented yet');
};

/**
 * @param {*} states .
 */
NFA.prototype.is_final = function(states) {
  throw new Error('not implemented yet');
};

/**
 * @param {*} states .
 */
NFA.prototype._expand = function(states) {
  var frontier = _clone(states);
  for (var k in frontier) {
    var state = frontier[key];
    delete frontier[key];
    //new_states = this.transitions.
  }
};
