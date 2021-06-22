// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function nextTerm(terms) {
    return(terms[0] + terms[1]);
}

function run() {
    let terms = [1, 2];
    let total = 0;
    while(terms[0] < 4000000) {
        let term = nextTerm(terms);
        let oldTerm = terms.shift();
        if ((oldTerm % 2) === 0) {
            total += oldTerm;
        }
        terms.push(term);
    }
    return total;
}

module.exports = {run: run};