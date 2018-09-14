function getUnique(...array) {
    let Set = require("./Set.js");
    Set.init(array);
    return Set.list;
}

console.log(getUnique(1, 2, 3, 4, 10, 1, 3, 5)); // 1, 2, 3, 4, 10, 5
console.log(getUnique(1, 2, 3, 4, 1, 3, 5, null )); // 1, 2, 3, 4, 5, null

