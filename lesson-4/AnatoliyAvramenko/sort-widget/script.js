const body = document.querySelector('body');
let testTableContent = [
    {name: 'John', surname: 'Lennon'},
    {name: 'aingo', surname: 'Starr'},
    {name: 'George', surname: 'Harrison'},
    {name: 'Paul', surname: 'McCartney'}
];

let createEl = (tag, parent, content) => {
    let node = document.createElement(tag);
    node.innerText = content;
    parent.appendChild(node);
};

// init table with specified data
let fillTable = data => {
    let numOfCols = Object.keys(data[0]).length;
    let table = document.createElement('table');    
    
    let tHead = table.createTHead();
    let newRow = tHead.insertRow(-1);

    createEl('th', newRow, 'No.')

    for (let i = 0; i < numOfCols; i++) {
        createEl('th', newRow, Object.keys(data[0])[i]);
    }

    let tBody = table.createTBody();

    data.forEach((el, index) => {        
        newRow = tHead.insertRow(-1);
        createEl('td', newRow, index + 1);
        for (let key in el) {
            createEl('td', newRow, el[key]);
        }
    });

    body.appendChild(table);
};

fillTable(testTableContent);


// sort table data on click
const table = document.querySelector('table');

let sortTable = event => {

    if (event.target.tagName !== 'TH') {
        return;
    }
    let toggler = true;
    let sortOrder = 'asc';
    let columnIndex = event.target.cellIndex;
    let i;
    let switchcount = 0;

    while (toggler === true) {
        toggler = false;
        let rows = table.rows;

        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            let x = rows[i].children[columnIndex].innerText.toLowerCase();
            let y = rows[i+1].children[columnIndex].innerText.toLowerCase();
            
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
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
            toggler = true;
            switchcount++;
        } else {
            if (sortOrder === 'asc' && switchcount === 0) {                
                sortOrder = 'desc';
                toggler = true;
            }
        }

    }
}

table.addEventListener('click', sortTable);



