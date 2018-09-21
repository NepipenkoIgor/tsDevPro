const body = document.querySelector('body');
const testTableContent = [
  { name: 'John', surname: 'Lennon' },
  { name: 'aingo', surname: 'Starr' },
  { name: 'George', surname: 'Harrison' },
  { name: 'Paul', surname: 'McCartney' },
];

// the custom function for creating the new nodes
const createEl = (tag, parent, content) => {
  const node = document.createElement(tag);
  node.innerText = content;
  parent.appendChild(node);
};

// init table with specified data
const fillTable = (data) => {
  const numOfCols = Object.keys(data[0]).length;
  const table = document.createElement('table');

  const tHead = table.createTHead();
  let newRow = tHead.insertRow(-1);

  createEl('th', newRow, 'No.');

  for (let i = 0; i < numOfCols; i += 1) {
    createEl('th', newRow, Object.keys(data[0])[i]);
  }

  data.forEach((el, index) => {
    newRow = tHead.insertRow(-1);
    createEl('td', newRow, index + 1);
    const elValues = Object.values(el);
    elValues.forEach((val) => {
      createEl('td', newRow, val);
    });
  });

  body.appendChild(table);
};

fillTable(testTableContent);


// sort table data on click
const table = document.querySelector('table');

const sortTable = (event) => {
  if (event.target.tagName !== 'TH') {
    return;
  }
  let toggler = true;
  let sortOrder = 'asc';
  const columnIndex = event.target.cellIndex;
  let i;
  let shouldSwitch;
  let switchcount = 0;

  while (toggler === true) {
    toggler = false;
    const { rows } = table;

    for (i = 1; i < rows.length - 1; i += 1) {
      shouldSwitch = false;
      const x = rows[i].children[columnIndex].innerText.toLowerCase();
      const y = rows[i + 1].children[columnIndex].innerText.toLowerCase();

      if (sortOrder === 'asc') {
        if (x > y) {
          shouldSwitch = true;
          break;
        }
      } else if (sortOrder === 'desc') {
        if (x < y) {
          shouldSwitch = true;
          break;
        }
      }
    }

    if (shouldSwitch === true) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      toggler = true;
      switchcount += 1;
    } else if (sortOrder === 'asc' && switchcount === 0) {
      sortOrder = 'desc';
      toggler = true;
    }
  }
};

table.addEventListener('click', sortTable);
