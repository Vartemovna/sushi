//четвертый файл, где добавляется взаимодейсвие с корзиной
const cartWrapper = document.querySelector('.cart-wrapper'); //див внутри корзины, в к-ую добавляются товаоы

window.addEventListener('click', function (event) {
  
  //проверка, что клик сделан по кнопке "Добавить в корзину"
  if (event.target.hasAttribute('data-cart')) {
    
    //находим ближайшего родителя к карточке
      const card = event.target.closest('.card');
      
    //собираю данные с этого товара и записываю иx в единый объект (id, img(src), title/h4, счетчик, кол-во штук внутри, вес, цена)
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemsInBox: card.querySelector('[data-items-in-box]').innerText,
      counter: card.querySelector('[data-counter]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
    };
    
    //шаблон
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

    // отображение товаров в корзине                        
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);  //бефореэнд нужен для того, чтобы товар добавлялся в конец корзины

  }
})