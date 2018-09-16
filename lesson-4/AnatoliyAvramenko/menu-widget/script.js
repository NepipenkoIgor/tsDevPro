
let body = document.querySelector('body');



body.addEventListener('click', (e) => {
    let target = e.target;

    while (target.tagName !== 'BODY') {
        if (target.tagName === 'LI') {
            if (target.classList.contains('opened')) {
                target.classList.remove('opened');
                console.log(target.children);

                Array.from(target.children).forEach(el => {
                    if (el.tagName === 'UL') {
                        Array.from(el.children).forEach(subEl => {
                            subEl.classList.remove('opened');
                        });
                    }
                });

            } else {                
                target.classList.add('opened');
            }
            
            target.stopPropagation();
        }

        target = target.parentNode;
    }
});


