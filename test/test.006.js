const assert = require('assert');
const { sumNaturalNumbers } = require('../problems/006.js');
const solution = require('../problems/006.js');

describe('sumNaturalNumbers', function() {
    it('sum of first 10 natural numbers should be 55', function() {
        assert.strictEqual(solution.sumNaturalNumbers(10), 55);
    });
});

describe('sumSquareDiff', function() {
    it('sum square difference for first 10 natural numbers should be 2640', function() {
        assert.strictEqual(solution.sumSquareDiff(10), 2640);
    })
})