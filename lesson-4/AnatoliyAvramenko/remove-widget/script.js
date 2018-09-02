
// let after = window.getComputedStyle(document.querySelector('.message'), ':after');
let message = document.querySelector('.message');
let wrapper = document.querySelector('section');

wrapper.addEventListener('click', (e) => {
    let target = e.target;
    while (target.tagName !== 'SECTION') {
        if (target.classList.contains('close'))  {
            target.parentNode.classList.add('hidden');
        }
        target = target.parentNode;
    }
});