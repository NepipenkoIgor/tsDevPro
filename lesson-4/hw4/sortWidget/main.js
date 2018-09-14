const tbl = document.querySelector('.people');

tbl.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  let rows = [...tbl.children[0].children];
  const { cellIndex } = e.target;
  const thRow = rows.slice(0, 1)[0];

  rows = rows.slice(1, rows.lenght)
  .sort((currentRow, nextRow) => {
    const curVal = currentRow.cells[cellIndex].textContent;
    const nextVal = nextRow.cells[cellIndex].textContent;

    if (Number.isNaN(parseInt(curVal, 10))) {
      return curVal > nextVal;
    }

    return parseInt(curVal, 10) - parseInt(nextVal, 10);
  });

  const sortedRows = document.createElement('tbody');
  sortedRows.appendChild(thRow);

  for (let i = 0; i < rows.length; i += 1) {
    sortedRows.appendChild(rows[i]);
  }

  tbl.insertBefore(sortedRows, tbl.firstChild);
  tbl.removeChild(tbl.lastChild);
});
