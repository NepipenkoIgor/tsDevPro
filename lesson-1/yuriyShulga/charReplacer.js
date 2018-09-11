const charReplacer = text => text
  .trim()
  .split(/\s/)
  .reduce((accum, curVal) => {
    let symbols = {};
    let letters = curVal.split('').filter((char, index) => {
      if (/[^a-zA-Z]/.test(char)) {
        symbols[index] = char;
        return false;
      }
      return true;
    }).reverse();

    for (const symb in symbols) {
      letters.splice(symb, 0, symbols[symb]);
    }

    return [...accum, ...letters, ' '].join('');
  }, ' ');

const replaced = charReplacer('s1ta$%r3t 2   hel^low');
console.log(replaced); // t1ra$%t3s 2   wol^leh
