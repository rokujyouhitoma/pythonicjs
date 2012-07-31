/**
 * @param {string} value .
 * @param {string} fragment .
 * @return {boolean} .
 */
var contains = function(value, fragment) {
    var result = value.search(fragment);
    if (result === -1) {
        return false;
    }
    else if (result > -1) {
        return true;
    }
    else {
        throw new Error('string.contains: ' + result);
    }
};
/** @type {function} */
exports.contains = contains;

/**
 * @param {string} str .
 * @param {string} sub .
 * @param {number} start .
 * @param {number} end .
 * @param {?number=} count .
 * @return {number} .
 */
var count = function(str, sub, start, end, count) {
    start = start ? start : 0;
    end = end ? end : str.length;
    count = count ? count : 0;
    if (end < start) {
        return 0;
    }
    var p = str.indexOf(sub);
    if (p === -1) {
        return count;
    }
    count += 1;
    if (count === str.length) {
        return count;
    }
    return count(str.slice(start, end), sub, start, end, count);
};
/** @type {function} */
exports.count = count;

/**
 * @param {string} str .
 * @param {string} suffix .
 * @return {boolean} .
 */
var endswith = function(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
};
/** @type {function} */
exports.endswith = endswith;

/**
 * @param {string} str .
 * @param {string} sub .
 * @param {?number=} start .
 * @param {?number=} end .
 * @return {number} number or -1(not found).
 */
var find = function(str, sub, start, end) {
    start = start ? start : 0;
    end = end ? end : str.length;
    /** @type {string} */
    str = str.slice(start, end);
    /** @type {number} */
    var res = str.indexOf(sub);
    if (res > -1) {
        res += start;
    }
    return res;
};
/** @type {function} */
exports.find = find;

/**
 * Remove head and tail spaces.
 * @param {string} str .
 * @return {string} .
 */
var strip = function(str) {
    return str.replace(/^\s+|\s+$/g, '');
};
/** @type {function} */
exports.strip = strip;

/**
 * @param {string} str .
 * @param {string} substr .
 * @return {boolean} .
 */
var startwith = function(str, substr) {
    var parttern = new RegExp('^' + substr);
    if (str.search(parttern) === 0) {
        return true;
    }
    else {
        return false;
    }
};
/** @type {function} */
exports.startwith = startwith;
