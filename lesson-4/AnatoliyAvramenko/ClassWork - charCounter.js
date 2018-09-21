
const charCounter = (str) => {
  try {
    if (typeof str !== 'string') {
      throw new Error('Type of argument must be a string');
    }
    if (/[^a-zа-я]/i.test(str) === true) {
      throw new Error('String should contain the letters only, no digits');
    }
  } catch (e) {
    console.log(e);
    return;
  }

  let counter = 1;
  let output = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
      continue;
    }

    output += counter + str[i];
    counter = 1;
  }

  return output;
};

console.log(charCounter('aaabcdkkk'));
console.log(charCounter('hhhhhhhllmnkkkkab18'));
