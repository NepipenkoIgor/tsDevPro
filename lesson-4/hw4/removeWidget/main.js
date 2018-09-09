document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('message')) {
    e.target.classList.add('hidden');
  }
});
