//отдельный файл для первоначальной проверки кликов на одной первой карточке с товаром

// переменные
const btnMinus = document.querySelector('[data-action="minus"]'); // константа для знака минус
const btnPlus = document.querySelector('[data-action="plus"]'); // констант для знака плюс
const counter = document.querySelector('[data-counter]'); // константа для единицы

//клики на кнопки плюс и минус
btnPlus.addEventListener('click', function(){
  console.log('Plus click')
  counter.innerText = ++counter.innerText;                 // добавление кол-ва товара
});

btnMinus.addEventListener('click', function(){             // уменьшение кол-ва товара

  console.log('Minus click')                                 // добавляю также условие, чтобы счет не уходил в ноль и меньше
  if ( parseInt(counter.innerText) > 1 ) {                  // (нет смысла добавлять в корзину товар в количесве 0 и -бесконечность)
    counter.innerText = --counter.innerText;
  }
  
});



