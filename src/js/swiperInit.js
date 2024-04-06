// Импорт Swiper уже должен быть где-то выше в вашем коде, поэтому не нужно его повторять здесь

// Инициализация swiper
export function initSwiper(swiper) {
  if (swiper) {
    swiper.destroy();
  }

  // Создание нового экземпляра Swiper
  const newSwiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: "auto",
    // slidesPerView: "1.2",
    spaceBetween: 16,
    slideToClickedSlides: true,
    pagination: {
      el: ".swiper-pagination", // Используйте правильный селектор для пагинации
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

  // Возвращаем новый экземпляр Swiper, чтобы его можно было использовать дальше при необходимости
  return newSwiper;
}

export function handleScreenSize(swiper) {
  const screenSize = window.innerWidth;
  if (swiper && screenSize > 767) {
    swiper.allowTouchMove = false;
    swiper.destroy();
    // alert('Testing screen size');
  }
}
