// добавление разных одинаковых товаров так, чтобы их кол-во суммировалось и не дублировалось

const cartWrapper = document.querySelector('.cart-wrapper'); 

window.addEventListener('click', function (event) {
  
  
  if (event.target.hasAttribute('data-cart')) {
    
    const card = event.target.closest('.card');
      
    
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemsInBox: card.querySelector('[data-items-in-box]').innerText,
      counter: card.querySelector('[data-counter]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
    };
    
    // проверим, есть ли такой же товар уже в корзине
    // один из вариантов записи cartWrapper.querySelector('[data-id=" +  productInfo.id + "]');
    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);  // но так короче:))
    

    if (itemInCart) {
      const counterElement = itemInCart.querySelector('[data-counter]');
      counterElement.innerText = parseInt (counterElement.innerText) + parseInt(productInfo.counter);  // сумма числа на счетчике товара в корзине и который хочется добавить еще, но все еще идет дублирование 
      
    } else {  //если товара нет в корзине тогда по шаблону и теперь нет дублирования


    const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                            <div class="cart-item__top">
                              <div class="cart-item__img">
                                <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                              </div>
                              <div class="cart-item__desc">
                                <div class="cart-item__title">${productInfo.title}</div>
                                <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                                <!-- cart-item__details -->
                                <div class="cart-item__details">

                                  <div class="items items--small counter-wrapper">
                                    <div class="items__control" data-action="minus">-</div>
                                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                                    <div class="items__control" data-action="plus">+</div>
                                  </div>

                                  <div class="price">
                                    <div class="price__currency">${productInfo.price}</div>
                                  </div>

                                </div>
                                <!-- // cart-item__details -->

                              </div>
                            </div>
                          </div>`;
                        
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }

    card.querySelector('[data-counter]').innerText = '1'; //сброс счетчика до единицы в карточке, после добавления ко-ва в корзину

  }
})