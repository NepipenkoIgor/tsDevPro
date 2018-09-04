let list = document.querySelector('.list');

list.addEventListener('click', (e) => {
    let children = [...e.target.parentNode.children];
    let targCounter = children.indexOf(e.target);
        
    for (j = targCounter+1; j < children.length; j++) {
        if(children[j].tagName !== 'UL') {
            return;
        }
        hideList(children[j]);
    }
});

function hideList(elem) {
    if(elem.classList.contains('hidden')) {
        elem.classList.remove('hidden');
    }
    return elem.classList.add('hidden');
}