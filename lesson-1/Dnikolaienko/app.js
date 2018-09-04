// Task 1
function isInArray() {
    let check = arguments[0];
    let arg = [];
    for (a = 1; a < arguments.length; a++) {
            if(check.indexOf(arguments[a]) === -1) {
                arg.push(arguments[a]);
            }
    }

    if(arg.length == 0) {
        return true;
    } else {
        return false;
    }

}

console.log(isInArray([3,7,8],3,7,8));

// Task 2
function summator() {
    let zero = 0;
    for(let i = 0; i < arguments.length; i++) {
        if(isNaN(arguments)) {
            zero += Number(arguments[i]);
        } else {
            zero += arguments[i];
        }
    }
    return zero;
}

console.log(summator(4,5,8,9));

// Task 3
function getUnique() {
    let uniq = [];
    for (j = 0; j < arguments.length; j++) {
        uniq.push(arguments[j]);
    }

    return new Set(uniq);
}

console.log(getUnique(4,5,6,6,4,2,1));

// Task 4
function policeTurn(sentence) {
    let words = sentence.split(' ');
    let reg = /[a-zA-Z]/;
    let resultSentence = '';

    for (let word of words) {
        let pos = 0;
        let reverseWord = '';

        for (let symb of word) {
            if(reg.test(symb)) {
                reverseWord += word[(word.length-1) - pos];
            } else {
                reverseWord += symb;
            }
            pos++;
        }

       resultSentence += ` ${reverseWord}`;
    }

    return resultSentence;
}

let sentence1 = 's1tar3t 2 hellow';
let sentence2 = 's1ta$%r3t 2 hel^low';
let sentence3 = 's1tar3t 2   low5';

console.log(policeTurn(sentence1));


function repeater(str) {
    let double = 1;
    let result = '';
    let char = '';
    for(let j = 0; j < str.length; j++) {
        if(str[j] === str[j+1]) {
            char = str[j];
            double += 1;
        } else {
            if(double > 1) {
                result += `${char}${double}`;
            }
            char = str[j];
            double = 1;
        }
    }
    
    result += `${char}${double}`;
    
    return result;
}

let str = 'aaabbacc';
console.log(repeater(str));