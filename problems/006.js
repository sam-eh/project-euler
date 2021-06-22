// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumNaturalNumbers(num, power = 1) {
    if (num <= 0) {
        throw EvalError('num should be a natural number');
    }
    if (num === 1) {
        return 1;
    } else {
        return (num ** power) + sumNaturalNumbers(num - 1, power);
    }
}

function sumSquareDiff(num) {
    return (sumNaturalNumbers(num) ** 2) - sumNaturalNumbers(num, 2);
}

function run() {
    return sumSquareDiff(100);
}

module.exports = {sumNaturalNumbers, sumSquareDiff, run};