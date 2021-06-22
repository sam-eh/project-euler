let myArgs = process.argv.slice(2);
myArgs.forEach(arg => {
    console.log('\n~~~~');
    console.log('problem ' + arg);
    try {
        let prob = require('./problems/' + arg);
        console.log(prob.run());
    } catch (e) {
        console.log('could not run script for ' + arg);
        console.log(e);
    }
    console.log('~~~~');
})
