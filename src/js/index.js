// В файле index.js
import '../scss/style.scss'
import { createCardsSwiperServiceMenu } from './creatingOfOrderCards';
import { initSwiper, handleScreenSize } from './swiper';

document.addEventListener('DOMContentLoaded', function () {
  let swiperInstance = initSwiper();
  createCardsSwiperServiceMenu();

  // Обработка изменения размера окна
  window.addEventListener("resize", function () {
    handleScreenSize(swiperInstance);
  });

  console.log('Works!')
});
