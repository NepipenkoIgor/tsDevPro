
function summator(...args) {
    if (args.length < 2) {
        return console.log('Enter at least two args');
    }
    
    function checkElType(el, type) {
        if (el === undefined || el === null || Number.isNaN(el)) {
            return false;
        }
        return typeof el === type;
    }

    function validateArgsType() {
        let opt1 = args.every(el => checkElType(el, 'string'));
        let opt2 = args.every(el => checkElType(el, 'number'));
        return (opt1 || opt2) ? true : false;
    }

    if (validateArgsType() === false) {
        return console.log('All arguments should be either valid numbers or strings');
    }

    return args.reduce((accumulator, current) => accumulator + current);
}

console.log(summator(1, 2, 3, NaN));
console.log(summator('a', 'b', 'c'));