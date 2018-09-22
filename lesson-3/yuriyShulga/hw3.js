const next = (node) => {
  let nextElem = node.nextElementSibling;
  if (nextElem === null) {
    return null;
  }

  return nextElem.nodeType === 1 ? nextElem : next(nextElem);
};

//contains method isn't necessary because in case you try to add existing class, method classList.add willn't couse an error
const addClass = (node, classToAdd) => {
  node.classList.add(classToAdd);
  return node;
};

const removeClass = (node, classToRemove) => {
  classToRemove.split(' ').forEach((toRemove) => {
    if (node.classList.contains(toRemove)) {
      node.classList.remove(toRemove);
    }
  });

  return node;
};

const hasClass = (node, classToCheck) => node.classList.contains(classToCheck);

const closest = (node, testFunc) => {
  if (node.parentElement === null) {
    return null;
  }

  if (!testFunc(node.parentElement)) {
    return closest(node.parentElement, testFunc);
  }

  return node.parentElement;
};

const createList = (listData, listContainer = 'ul', itemContainer = 'li') => {
  if (!Array.isArray(listData) || listData.length === 0) {
    throw new Error(`Wrong arg: ${listData}`);
  }

  let li;
  let list = document.createElement(listContainer);

  listData.forEach((elem) => {
    if (typeof elem !== 'string' && !Array.isArray(elem)) {
      throw new Error(`Wrong type of arg: ${elem}`);
    }

    li = document.createElement(itemContainer);
    if (typeof elem === 'string') {
      li.textContent = elem;
    } else {
      li = createList(elem);
    }

    list.appendChild(li);
  });

  return list;
};

const header = document.querySelector('header');
const menu = next(header);
console.log(menu); // <menu></menu>
console.log(addClass(menu, 'header')); // <menu class="header"></menu>
console.log(hasClass(menu, 'header')); // true
console.log(removeClass(header, 'header')); // <header class="slide selected"></header>
