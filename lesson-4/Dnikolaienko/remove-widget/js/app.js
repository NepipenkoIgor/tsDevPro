const main = document.getElementById('main-container'); // получаем нужный узел

main.addEventListener('click', (event) => { // отлавливаем клик на нужном эллементе
  if (!event.target.classList.contains('remove-btn')) { // если класс не содержит кнопку то выходим из функции
    return;
  }

  event.target.parentNode.hidden = !event.target.parentNode.hidden; // в ином случае хайдим класс
});
