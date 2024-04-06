export function createCardsBlockPrices() {
  let servicesMenuItems = document.querySelector('.block-prices__cards-list');

  function createCard(card) {
    return `
    <div class='card-order swiper-slide'>
      <div class='card-order__container'>
        <div class='card-order__header'>
          <h4 class='card-order__title'>Ремонтные услуги</h4>
          <p class='card-order__description'>${card.cardOrderDescription}</p>
        </div>
        <div class='card-order__body'>
          <div class='card-order__wrapper'>
            <h4 class='card-order__subtitle'>Цена</h4>
            <p class='card-order__price'>${card.cardOrderPrice}</p>
          </div>
          <div class='card-order__wrapper'>
            <h4 class='card-order__subtitle'>Срок</h4>
            <p class='card-order__term'>${card.cardOrderTerm}</p>
          </div>
          <div class='card-order__wrapper'>
            <div class='card-order__button'>
              <!--todo: Block Order-->
              <a href='#' class='order' aria-label='Сделать заказ'>
                <span class='order__text'>Заказать</span>
                <img src="./img/goside.svg" alt="Перейти" class="order__icon">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  }

  // Test the function with each card data
  let cardData = [
    {
      cardOrderDescription: 'Тестирование с выдачей технического заключения',
      cardOrderPrice: 'Бесплатно',
      cardOrderTerm: '30-120 мин'
    },
    {
      cardOrderDescription: 'Диагностика',
      cardOrderPrice: 'Бесплатно',
      cardOrderTerm: '30 мин'
    },
    {
      cardOrderDescription: 'Замена дисплея',
      cardOrderPrice: '1 000 ₽',
      cardOrderTerm: '30-120 мин'
    },
    {
      cardOrderDescription: 'Замена полифонического динамика',
      cardOrderPrice: '1 000 ₽',
      cardOrderTerm: '30-120 мин'
    },
    {
      cardOrderDescription: 'Тестирование с выдачей технического заключения',
      cardOrderPrice: '1 000 ₽',
      cardOrderTerm: '30-120 мин'
    },
    {
      cardOrderDescription: 'Замена программного обеспечения',
      cardOrderPrice: '1 000 ₽',
      cardOrderTerm: '30-120 мин'
    },
  ];

  servicesMenuItems.innerHTML = cardData.map(createCard).join('');
}
