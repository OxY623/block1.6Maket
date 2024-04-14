export let dataCardList = [
  { url: "./img/logo_bitmap/Bitmap.svg", ariaLabel: "Выбрать Lenovo" },
  { url: "./img/logo_bitmap/Bitmap1.svg", ariaLabel: "Выбрать Sumsung" },
  { url: "./img/logo_bitmap/Bitmap2.svg", ariaLabel: "Выбрать Apple" },
  { url: "./img/logo_bitmap/Bitmap3.svg", ariaLabel: "Выбрать View-Sonic" },
  { url: "./img/logo_bitmap/Bitmap4.svg", ariaLabel: "Выбрать Bosh" },
  { url: "./img/logo_bitmap/Bitmap5.svg", ariaLabel: "Выбрать HP" },
  { url: "./img/logo_bitmap/Bitmap6.svg", ariaLabel: "Выбрать Acer" },
  { url: "./img/logo_bitmap/Bitmap7.svg", ariaLabel: "Выбрать Sony" },
  { url: "./img/logo_bitmap/Bitmap.svg", ariaLabel: "Выбрать Lenovo" },
  { url: "./img/logo_bitmap/Bitmap1.svg", ariaLabel: "Выбрать Sumsung" },
  { url: "./img/logo_bitmap/Bitmap2.svg", ariaLabel: "Выбрать Apple" },
];

export let cardData2 = [
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

export let codeOfCardsPrices = `
  <div class='card-order swiper-slide block-prices__card'>
    <div class='card-order__container'>
      <div class='card-order__header'>
        <h4 class='card-order__title'>Ремонтные услуги</h4>
        <p class='card-order__description'>{{cardOrderDescription}}</p>
      </div>
      <div class='card-order__body'>
        <div class='card-order__wrapper'>
          <h4 class='card-order__subtitle'>Цена</h4>
          <p class='card-order__price'>{{cardOrderPrice}}</p>
        </div>
        <div class='card-order__wrapper'>
          <h4 class='card-order__subtitle'>Срок</h4>
          <p class='card-order__term'>{{cardOrderTerm}}</p>
        </div>
        <div class='card-order__wrapper'>
          <div class='card-order__button'>
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
