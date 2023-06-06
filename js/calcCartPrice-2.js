//правильная стоимость при умножении и ее общая сумма

function calcCartPriceAndDelivery() {
  const cartWrapper = document.querySelector('.cart-wrapper');
  const priceElements = cartWrapper.querySelectorAll('.price__currency');
  const totalPriceEl = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');
  const cartDelivery = document.querySelector('[data-cart-delivery]');
  

  // общая стоимость товаров
  let priceTotal = 0;

  // обходим все блоки с ценами в корзине
  priceElements.forEach(function (item) {

    // находим кол-во товаров
    const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
    // добавляем стоимость товара в общую стоимость (кол-во * цену)
    priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
    

  }) 
    // отображение цены на странице
  totalPriceEl.innerText = priceTotal;

  //скрываем или показываем блок с доставкой
  if (priceTotal > 0) {
    cartDelivery.classList.remove('none');
  } else {
    cartDelivery.classList.add('none');
  }

  // указываем стоимость доставки
  if (priceTotal >= 1000) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'бесплатно';
  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '250 ₽';
  }
}