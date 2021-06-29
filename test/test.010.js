const assert = require("assert");
const solution = require("../problems/010");

describe("PrimeCounter", function () {
  it("should find the next sets of primes", function () {
    let counter = solution.PrimeCounter();
    assert.strictEqual(counter.getNextPrime(), 3);
    assert.strictEqual(counter.getNextPrime(), 5);
    assert.strictEqual(counter.getNextPrime(), 7);
    assert.strictEqual(counter.getNextPrime(), 11);
    assert.strictEqual(counter.getNextPrime(), 13);
    assert.strictEqual(counter.getNextPrime(), 17);
  });
});
