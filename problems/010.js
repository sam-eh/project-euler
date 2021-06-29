// Find the sum of all the primes below two million.
const isFactor = require("./003").isFactor;

let PrimeCounter = () => {
  let currentTotal = 2;
  let primeFactors = [];
  primeFactors.push(2);

  function getPrimeFactors() {
    return primeFactors;
  }

  function getNextPrime() {
    while (true) {
      currentTotal++;
      let i = 0;
      let hasFactor = false;
      while (i < primeFactors.length) {
        if (isFactor(primeFactors[i], currentTotal)) {
          hasFactor = true;
          break;
        }
        if (primeFactors[i] * 2 > currentTotal) {
          break;
        }
        i++;
      }
      if (!hasFactor) {
        primeFactors.push(currentTotal);
        return currentTotal;
      }
    }
  }

  return {
    getNextPrime,
    getPrimeFactors,
  };
};

function sumReducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

function run() {
  let counter = PrimeCounter();
  let i = 1;
  while (i < 2000000) {
    i = counter.getNextPrime();
  }
  let finalPrimes = counter.getPrimeFactors();
  finalPrimes.pop();
  let total = finalPrimes.reduce(sumReducer);
  return total;
}

module.exports = { run, PrimeCounter };
