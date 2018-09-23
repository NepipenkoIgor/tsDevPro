
function reverseString(str) {
  // splitting the argument to get an array of type [['w', 'o', 'r', 'd', 's'], [' ']]
  let arrayedStr = str.split(/([ ])/).map(el => el.split(''));

  // iterating through each word of the argument unless it's a space or single letter
  arrayedStr.forEach((el, i) => {
    if (el.length < 2) return;

    // declaring the var for object that would store non-letters and their indexes
    // {index1: non-letter1, index2: non-letter2}
    const nonLetters = {};

    // iterating through each char of each word of initial arg;
    // excluding non-letters and saving them to obj
    el.forEach((subEl, index) => {
      if (/[^A-Za-z]/.test(subEl)) {
        nonLetters[index + Object.keys(nonLetters).length] = subEl;
        el.splice(index, 1);
      }
    });

    // reversing the arrayed words
    // if there are no non-letters, then joining chars back to words
    el.reverse();
    if (Object.keys(nonLetters).length === 0) {
      arrayedStr[i] = el.join('');
      return;
    }

    // inserting non-letters back to their indexes into the words
    const nonLettersKeys = Object.keys(nonLetters);
    nonLettersKeys.forEach((key) => {
      el.splice(+key, 0, nonLetters[key]);
    });

    // joining reversed chars with non-letters back to words
    arrayedStr[i] = el.join('');
  });

  // joining words back to single string
  arrayedStr = arrayedStr.join('');

  return arrayedStr;
}

console.log(reverseString('s1tar3t 2   low5'));
console.log(reverseString('s1ta$%r3t 2 hel^low'));
console.log(reverseString('s1tar3t 2 hellow'));
