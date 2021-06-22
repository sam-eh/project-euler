const assert = require('assert');
const solution = require('../problems/005.js');

describe('getFactors', function() {
    it('should return 1,2,4,5,10,20 as factors for 20', function() {
        let factors = solution.getFactors(20);
        assert.ok(factors.includes(1));
        assert.ok(factors.includes(2));
        assert.ok(factors.includes(4));
        assert.ok(factors.includes(5));
        assert.ok(factors.includes(10));
        assert.ok(factors.includes(20));
    });
});

describe('getSmallestMultiple', function() {
    it('should return 2520 as the smallest multiple for the numbers 1 through 10', function() {
        assert.strictEqual(solution.getSmallestMultiple(10), 2520);
    });
});
