const charReplacer = (text) => {
  const words = text.trim().split(/\s/);
  const res = [];
  let symbols;
  let letters;
  let charSet;

  for (let word of words) {
    charSet = word.split('');
    letters = [];
    symbols = {};

    charSet.forEach((elem, index) => {
      if (/[a-zA-Z]/.test(elem)) {
        letters.push(elem);
      } else {
        symbols[index] = elem;
      }
    });

    letters = letters.reverse();
    for (let index in symbols) {
      letters.splice(index, 0, symbols[index]);
    }

    res.push(letters.join(''));
  }

  return res.join(' ');
};

const replaced = charReplacer('s1ta$%r3t 2   hel^low');
console.log(replaced); // t1ra$%t3s 2   wol^leh
