const assert = require('assert');
const solution = require('../problems/009');

describe('getPythagoreanTriplet', function() {
    it('should find 3 and 4 to accompany 5 for pythagorean triplet', function() {
        let answer = solution.getPythagoreanTriplet(5);
        assert.strictEqual(answer.a, 3);
        assert.strictEqual(answer.b, 4);
        assert.strictEqual(answer.c, 5);
    })
});