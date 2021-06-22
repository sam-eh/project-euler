// What is the largest prime factor of the number 600851475143 ?

function isPrime(num) {
    if (num === 1 || num === 2) {
        return true;
    }

    // only need to check numbers that are half or less 
    let max_check = Math.floor(num / 2);
    let i = 2;
    while (i <= max_check) {
        if (isFactor(i, num)) {
            return false;
        }
        i++;
    }
    return true;
}

function isFactor(x, y) {
    // returns true if x is a factor of y
    return (y % x) === 0;
}

function nextPrime(num) {
    let i = num;
    if (i === 1) {
        return 2;
    }
    if ((i % 2) === 0) {
        i++;
    } else {
        i += 2;
    }

    while (true) {
        if (isPrime(i)) {
            return i;
        }
        i += 2;
    }
}

function testPrimeFactor(num, prime) {
    if (!isFactor(prime, num)) {
        return false;
    } else {
        return num / prime;
    }
}

function getPrimeFactors(num) {
    let i = 2;
    let primeFactors = [];
    while (true) {
        // test our prime number to see if it factors
        testNum = testPrimeFactor(num, i);
        if (!testNum) {
            i = nextPrime(i);
            continue;
        } else {
            if (isPrime(testNum)) {
                primeFactors.push(testNum);
                primeFactors.push(i);
                return primeFactors;
            }
            primeFactors.push(i);
            let allFactors = [...primeFactors, ...getPrimeFactors(testNum)];
            return(new Set(allFactors));
        }
    }
}

function getMaxPrimeFactor(num) {
    let primes = getPrimeFactors(num);
    return Math.max(...primes);
}

function run() {
    return getMaxPrimeFactor(600851475143);
}

module.exports = {run, isPrime, isFactor, getPrimeFactors, getMaxPrimeFactor, nextPrime};