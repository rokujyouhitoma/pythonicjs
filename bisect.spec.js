describe('bispect spec', function() {

  describe('test bisect left', function() {
    var bisect_left;
    beforeEach(function() {
      bisect_left = require('./bisect').bisect_left;
    });
    afterEach(function() {
      bisect_left = undefined;
    });
    it('', function() {
      var a = [0, 5, 6, 6, 6, 7];
      expect(bisect_left(a, null)).toEqual(0);
      expect(bisect_left(a, -3)).toEqual(0);
      expect(bisect_left(a, 0)).toEqual(0);
      expect(bisect_left(a, 3)).toEqual(1);
      expect(bisect_left(a, 5)).toEqual(1);
      expect(bisect_left(a, 5.5)).toEqual(2);
      expect(bisect_left(a, 6)).toEqual(2);
      expect(bisect_left(a, 6.0)).toEqual(2);
      expect(bisect_left(a, 6.1)).toEqual(5);
      expect(bisect_left(a, 7)).toEqual(5);
      expect(bisect_left(a, 8)).toEqual(6);
      a = [];
      expect(bisect_left(a, 123)).toEqual(0);
      a = [9];
      expect(bisect_left(a, -123)).toEqual(0);
      expect(bisect_left(a, 9)).toEqual(0);
      expect(bisect_left(a, 123)).toEqual(1);
      a = [9, 9];
      expect(bisect_left(a, -123)).toEqual(0);
      expect(bisect_left(a, 9)).toEqual(0);
      expect(bisect_left(a, 123)).toEqual(2);
      a = [4, 6, 6, 9];
      expect(bisect_left(a, 6, 0)).toEqual(1);
      expect(bisect_left(a, 6, 1)).toEqual(1);
      expect(bisect_left(a, 6, 2)).toEqual(2);
      expect(bisect_left(a, 6, 3)).toEqual(3);
      expect(bisect_left(a, 6, 4)).toEqual(4);
      expect(bisect_left(a, 6, 0, 0)).toEqual(0);
      expect(bisect_left(a, 6, 0, 1)).toEqual(1);
      expect(bisect_left(a, 6, 0, 2)).toEqual(1);
      expect(bisect_left(a, 6, 0, 3)).toEqual(1);
      expect(bisect_left(a, 6, 0, 4)).toEqual(1);
    });
  });

  describe('test bisect right', function() {
    var bisect_right;
    beforeEach(function() {
      bisect_right = require('./bisect').bisect_right;
    });
    afterEach(function() {
      bisect_right = undefined;
    });
    it('', function() {
      var a = [0, 5, 6, 6, 6, 7];
      //expect(bisect_right(a, null)).toEqual(0);
      expect(bisect_right(a, 0)).toEqual(1);
      expect(bisect_right(a, -3)).toEqual(0);
      expect(bisect_right(a, 0)).toEqual(1);
      expect(bisect_right(a, 3)).toEqual(1);
      expect(bisect_right(a, 5)).toEqual(2);
      expect(bisect_right(a, 5.5)).toEqual(2);
      expect(bisect_right(a, 6)).toEqual(5);
      expect(bisect_right(a, 6.0)).toEqual(5);
      expect(bisect_right(a, 6.1)).toEqual(5);
      expect(bisect_right(a, 7)).toEqual(6);
      expect(bisect_right(a, 8)).toEqual(6);
      a = [];
      expect(bisect_right(a, 123)).toEqual(0);
      a = [9];
      expect(bisect_right(a, -123)).toEqual(0);
      expect(bisect_right(a, 9)).toEqual(1);
      expect(bisect_right(a, 123)).toEqual(1);
      a = [9, 9];
      expect(bisect_right(a, -123)).toEqual(0);
      expect(bisect_right(a, 9)).toEqual(2);
      expect(bisect_right(a, 123)).toEqual(2);
      a = [4, 6, 6, 9];
      expect(bisect_right(a, 6, 0)).toEqual(3);
      expect(bisect_right(a, 6, 1)).toEqual(3);
      expect(bisect_right(a, 6, 2)).toEqual(3);
      expect(bisect_right(a, 6, 3)).toEqual(3);
      expect(bisect_right(a, 6, 4)).toEqual(4);
      expect(bisect_right(a, 6, 0, 0)).toEqual(0);
      expect(bisect_right(a, 6, 0, 1)).toEqual(1);
      expect(bisect_right(a, 6, 0, 2)).toEqual(2);
      expect(bisect_right(a, 6, 0, 3)).toEqual(3);
      expect(bisect_right(a, 6, 0, 4)).toEqual(3);
    });
  });

  describe('test insort right', function() {
    var insort_right;
    beforeEach(function() {
      insort_right = require('./bisect').insort_right;
    });
    afterEach(function() {
      insort_right = undefined;
    });
    it('', function() {
      var a = [0, 5, 6, 6, 6, 7];
      a = insort_right(a, 6);
      expect(a).toEqual([0, 5, 6, 6, 6, 6, 7]);
    });
  });

  describe('test insort left', function() {
    var insort_left;
    beforeEach(function() {
      insort_left = require('./bisect').insort_left;
    });
    afterEach(function() {
      insort_left = undefined;
    });
    it('', function() {
      var a = [0, 5, 6, 6, 6, 7];
      a = insort_left(a, 6);
      expect(a).toEqual([0, 5, 6, 6, 6, 6, 7]);
    });
  });
});
