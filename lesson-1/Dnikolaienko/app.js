// Task 1
function isInArray(...args) {
  const check = args[0]; // получаем массив с нужными нам числами
  const arg = []; // инициализируем пустой массив несоответсвий
  for (let a = 1; a < args.length; a++) {
    if (check.indexOf(args[a]) === -1) { // в цикле проверяем если последующие данные соответсветсвуют данным в массиве с числами
      arg.push(args[a]); // добавляем не соответсвия в массив несоответсвий
    }
  }

  let answer; // инициализирую ответ
  if (arg.length === 0) { // если массив несоответсвий пусто то возращаю true, в другом случае false
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

console.log(isInArray([3,7,8],3,7,8));

// Task 2
function summator(...args) {
  let zero = 0; // инициализирую числовую переменую
  for (let i = 0; i < args.length; i++) { // прохожу циклом по спред оператору
    if (isNaN(args)) { // если данные являются не числом то принудительно приводим их к числу
      zero += Number(args[i]);
    } else {
      zero += args[i]; // суммирует всё с числовой переменой
    }
  }
  return zero;
}

console.log(summator(4,5,8,9));

// Task 3
function getUnique(...args) {
  const uniq = []; // объявляем пустой массив
  for (let j = 0; j < args.length; j++) {
    uniq.push(args[j]); // добавляем все входящие данные в пустой массив
  }

  return new Set(uniq); // получаем коллекцию уникальных чисел
}

console.log(getUnique(4,5,6,6,4,2,1));

// Task 4
function policeTurn(sentence) {
  const words = sentence.split(' '); // разбиваем предложения по словам
  const reg = /[a-zA-Z]/; // инициализируем регулярное выражение
  let resultSentence = ''; // объявляем пустую строку

  for (let a; a < words.length; a++) {
    let reverseWord = '';

    for (let b = 0; b < words[a].length; b++) { // получаем символ из слова
      if (reg.test(words[b])) { // проверяем соотвествие символа к регулярному выражению 
        reverseWord += words[b][(words[b].length - 1) - b];
      } else {
        reverseWord += words[b];
      }
    }

    resultSentence += ` ${reverseWord}`; // используя ес6 тимплейте собираем заново предложение
  }

  return resultSentence;
}

const sentence1 = 's1tar3t 2 hellow';
const sentence2 = 's1ta$%r3t 2 hel^low';
const sentence3 = 's1tar3t 2   low5';

console.log(policeTurn(sentence1));


function repeater(str) {
  let double = 1; // инициализируем числовую переменую
  let result = ''; // переменая результат
  let char = ''; // переменая текущего символа
  for (let j = 0; j < str.length; j++) {
    if (str[j] === str[j+1]) { // проверяем текущий символ с последующим
      char = str[j];
      double += 1;
    } else {
      if (double > 1) { // если дабл больше 2х то конкатенируем строку
        result += `${char}${double}`;
      }
      char = str[j];
      double = 1;
    }
  }
  result += `${char}${double}`;  // также конкатенируем строку,для не дублирующихся данных
  return result;
}

const str = 'aaabbacc';
console.log(repeater(str));
