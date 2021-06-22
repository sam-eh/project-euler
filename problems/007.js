// What is the 10 001st prime number?
const nextPrime = require('./003').nextPrime;

function xPrime(x) {
    let i = 1;
    let prime = 1;
    while (i <= x) {
        prime = nextPrime(prime);
        i++;
    }
    return prime
}

function run() {
    return xPrime(10001)
}

module.exports = {run}