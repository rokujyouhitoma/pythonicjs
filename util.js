/**
 * @param {Function} childCtor Child class constructor.
 * @param {Function} parentCtor Parent class constructor.
 */
function inherits(childCtor, parentCtor) {
  /** @constructor */
  function tempCtor() {}
  tempCtor.prototype = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
}

/** @type {function} */
exports.inherits = inherits;
