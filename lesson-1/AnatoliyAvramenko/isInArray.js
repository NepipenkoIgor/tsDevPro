function isInArray(arr, ...args) {
    try {
        if (!Array.isArray(arr)) {
            throw new Error(`${arr} is not an array`);
        }
        if (args.length === 0) {
            throw new Error('Enter at least one argument except for an array');
        }
        return args.every(el => arr.includes(el));

    } catch(e) {
        console.log(e);
        return false;
    }
};

let testArr = [1, 2, 3, 4];

console.log(isInArray(testArr, 1, 5, 3));
console.log(isInArray(testArr, 1, 2, 3));
console.log(isInArray(testArr));

console.log(isInArray(50, 1, 2, 3));