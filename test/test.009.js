const assert = require('assert');
const solution = require('../problems/009');

describe('isPerfectSquare', function() {
    it('should return return true for 25', function() {
        assert.ok(solution.isPerfectSquare(25));
    });

    it('should return return false for 10', function() {
        assert.rejects(solution.isPerfectSquare(10));
    });
});

describe('checkPythagTrip', function() {
    it('should return true for 3, 4, 5', function() {
        assert.ok(solution.checkPythagTrip(3,4,5));
    });
});

describe('getPythagTrips', function() {
    it('should find 3 and 4 to accompany 5 for pythagorean triplet', function() {
        let answer = solution.getPythagTrips(5).triplets[0];
        assert.strictEqual(answer.a, 3);
        assert.strictEqual(answer.b, 4);
        assert.strictEqual(answer.c, 5);
    });
});