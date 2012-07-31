describe('buildin.max', function() {
    var max;
    beforeEach(function() {
        max = require('./buildin').max;
    });
    it('call buildin.max', function() {
        expect(max(1, 2)).toEqual(2);

        //TODO
        //NotImplementedError
        expect(function() {
            expect(max(1, 2, {key: function(x) {return -x;}})).toEqual(1);
        }).toThrow();
        expect(max([1, 2, 3])).toEqual(3);

        //TODO
        //NotImplementedError
        expect(function() {
            expect(max([1, 2, 3], {key: function(x) {return -x;}})).toEqual(1);
        }).toThrow();
    });
    //TODO
});

describe('buildin.min', function() {
    //TODO
});
