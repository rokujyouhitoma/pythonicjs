//Bisection algorithms.
//https://bitbucket.org/pypy/pypy/src/169eb17f9894/lib-python/2.7/bisect.py

var ValueError = require('./pythonic').ValueError;

/**
 * @param {Array} a .
 * @param {*} x .
 * 
 */
function insort_right(a, x, lo, hi) {
  lo = lo !== undefined ? lo : 0;
  hi = hi !== undefined ? hi : null;
  if(lo < 0) {
    throw new ValueError('lo must be non-negative');
  }
  if(hi === null) {
    hi = a.length;
  }
  while(lo < hi) {
    var mid = Math.floor((lo+hi) / 2);
    if(x < a[mid]) {
      hi = mid;
    } else {
      lo = mid+1;
    }
  }
  var prefix = a.splice(lo, a.length - lo, x);
  return a.concat(prefix);
}

var insort = insort_right; //backward compatibility
exports.insort = insort;
exports.insort_right = insort_right;

function bisect_right(a, x, lo, hi) {
  lo = lo !== undefined ? lo : 0;
  hi = hi !== undefined ? hi : null;
  if(lo < 0) {
    throw new ValueError('lo must be non-negative');
  }
  if(hi === null) {
    hi = a.length;
  }
  while(lo < hi) {
    var mid = Math.floor((lo+hi) / 2);
    if (x < a[mid]) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
}

exports.bisect = bisect_right; //backward compatibility
exports.bisect_right = bisect_right;

function insort_left(a, x, lo, hi) {
  lo = lo !== undefined ? lo : 0;
  hi = hi !== undefined ? hi : null;
  if(lo < 0) {
    throw new ValueError('lo must be non-negative');
  }
  if(hi === null) {
    hi = a.length;
  }
  while(lo < hi) {
    var mid = Math.floor((lo+hi) / 2);
    if(a[mid] < x) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  var prefix = a.splice(lo, a.length - lo, x);
  return a.concat(prefix);
}

exports.insort_left = insort_left;

function bisect_left(a, x, lo, hi) {
  lo = lo !== undefined ? lo : 0;
  hi = hi !== undefined ? hi : null;
  if(lo < 0) {
    throw new ValueError('lo must be non-negative');
  }
  if(hi === null) {
    hi = a.length;
  }
  while(lo < hi) {
    var mid = Math.floor((lo+hi) / 2);
    if(a[mid] < x) {
      lo = mid+1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

exports.bisect_left = bisect_left;
