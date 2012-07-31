var inherits = require('./util').inherits;
var ValueError = require('./exceptions').ValueError;
var StopIteration = require('./exceptions').StopIteration;
var buildin = require('./buildin');
var string = require('./string');


/**
 * StringIO
 * @see Python <a href='http://docs.python.org/library/stringio.html'>StringIO</
a> modules.
 */

/** @const */
var EINVAL = 22;

/**
 * @param {boolean} closed .
 */
function _complain_ifclosed(closed) {
    if (closed) {
        throw new ValueError('I/O operation on closed file');
    }
}
/**
 * StringIO is based on Python StringIO build-in modules.
 * @param {?string=} buf .
 * @constructor
 * @extends {Object}
 * @private
 */
var StringIO_ = function(buf) {
    buf = buf ? buf : '';
    this.buf = buf;
    this.len = buf.length;
    this.buflist = [];
    this.pos = 0;
    this.closed = false;
    this.softspace = 0;
};
inherits(StringIO_, Object);

/**
 * @return {StringIO_} .
 */
StringIO_.prototype.__iter__ = function() {
    return this;
};

/**
 * @return {string} read line.
 */
StringIO_.prototype.next = function() {
    _complain_ifclosed(this.closed);
    var r = this.readline();
    if (!r) {
        throw new StopIteration();
    }
    return r;
};
StringIO_.prototype['next'] = StringIO_.prototype.next;

/**
 * Free the memory buffer.
 */
StringIO_.prototype.close = function() {
    if (!this.closed) {
        this.closed = true;
        delete this.buf;
        delete this.pos;
    }
};
StringIO_.prototype['close'] = StringIO_.prototype.close;

/**
 * Returns false because StringIO objects are not connected to a tty-like
 * device.
 * @return {boolean} .
 */
StringIO_.prototype.isatty = function() {
  _complain_ifclosed(this.closed);
  return false;
};
StringIO_.prototype['isatty'] = StringIO_.prototype.isatty;

/**
 * Set the file's current position.
 *
 * The mode argument is optional and defaults to 0 (absolute file
 * positioning); other values are 1 (seek relative to the current
 * position) and 2 (seek relative to the file's end).
 * There is no return value.
 * @param {number} pos .
 * @param {number} mode .
 */
StringIO_.prototype.seek = function(pos, mode) {
    mode = mode ? mode : 0;
    _complain_ifclosed(this.closed);
    if (this.buflist) {
        this.buf += this.buflist.join('');
        this.buflist = [];
    }
    if (mode === 1) {
        pos += this.pos;
    } else if (mode === 2) {
        pos += this.len;
    }
    this.pos = buildin.max(0, pos);
};
StringIO_.prototype['seek'] = StringIO_.prototype.seek;

/**
 * Return the file's current position.
 * @param {number} pos .
 * @param {number} mode .
 * @return {number} pos.
 */
StringIO_.prototype.tell = function(pos, mode) {
    mode = mode ? mode : 0;
    _complain_ifclosed(this.closed);
    return this.pos;
};
StringIO_.prototype['tell'] = StringIO_.prototype.tell;

/**
 * @param {number} n .
 * @return {string} .
 */
StringIO_.prototype.read = function(n) {
    n = n ? n : -1;
    _complain_ifclosed(this.closed);
    if (this.buflist) {
        this.buf += this.buflist.join('');
        this.buflist = [];
    }
    var newpos = null;
    if (n === null || n < 0) {
        newpos = this.len;
    } else {
        newpos = buildin.min(this.pos + n, this.len);
    }
    var r = this.buf.slice(this.pos, newpos);
    this.pos = newpos;
    return r;
};
StringIO_.prototype['read'] = StringIO_.prototype.read;

/**
 * @param {?number=} length .
 * @return {string} .
 */
StringIO_.prototype.readline = function(length) {
    length = length ? length : null;
    _complain_ifclosed(this.closed);
    if (this.buflist) {
        this.buf += this.buflist.join('');
        this.buflist = [];
    }
    var i = string.find(this.buf, '\n', this.pos);
    var newpos = null;
    if (i < 0) {
        newpos = this.len;
    } else {
        newpos = i + 1;
    }
    if (!(length === null) && length > 0) {
        if ((this.pos + length) < newpos) {
            newpos = this.pos + length;
        }
    }
    var r = this.buf.slice(this.pos, newpos);
    this.pos = newpos;
    return r;
};
StringIO_.prototype['readline'] = StringIO_.prototype.readline;

/**
 * @param {number} sizehint .
 * @return {string} lines.
 */
StringIO_.prototype.readlines = function(sizehint) {
    sizehint = sizehint ? sizehint : 0;
    var total = 0;
    var lines = [];
    var line = this.readline();
    while (line) {
        lines.push(line);
        total += line.length;
        if (0 < sizehint && sizehint <= total) {
            break;
        }
        line = this.readline();
    }
    return lines;
};
StringIO_.prototype['readlines'] = StringIO_.prototype.readlines;

/**
 * @param {?number=} size .
 */
StringIO_.prototype.truncate = function(size) {
    size = size ? size : null;
    _complain_ifclosed(this.closed);
    if (size === null) {
        size = this.pos;
    } else if (size < 0) {
        throw new IOError(EINVAL, 'Negative size not allowed');
    } else if (size < this.pos) {
        this.pos = size;
    }
    this.buf = this.getvalue().slice(0, size);
    this.len = size;
};
StringIO_.prototype['truncate'] = StringIO_.prototype.truncate;

/**
 * @param {string} s .
 */
StringIO_.prototype.write = function(s) {
    //Write a string to the file.
    //There is no return value.
    _complain_ifclosed(this.closed);
    if (s === '') {
        return;
    }
    var spos = this.pos;
    var slen = this.len;
    if (spos === slen) {
        this.buflist.push(s);
        this.len = this.pos = spos + s.length;
        return;
    }
    if (spos > slen) {
        var str;
        var i;
        var len = spos - slen;
        for (i = 0; i < len; i++) {
            str += '\0';
        }
        this.buflist.push(str);
        slen = spos;
    }
    var newpos = spos + s.length;
    if (spos < slen) {
        if (this.buflist) {
            this.buf += this.buflist.join('');
        }
        this.buflist = [this.buf.substring(0, spos), s,
                        this.buf.substring(newpos, s.length)];
        this.buf = '';
        if (newpos > slen) {
            slen = newpos;
        }
    } else {
        this.buflist.push(s);
        slen = newpos;
    }
    this.len = slen;
    this.pos = newpos;
};
StringIO_.prototype['write'] = StringIO_.prototype.write;

/**
 * @param {Array|Object} iterable .
 */
StringIO_.prototype.writelines = function(iterable) {
    var key;
    var line;
    for (key in iterable) {
        line = iterable[key];
        this.write(line);
    }
};
StringIO_.prototype['writelines'] = StringIO_.prototype.writelines;

/**
 *
 */
StringIO_.prototype.flush = function() {
    _complain_ifclosed(this.closed);
};
StringIO_.prototype['flush'] = StringIO_.prototype.flush;

/**
 * @return {string} .
 */
StringIO_.prototype.getvalue = function() {
    if (this.buflist) {
        this.buf += this.buflist.join('');
        this.buflist = [];
    }
    return this.buf;
};
StringIO_.prototype['getvalue'] = StringIO_.prototype.getvalue;

/**
 * @param {?string=} buf .
 * @return {StringIO_} .
 */
var StringIO = function(buf) {
    return new StringIO_(buf);
};

/** @type {function} */
exports.StringIO = StringIO;
