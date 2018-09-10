// Task 1
function isInArray(...args) {
  const check = args.shift(); // получаем массив с нужными нам числами

  return args.every(elem => check.includes(elem));
}

console.log(isInArray([3,7,8],3,7,8));

// Task 2
function summator(...args) {
  return args.reduce((sum, current) => sum + current);
}

console.log(summator(4, 5, 8, 9));

// Task 3
function getUnique(...args) {
  const uniq = Array.from(args);
  return new Set(uniq); // получаем коллекцию уникальных чисел
}

console.log(getUnique(4, 5, 6, 6, 4, 2, 1));

// Task 4
function policeTurn(sentence) {
  const words = sentence.split(' '); // разбиваем предложения по словам
  const reg = /[a-zA-Z]/; // инициализируем регулярное выражение
  const resultSentence = []; // объявляем пустую строку

  for (let word of words) {
    let position = 0;
    let newWord = '';

    for(let char of word) {
        if(reg.test(char)) {
            newWord += word[(word.length-1) - position];
        } else {
            newWord += char;
        }
        position++;
    }
    resultSentence.push(newWord);
  }
  return resultSentence.join(' ');

}

const sentence1 = 's1tar3t 2 hellow';
const sentence2 = 's1ta$%r3t 2 hel^low';
const sentence3 = 's1tar3t 2   low5';

console.log(policeTurn(sentence1));


function repeater(str) {
  let double = 1; // инициализируем числовую переменую
  let result = ''; // переменая результат

  for (let j = 0; j < str.length; j++) {
    if (str[j] === str[j + 1]) { // проверяем текущий символ с последующим
      result += str[j] + double;
      double += 1;
    } else {
      if (double > 1) {
        result += str[j] + double;
      }
      double = 1;
    }
  }

  return result;
}

const str = 'aaabbacc';
console.log(repeater(str));
