/*
 * @see https://bitbucket.org/pypy/benchmarks/src/f3830896d637/lib/pypy/lib-python/2.7/test/test_StringIO.py
 */
var StopIteration = require('./exceptions').StopIteration;
var StringIO = require('./StringIO').StringIO;

describe('TestGenericStringIO', function() {
  var _line = '';
  var _lines = '';
  var _fp;
  beforeEach(function() {
    _line = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!';
    for (var i = 0; i < 5; ++i) {
        _lines += _line + '\n';
    }
    _fp = StringIO(_lines);
  });
  afterEach(function() {
    _line = '';
    _lines = '';
    _fp = null;
  });
  //https://bitbucket.org/pypy/pypy/src/0f03693b05ac/lib-python/2.7/test/test_StringIO.py#cl-25
  it('test_reads', function() {
    expect(function() {
        f.seek();
    }).toThrow();
    expect(_fp.read(10)).toEqual(_line.slice(0, 10));
    expect(_fp.readline()).toEqual(_line.slice(10) + '\n');
    expect(_fp.readlines(60).length).toEqual(2);
    _fp.seek(0);
    expect(_fp.readline(-1)).toEqual(_line + '\n');
  });
  //https://bitbucket.org/pypy/pypy/src/0f03693b05ac/lib-python/2.7/test/test_StringIO.py#cl-34
  it('test_writes', function() {
    var f = StringIO();
    //expect(function(){
    //    f.seek();
    //}).toThrow();
    f.write(_line.slice(0, 6));
    f.seek(3);
    f.write(_line.slice(20, 26));
    f.write(_line[52]);
    expect(f.getvalue()).toEqual('abcuvwxyz!');
  });
  //https://bitbucket.org/pypy/pypy/src/0f03693b05ac/lib-python/2.7/test/test_StringIO.py#cl-43
  it('test_writelines', function() {
    var f = StringIO();
    f.writelines([_line[0], _line[1], _line[2]]);
    f.seek(0);
    expect(f.getvalue()).toEqual('abc');
  });
  //https://bitbucket.org/pypy/pypy/src/0f03693b05ac/lib-python/2.7/test/test_StringIO.py#cl-56
  it('test_truncate', function() {
    var f = StringIO();
    expect(f.closed).toBeFalsy();
    f.close();
    expect(f.closed).toBeTruthy();
    f = StringIO('abc');
    expect(f.closed).toBeFalsy();
    f.close();
    expect(f.closed).toBeTruthy();
  });
  //https://bitbucket.org/pypy/pypy/src/0f03693b05ac/lib-python/2.7/test/test_StringIO.py#cl-81
  if ('test_isatty', function() {
    var f = StringIO();
    expect(f.isatty()).toBeFalsy();
    f.close();
  });
  //https://bitbucket.org/pypy/pypy/src/0f03693b05ac/lib-python/2.7/test/test_StringIO.py#cl-88
  it('test_iterator', function() {
    expect('__iter__' in _fp).toBeTruthy();
    expect('next' in _fp).toBeTruthy();
    var i = 0;
    var line;
    expect(function() {
        while (true) {
            line = _fp.next();
            i += 1;
        }
    }).toThrow();
    expect(i).toEqual(5);
    _fp.close();
  });
});
