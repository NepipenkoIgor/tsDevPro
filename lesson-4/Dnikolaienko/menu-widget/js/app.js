const list = document.querySelector('.list'); // получаем нужный узел

list.addEventListener('click', (e) => { // вешаем событие на нужный узел(событие по клику)
  const children = [...e.target.parentNode.children]; // получаем детей родительского узла и оборачиваем их в массив
  const targCounter = children.indexOf(e.target); // создаем каунтер проверяя наличие цели у массива выше

  for (let j = targCounter + 1; j < children.length; j++) {
    if (children[j].tagName !== 'UL') { // если имя тега не равняется UL
      return; // то выходим из функции
    }
    hideList(children[j]); // в другом случае вызываем функцию скрытия на текущем узле
  }
});

function hideList(elem) {
  return elem.classList.toggle('hidden'); // если есть у эллемента класс хиден то удаляем его и добавляем заново
}
