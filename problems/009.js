/*
    There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    Find the product abc.
*/

function isPerfectSquare(num) {
    let root = Math.sqrt(num);
    let root_string = String(root);
    if (root_string.indexOf('.') == -1) {
        return true;
    } else {
        return false;
    }
}

function checkPythagTrip(a, b, c) {
    return( (a**2 + b**2) === c**2 );
}

function getPythagTrips(c) {
    let a = 0;
    let b = 0;

    let i = c;
    i--;

    let trips = [];

    while (i > c/2) {
        let a_sq = c**2 - i**2;
        if (isPerfectSquare(a_sq)) {
            a = Math.sqrt(a_sq);
            trips.push({
                "a": a,
                "b": i,
                "c": c
            });
        }
        i--;
    }

    let success_val = trips.length > 0;

    return({
        "success": success_val,
        "triplets": trips
    });
}

function run() {
    let sum_limit = 1000;
    let i = sum_limit - 3;
    while (i > 3) {
        let trips = getPythagTrips(i);
        if (trips.success) {
            let trips_num = trips.triplets.length;
            let j = 0;
            while (j < trips_num) {
                let this_trip = trips.triplets[j];
                let this_sum = this_trip.a + this_trip.b + this_trip.c;
                if (this_sum === sum_limit) {
                    return(this_trip.a * this_trip.b * this_trip.c);
                }
                j++;
            }
        }
        i--;
    }
    return 0;
}

module.exports = {run, getPythagTrips, isPerfectSquare, checkPythagTrip};