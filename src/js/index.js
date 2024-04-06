// В файле index.js
import '../scss/style.scss'
import { createCard } from './createCards.js';
import { initSwiper, handleScreenSize } from './swiperInit.js';
import { createCardsBlockPrices } from './creatingOfOrderCards';


document.addEventListener('DOMContentLoaded', function () {
  let swiper;
  let swiper2;
  let secondSwiperContainer = document.querySelector(".second-swiper-container");
  let blockServices = document.querySelector(".block-services__cards-list");
  let button = document.querySelector(".block-services__button ");
  let blockPrices= createCardsBlockPrices();
  let dataCardList = [
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

  // Создание карточек при загрузке страницы
  for (let i = 0; i < dataCardList.length; i++) {
    createCard(dataCardList[i].url, dataCardList[i].ariaLabel);
  }



  // Инициализация Swiper при загрузке страницы
  initSwiper(swiper);
  if (secondSwiperContainer) {
    swiper2 = initSwiper(secondSwiperContainer.swiper);
  }

// Обработка изменения размера окна
//   window.addEventListener("resize", function () {
//     initSwiper(swiper);
//     handleScreenSize(swiper);
//     handleScreenSize(swiper2);
//   });

  // Обработчик кнопки
  button.addEventListener("click", function () {
    blockServices.classList.toggle("expanded");
    button.textContent = blockServices.classList.contains("expanded")
      ? "Скрыть"
      : "Показать все";
    button.classList.toggle("expanded");
  });



  // let swiperInstance = initSwiper();
  // createCardsSwiperServiceMenu();
  //
  // // Обработка изменения размера окна
  // window.addEventListener("resize", function () {
  //   handleScreenSize(swiperInstance);
  // });

  console.log('Works!')
});
