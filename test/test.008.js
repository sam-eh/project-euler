const assert = require('assert');
const solution = require('../problems/008');

describe('findConsecutiveSeries', function() {
    it('should find a largest product in the series to be 9*9*8*9 = 5832', function() {
        assert.strictEqual(solution.findConsecutiveSeries(4), 5832);
    })
})