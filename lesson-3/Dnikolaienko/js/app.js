/* 1) Реализовать функцию next(node), которая вернет следующий узел, не учитывая текстовые узлы и узлы комментариев. */

const findChild = (function(node) { // объявляем безымяную функцию
  try {
    let nextEl = document.querySelector(node).nextElementSibling; // получаем следующий узел после переданного
    if(nextEl != null) { // проверяем если узел не пуст
        return nextEl.nodeType != 3 || nextEl.nodeType != 8 ? nextEl : findChild(nextEl); // тернарный оператор проверяет если узел не текст и не комментарии то возвращает его в противном случаем рекурсивно запускаем функцию
    } else {
        throw new Error('Node dont be a empty, or text-element'); // создаем эксепшен
    }
    } catch(e) {
        console.log(e); // ловим эексепшен и выводим его
    }
})('#main');

console.log(findChild);

/* 2) Реализовать функцию addClass(node, classToAdd). Класс не должен добавляться, если у элемента уже есть такой. */

const addClass = (node, classToAdd) => {
  const currEl = document.querySelector(node); // получаем нужный нам узел

  if (currEl.classList.contains(classToAdd)) { // проверяем содержит ли наш узел заданный класс
    throw new Error(`Class with same name => ${classToAdd} is already exists`); // если содержит то выкидываем ошибку
  }

  return currEl.classList.toggle(classToAdd); // в другом случае используем функциию которая удаляет а потом добавляет класс
};

console.log(addClass('#main', 'myClass'));

/* 3) Реализовать функцию removeClass(node, classToRemove). Удаление несуществующего класса не должно приводить к ошибке. Если классов несколько, должны быть удалены все. */

const removeClass = (node, ...classToRemove) => {
  const currEl = document.querySelector(node); // получаем нужный узел

  for (let c = 0; c < classToRemove.length; c++) {
    if (currEl.classList.contains(classToRemove[c])) { // проверяем содержит ли текущий класс,класс который в поиске
      currEl.classList.remove(classToRemove[c]); // удаляем если есть подходящий класс
    } else {
      throw new Error(`Class with same name => ${classToRemove[c]} is doesn't exists`); // вызываем ошибку
    }
  }
};

console.log(removeClass('#main', 'test', 'spice'));

/* 4) Реализовать функцию hasClass(node, classToCheck), которая вернет true, если у node есть класс classToCheck */

function hasClass(node, findClass) {
  const el = document.querySelector(node);

  return el.classList.contains(findClass);
}

console.log(hasClass('#main', 'test'));
console.log(hasClass('span', 'spice'));

/* 5) Реализовать функцию closest(node, testFunc), которая вернет первого родителя, для которого testFunc вернет true. 
    В testFunc получает аргументом DOM узел. Сам DOM узел node тоже проверять. Если ни один из родителей не подошел, функция возвращает null
*/

const testFunc = (node) => {
  const el = document.querySelector(node);
  let answer;
  if (el) {
    answer = true; // если нужный узел найдет возв. тру
  } else {
    answer = false; // если нужный узел не найден возв. фолс
  }

  return answer;
};

function closest(node) {
  const el = document.querySelector(node); // получаем нужный узел
  let answer;

  if (testFunc(node) === true && el !== false) { // если ответ функции тестФанк вернул тру и узен не пуст
    answer = el.parentElement; // то получаем его первого родителя
  } else {
    answer = null; // в ином случаем получаем нулл
  }

  return answer;
}

console.log(closest('body'));

/* 6) Релизовать функцию createList(listData, listContainer, itemContainer), возвращаюшую узел списка. 
Использовать innerHTML нельзя. 
Второй и третий аргументы не обязательные. 
Значения по умолчанию для них - ul и li. listData - массив. 
Может содержать как элементы (текст), так и массивы элементов. 
Вложенность - любая. 
*/

function createList(listData, listContainer = 'ul', itemContainer = 'li') {
  if (!Array.isArray(listData) || typeof listData !== 'string') { // проверяем первый аргумент не массив или не строка
    throw new Error('Data must be array or string'); // вызываем ошибку
  }

  const ul = document.createElement(listContainer); // создаем ul элемент

  for (let a = 0; a < listData.length; a++) { // проходим по данным
    const li = document.createElement(itemContainer); // создаем li элемент
    if (Array.isArray(listData[a])) { // если данные массв
      const newLi = createList(listData[a]); // создаем тогда перечень элементов
      li.appendChild(newLi); // присваем их li элементу
    } else {
      li.textContent = listData[a]; // в ином случае нам пришли строчные элементы
    }
    ul.appendChild(li); // добавляем все в ul
  }
  return ul;
}

const arr = ['mini', 'test', 'elements', 'next', 'node', 'end'];

console.log(createList(arr));
