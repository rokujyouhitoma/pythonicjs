var NotImplementedError = require('./exceptions').NotImplementedError;

/*
 * be based on Python class methods.
 */

/**
 * @param {Array} args .
 * @param {string} implementation_of .
 * @return {number} .
 * @private
 */
var min_max_ = function(args, implementation_of) {
    var length = args.length;
    var first = args[0];
    var last = args[length - 1];

    if (implementation_of === 'min') {
        if (typeof last === 'object' && last.hasOwnProperty('key')) {
            throw new NotImplementedError();
        }
        if (first instanceof Array) {
            return Math.min.apply(null, first);
        }
        return Math.min.apply(null, args);
    }
    else if (implementation_of === 'max') {
        if (typeof last === 'object' && last.hasOwnProperty('key')) {
            throw new NotImplementedError();
        }
        if (first instanceof Array) {
            return Math.max.apply(null, first);
        }
        return Math.max.apply(null, args);
    }
    else {
        throw new Error();
    }
};

/**
 * @param {...*} args The rest of the arguments.
 * @return {number} .
 * @see Python <a href='http://docs.python.org/library/functions.html#max'>max
 * </a> function.
 * @see PyPy pypy/module/__builtin__/functional#max
 */
var max = function(args) {
    return min_max_(arguments, 'max');
};
/** @type {function} */
exports.max = max;

/**
 * @param {...*} args The rest of the arguments.
 * @return {number} .
 * @see Python <a href='http://docs.python.org/library/functions.html#min'>min
 * </a>function.
 * @see PyPy pypy/module/__builtin__/functional#min
 */
var min = function(args) {
    return min_max_(arguments, 'min');
};
/** @type {function} */
exports.min = min;
