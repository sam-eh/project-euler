const assert = require('assert');
const solution = require('../problems/003.js');

describe('isPrime', function() {
    it('should evaluate 13 as prime', function() {
        assert.ok(solution.isPrime(13));
    });
    it('should evaluate 4 as not prime', function() {
        assert.rejects(solution.isPrime(4));
    })
});

describe('isFactor', function() {
    it('should return true that 29 is a factor of 13195', function() {
        assert.ok(solution.isFactor(29, 13195));
    })
});

describe('getPrimeFactors', function() {
    it('should return 5,7,13,29 as prime factors for 13195', function() {
        let factors = [...solution.getPrimeFactors(13195)];
        assert.ok(factors.includes(5));
        assert.ok(factors.includes(7));
        assert.ok(factors.includes(13));
        assert.ok(factors.includes(29));
    })
});

describe('getMaxPrimeFactor', function() {
    it('should return 29 as the max prime factor of 13195', function() {
        assert.strictEqual(solution.getMaxPrimeFactor(13195), 29)
    })
});