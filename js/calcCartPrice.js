//промежуточный файл , правильная стоимость при умножении и ее общая сумма

function calcCartPrice() {
  const cartItems = document.querySelectorAll('.cart-item');
   

  let totalPrice = 0;

  cartItems.forEach(function (item) {
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price__currency');
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice; //эта запись расш-ется как totalPrice = totalPrice + currentPrice;

  }) 

  console.log(totalPrice);

}