
function getUnique(...args) {
    return args.filter((el, i, arr) => {
        return arr.indexOf(el) === i;
    });
}

console.log(getUnique(1,2,3,7,5,3,2,1,1));