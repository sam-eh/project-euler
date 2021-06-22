// Find the sum of all the multiples of 3 or 5 below 1000.

function isMultipleOf(num, factor) {
    return((num % factor) === 0);
}

function isMultipleOfThree(num) {
    return isMultipleOf(num, 3);
}

function isMultipleOfFive(num) {
    return isMultipleOf(num, 5);
}

function run() {
    let i = 1;
    let total = 0;
    while (i < 1000) {
        if (isMultipleOfThree(i) || isMultipleOfFive(i)) {
            total += i;
        }
        i++;
    }

    return total;
}

module.exports = {run: run};