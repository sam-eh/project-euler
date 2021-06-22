const assert = require('assert');
const solution = require('../problems/004.js');

describe('isPalindrome', function() {
    it('should return true for 1001', function() {
        assert.ok(solution.isPalindrome(1001));
    });
    it('should return true for 101', function() {
        assert.ok(solution.isPalindrome(101));
    });
    
    it('should return false for 1002', function() {
        assert.rejects(solution.isPalindrome(1002));
    });
    it('should return false for 102', function() {
        assert.rejects(solution.isPalindrome(102));
    });
});

describe('getMaxPalindromeFactor', function() {
    it('should return 91 as the max palindrome factor for 99', function() {
        assert.strictEqual(solution.getMaxPalindromeFactor(99), 91);
    })
});

describe('getMaxPalindromeFactors', function() {
    it('should return 99 and 91 with an init of 99', function() {
        let factors = solution.getMaxPalindromeFactors(99);
        assert.ok(factors.includes(91));
        assert.ok(factors.includes(99));
    })
})