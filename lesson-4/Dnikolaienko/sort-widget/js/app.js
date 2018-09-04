let thead = document.querySelector('thead');

thead.addEventListener('click', (e) => {
    if(e.target.tagName !== 'TH') {
        return;
    }

    let tbody = e.target.tbody;

    console.log(tbody);
});