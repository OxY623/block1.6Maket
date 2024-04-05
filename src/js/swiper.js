import Swiper from 'swiper';

export function initSwiper() {
  let swiperInstance = new Swiper(".swiper.services-menu__swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    slideToClickedSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensitivity: 1,
    },
    slideOverflow: true,
    breakpoints: {
      375: { spaceBetween: 18 },
      425: { spaceBetween: 20 },
      500: { spaceBetween: 24 },
      700: { spaceBetween: 24 },
    },
    allowTouchMove: true,
  });

  return swiperInstance;
}

export function handleScreenSize(swiper) {
  const screenSize = window.innerWidth;
  if (swiper && screenSize > 767) {
    swiper.allowTouchMove = false;
    swiper.destroy();
  }
}
