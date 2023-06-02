//второй файл, в котором объясняются последовательно дейсвия для счетчиков

// добавляю прослушку (все клики) на всем окне 
window.addEventListener('click', function (event) {
  
  if (event.target.dataset.action === 'plus') {       // проверка- является ли элемент кнопкой плюс для клика
    // console.log('Plus');                           // благодаря всем консолям делалась проверка

    const counterWrapper = event.target.closest('.counter-wrapper');          // клосест находит ближайшего родителя
    // console.log(counterWrapper );

    const counter = counterWrapper.querySelector('[data-counter]');       // находим датаКаунтер
    // console.log(counter);
    
    counter.innerText = ++counter.innerText; 


  }

  if (event.target.dataset.action === 'minus') {       // проверка- является ли элемент кнопкой минус для клика
    // console.log('Minus');
    
    const counterWrapper = event.target.closest('.counter-wrapper');          // клосест находит ближайшего родителя (обертку счетчика)
    // console.log(counterWrapper );

    const counter = counterWrapper.querySelector('[data-counter]');       // находим датаКаунтер (див числом счетчика)
    // console.log(counter);
    
    if ( parseInt(counter.innerText) > 1 ) {            
      counter.innerText = --counter.innerText;
    }



  }

});