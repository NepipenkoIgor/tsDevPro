
// 1) Реализовать функцию next(node), которая вернет следующий узел, не учитывая текстовые узлы и узлы комментариев.

function next(node) {
    return nextEl = node.nextElementSibling;
}

let testNode = document.querySelector('div');

console.log(next(testNode));


// 2) Реализовать функцию addClass(node, classToAdd). Класс не должен добавляться, если у элемента уже есть такой.

function addClass(node, classToAdd) {
    return node.classList.contains(classToAdd) ? false : node.classList.add(classToAdd);    
}

addClass(testNode, 'newClass');


// 3) Реализовать функцию removeClass(node, classToRemove). Удаление несуществующего класса не должно приводить к ошибке. Если классов несколько, должны быть удалены все.

function removeClass(node, ...classToRemove) {
    node.classList.remove(...classToRemove);
}

removeClass(testNode, 'newClass', '1');


// 4) Реализовать функцию hasClass(node, classToCheck), которая вернет true, если у node есть класс classToCheck

function classToCheck(node, classToCheck) {
    return node.classList.contains(classToCheck);
}

console.log(classToCheck(testNode, '2'));
console.log(classToCheck(testNode, '1'));


// 5) Реализовать функцию closest(node, testFunc), которая вернет первого родителя, для которого testFunc вернет true. 
//    В testFunc получает аргументом DOM узел. Сам DOM узел node тоже проверять. Если ни один из родителей не подошел, функция возвращает null

let testLi = document.querySelector('ul li:nth-child(2)');
console.log(testLi);

function testFunc(node, tag) {
    return node.tagName === tag.toUpperCase();
}

function closest(node, tag) {

    let getParent = (el) => el.parentElement;
    let currentParent = getParent(node);
    while (!testFunc(currentParent, tag)) {
        currentParent = getParent(currentParent);
        if (currentParent === null) {
            break;
        }
    }
    return currentParent;
}

console.log(closest(testLi, 'div'));
console.log(closest(testLi, 'main'));
console.log(closest(testLi, 'SECTION'));
console.log(closest(testLi, 'span'));


// 6) Релизовать функцию createList(listData, listContainer, itemContainer), возвращаюшую узел списка. Использовать innerHTML нельзя. 
//    Второй и третий аргументы не обязательные. Значения по умолчанию для них - ul и li. listData - массив. 
//    Может содержать как элементы (текст), так и массивы элементов. Вложенность - любая.

const ListDataPlain = [1, 2, 3, 4, 5, 6, 7];
const ListDataComplex = Array.from(document.querySelectorAll('div'));

let createList = (listData, listContainer = 'ul', itemContainer = 'li') => {
    let container = document.createElement(listContainer);
    listData.forEach(el => {
        let listItem = document.createElement(itemContainer);
        let content = '';
        if (el.nodeType === Node.ELEMENT_NODE) {
            content = document.createTextNode(el.textContent);
        } else {            
            content = document.createTextNode(el);
        }
        listItem.appendChild(content);
        container.appendChild(listItem);
    });

    return container;
};

console.log(createList(ListDataPlain, 'div', 'span'));
console.log(createList(ListDataComplex));