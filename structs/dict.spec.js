describe('dict spec', function() {
  var dict;
  beforeEach(function(){
    dict = require('./dict').dict;
  });
  afterEach(function(){
    dict = undefined;
  });
  //https://bitbucket.org/pypy/pypy/src/169eb17f9894/lib-python/2.7/test/test_dict.py#cl-31
  it('test_keys', function(){
    var d = dict({});
    expect(d.keys()).toEqual([]);
    d = dict({'a': 1, 'b': 2});
    var k = d.keys();
    expect(d.has_key('a')).toBeTruthy();
    expect(d.has_key('b')).toBeTruthy();
    //self.assertRaises(TypeError, d.keys, None);
  });
  //https://bitbucket.org/pypy/pypy/src/169eb17f9894/lib-python/2.7/test/test_dict.py#cl-58
  it('test_has_key', function(){
    var d = dict({});
    //self.assertFalse(d.has_key('a'))
    d = dict({'a': 1, 'b': 2});
    var k = d.keys();
    k.sort();
    expect(k).toEqual(['a', 'b']);
    expect(d.has_key).toThrow();
  });
  //https://bitbucket.org/pypy/pypy/src/169eb17f9894/lib-python/2.7/test/test_dict.py#cl-263
  it('test_get', function(){
    var d = dict({});
    expect(d.get('c')).toEqual(null);
    expect(d.get('c', 3)).toEqual(3);
    d = dict({'a': 1, 'b': 2});
    expect(d.get('c')).toEqual(null);
    expect(d.get('c', 3)).toEqual(3);
    expect(d.get('a')).toEqual(1);
    expect(d.get('a', 3)).toEqual(1);
    //var TypeError = require('./exceptions').TypeError;
    //self.assertRaises(TypeError, d.get);
    //self.assertRaises(TypeError, d.get, None, None, None);
  });
  //https://bitbucket.org/pypy/pypy/src/169eb17f9894/lib-python/2.7/test/test_dict.py#cl-275
  it('test_setdefault', function(){
    var d = dict({});
    expect(d.setdefault('key0')).toBeNull();
    d.setdefault('key0', []);
    expect(d.setdefault('key0')).toBeNull();
    //d.setdefault('key', []).append(3)
    d.setdefault('key', []).push(3);
    //self.assertEqual(d['key'][0], 3)
    expect(d.get('key')[0]).toEqual(3);
    d.setdefault('key', []).push(4);
    expect(d.get('key').length).toEqual(2);
    //self.assertEqual(len(d['key']), 2)
    expect(d.setdefault).toThrow();
  });
});
