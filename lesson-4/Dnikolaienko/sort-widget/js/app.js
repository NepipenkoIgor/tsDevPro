const tabl = document.getElementById('tabl'); // получаем таблицу по айди

tabl.addEventListener('click', (e) => {
  const targ = e.target; // записываем в константу нашу цель,которую по лучаем по клику в обработчике событий
  if (targ.tagName !== 'TH') {
    return; // если цель не является тегом ТН то выходим из функции
  }

  sortColumn(targ.cellIndex, targ.getAttribute('d-type')); // в другом случаем вызываем функцию сортировки

});

function sortColumn(col, type) {
  const tbody = tabl.getElementsByTagName('tbody')[0]; // получаем коллекцию ячееек тела таблицы
  let sortCol; // инициализируем переменую которая будет в дальнейшем выполнять роль функции

  const trArr = [].slice.call(tbody.rows); // превращаем коллекцию ячеек в массив

  if (type === 'age') { // если тип переданого поля age сортируем по возврасту
    sortCol = function(fRow, sRow) {
      return fRow.cells[col].innerHTML - sRow.cells[col].innerHTML;
    };
  } else { // в ином случаем сортируем по имени
    sortCol = function(fRow, sRow) {
      return fRow.cells[col].innerHTML > sRow.cells[col].innerHTML;
    };
  }

  trArr.sort(sortCol); // производим сортировку


  for (let j = 0; j < trArr.length; j++) { // проходимся по ячейкам
    tbody.appendChild(trArr[j]); // добавляем результат в тело таблицы
  }

  tabl.appendChild(tbody); // добавляем результат в таблицу
}
