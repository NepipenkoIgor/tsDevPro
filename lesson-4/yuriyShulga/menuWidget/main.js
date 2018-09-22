const list = createList(['Животные',
  ['Млекопитающие',
    ['Коровы', 'Ослы', 'Собаки', 'Тигры'],
  ],
  ['Другие',
    ['Змеи', 'Птицы', 'Ящерицы'],
  ],
  'Рыбы',
  ['Аквариумные'],
  ['Мoрские',
    ['Морская форель', 'Рыба-Кит'],
  ],
]);
console.log(list);
document.querySelector('menu').appendChild(list);

// will return true, if class was added or false if class was removed.
const hideElem = elem => elem.classList.toggle('hidden');


list.addEventListener('click', (e) => {
  let chldrn = [...e.target.parentElement.children];
  let targIndex = chldrn.indexOf(e.target);
  let child;

  for (let i = targIndex + 1; i < chldrn.length; i += 1) {
    child = chldrn[i];
    if (child.tagName === 'LI') {
      return;
    }

    hideElem(child);
  }
});
