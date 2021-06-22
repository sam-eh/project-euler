// Find the largest palindrome made from the product of two 3-digit numbers.
const primeModule = require('./003');
const isPrime = primeModule.isPrime;

function isPalindrome(num) {
    if (typeof(num) !== 'string') {
        num = num.toString();
    }
    if (num.length === 1) {
        return true;
    }

    // get points of reference in the string
    let i = 0;
    let j = 0;
    if ((num.length % 2) === 0) {
        i = (num.length / 2) - 1;
        j = (num.length / 2);
    } else {
        i = Math.floor(num.length / 2) - 1;
        j = Math.floor(num.length / 2) + 1;
    }

    while (i >= 0 && j <= (num.length - 1)) {
        if (num[i] !== num[j]) {
            return false;
        }
        i--;
        j++;
    }

    return true;
}

function getMaxPalindromeFactor(i) {
    let j = i;
    while (j > 0 && !isPalindrome(i * j)) {
        j--;
    }
    return j;
}

function getMaxPalindromeFactors(init) {
    let i = init;
    let j = getMaxPalindromeFactor(i);
    // i and j define the bounds of the numbers we need to test for other max palindrome factors
    let z = i - 1;
    while (z > j) {
        let y = getMaxPalindromeFactor(z);
        if (i * j < z * y) {
            i = z;
            j = y;
        }
        z--;
    }
    return [i, j];
}

function run() {
    let factors = getMaxPalindromeFactors(999);
    return factors[0] * factors[1];
}

module.exports = {run, isPalindrome, getMaxPalindromeFactor, getMaxPalindromeFactors};