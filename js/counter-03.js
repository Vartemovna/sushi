//третий файл, в котором объясняются последовательно дейсвия для счетчиков и подключен к html
window.addEventListener('click', function (event) {

  let counter;           //это нужно, чтобы не выдавалась ошибка в каунтере, когда задавали константу

  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {      //проверка на клик строго по кнопке плюс или минус
   
    const counterWrapper = event.target.closest('.counter-wrapper');          
    counter = counterWrapper.querySelector('[data-counter]');      //обращение к лет сверху (была константа)
  }


  if (event.target.dataset.action === 'plus') {
      counter.innerText = ++counter.innerText; 
  }

  if (event.target.dataset.action === 'minus') {       
       
    if (parseInt(counter.innerText) > 1 ) {            
        counter.innerText = --counter.innerText;
    }



  }

});