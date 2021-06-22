// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
const { isPrime } = require('./003');
const primeModule = require('./003');

function getFactors(num) {
    const primeFactors = primeModule.getPrimeFactors(num);
    let allFactors = [1,...primeFactors];
    if (!primeModule.isPrime(num)) {
        allFactors.push(num);
    }

    primeFactors.forEach((x) => {
        let companion = num / x;
        if (!allFactors.includes(companion)) {
            allFactors.push(companion);
        }
        if (!primeModule.isPrime(companion)) {
            // get factors for this companion to see if there are others to add
            let companionFactors = getFactors(companion);
            companionFactors.forEach(x => {
                if (!allFactors.includes(x)) {
                    allFactors.push(x);
                }
            });
        }
    });

    return allFactors;
}

function multipleReducer(accumulator, currentValue) {
    return accumulator * currentValue;
}

function getSmallestMultiple(num) {
    let i = 1;
    let minFactors = [];
    minFactors.push(i);
    i = primeModule.nextPrime(i);

    while (i <= num) {
        let power = 1;
        while ((i**power) <= num) {
            ++power;
        }
        if (power !== 1) {
            minFactors.push(i**(power - 1));
        }
        i = primeModule.nextPrime(i);
    }
    
    return minFactors.reduce(multipleReducer);
}

function run() {
    return getSmallestMultiple(20);
}

module.exports = {run, getSmallestMultiple, getFactors};