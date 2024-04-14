// Инициализация swiper
export function initSwiper(containerSelector) {

  const existingSwiper = containerSelector.swiper;
  if (existingSwiper) {
    existingSwiper.destroy();
  }

  const newSwiper = new Swiper(containerSelector, {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    slideToClickedSlides: true,
    pagination: {
      el: containerSelector.querySelector(".swiper-pagination"),
      clickable: true,
    },
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    // mousewheel: {
    //   sensitivity: 1,
    // },
    slideOverflow: true,
    breakpoints: {
      375: { spaceBetween: 18 },
      425: { spaceBetween: 20 },
      500: { spaceBetween: 24 },
      700: { spaceBetween: 24 },
    },
    allowTouchMove: true,
  });


  containerSelector.swiper = newSwiper;
  console.log(containerSelector.swiper.slides.length);


  return newSwiper;
}



export function handleScreenSize(swiper) {
  const screenSize = window.innerWidth;
  if (swiper && screenSize >= 768) {

    swiper.pagination.clickable = false
    swiper.slideToClickedSlides = false;
    swiper.allowTouchMove=false;
    swiper.destroy();
    swiper = null;
  }
}
