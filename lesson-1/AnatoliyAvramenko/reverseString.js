
function reverseString(str) {
    let arrayedStr = str.split(/([ ])/).map(el => {
        return el.split('');
    });

    arrayedStr.forEach((el, i) => {
        if (el.length < 2) return;

        let nonLetters = {};
        el.forEach((subEl, index) => {
            if (/[^A-Za-z]/.test(subEl)) {
                nonLetters[index + Object.keys(nonLetters).length] = subEl;
                el.splice(index, 1);
            }
        });

        el.reverse();
        if (Object.keys(nonLetters).length === 0) {
            arrayedStr[i] = el.join('');
            return;
        }

        for (key in nonLetters) {
            el.splice(+key, 0, nonLetters[key]);
        }

        arrayedStr[i] = el.join('');
    });
    
    arrayedStr = arrayedStr.join('');

    return arrayedStr;
} 

console.log(reverseString('s1tar3t 2   low5'));
console.log(reverseString('s1ta$%r3t 2 hel^low'));
console.log(reverseString('s1tar3t 2 hellow'));

