function isInArray(arr, ...args) {
    if (!Array.isArray(arr)) {
        return console.log(`${arr} is not an array`);
    }
    if (args.length === 0) {
        return console.log('Enter at least one argument except for an array');
    }
    return args.every(el => arr.includes(el));
};

let testArr = [1, 2, 3, 4];

console.log(isInArray(testArr, 1, 5, 3));
console.log(isInArray(testArr, 1, 2, 3));
console.log(isInArray(testArr));