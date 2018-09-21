
const wrapper = document.querySelector('section');

wrapper.addEventListener('click', (e) => {
  let { target } = e;
  while (target.tagName !== 'SECTION') {
    if (target.classList.contains('close')) {
      target.parentNode.classList.add('hidden');
    }
    target = target.parentNode;
  }
});
