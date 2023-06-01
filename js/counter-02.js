//основной файл, который подключен к html

// добавляю прослушку (все клики) на всем окне 
window.addEventListener('click', function (event) {
  
  if (event.target.dataset.action === 'plus') {       // проверка- является ли элемент кнопкой плюс для клика
    console.log('Plus');

    const counterWrapper = event.target.closest('.counter-wrapper');          // клосест находит ближайшего родителя
    console.log(counterWrapper );

    const counter = counterWrapper.querySelector('[data-counter]');       // находим датаКаунтер
    console.log(counter);
    
  }

  if (event.target.dataset.action === 'minus') {       // проверка- является ли элемент кнопкой минус для клика
    console.log('Minus');
  }

});