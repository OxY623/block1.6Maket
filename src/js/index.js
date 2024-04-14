import '../scss/style.scss';
import { createCard } from './createCards.js';
import { initSwiper, handleScreenSize } from './swiperInit.js';
import { dataCardList } from './cardData';
import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  const screenWidthThreshold = 768;
  const burgerOpen = document.getElementById('burger-open');
  const burgerClose = document.getElementById('close-burger');
  const asideElement = document.querySelector('.panel-block');
  const firstSwiperContainer = document.querySelector('.first-swiper-container');
  const secondSwiperContainer = document.querySelector('.second-swiper-container');
  const thirdSwiperContainer = document.querySelector('.third-swiper-container');
  const blockServices = document.querySelector('.block-services__cards-list');
  const blockIMG = document.querySelector('.article__image');
  const button = document.querySelector('.block-services__button');
  const button2 = document.querySelector('.article__button');
  const blockArticle = document.querySelector('.article__text--size');
  const button3 = document.querySelector('.block-repair__button');
  const blockRepairWrapper = document.querySelector('.block-repair__wrapper');
  const statusButton = document.getElementById('status');
  const applicationButton = document.getElementById('application');
  const statusButton2 = document.getElementById('status2');
  const applicationButton2 = document.getElementById('application2');
  const callDialog = document.querySelector('.dialog-box--call');
  const feedbackDialog = document.querySelector('.dialog-box--feedback');
  const asideElement2 = document.querySelector('.dialog-box');

  // Создание карточек при загрузке страницы
  dataCardList.forEach((cardData) => {
    createCard(cardData.url, cardData.ariaLabel);
  });

  // Инициализация swiper'ов
  const initializeSwipers = () => {
    [firstSwiperContainer, secondSwiperContainer, thirdSwiperContainer].forEach((container) => {
      const swiper = initSwiper(container);
      handleScreenSize(swiper);
    });
  };

  initializeSwipers();

  // Обработчики кнопок
  const toggleExpanded = (element, buttonText) => {
    element.classList.toggle('expanded');
    button.textContent = element.classList.contains('expanded') ? 'Скрыть' : buttonText;
    button.classList.toggle('expanded');
  };

  button.addEventListener('click', () => toggleExpanded(blockServices, 'Показать все'));
  button2.addEventListener('click', () => {
    toggleExpanded(blockArticle, 'Читать далее');
    blockIMG.classList.toggle('expanded');
  });
  button3.addEventListener('click', () => toggleExpanded(blockRepairWrapper, 'Показать все'));

  // Обработчики бургер-меню
  const toggleAsideElement = (event) => {
    event.stopPropagation();
    asideElement.classList.toggle('visually-hidden');
    burgerClose.classList.toggle('visually-hidden');
    burgerOpen.classList.toggle('visually-hidden');
  };

  burgerOpen.addEventListener('click', toggleAsideElement);
  burgerClose.addEventListener('click', toggleAsideElement);
  document.addEventListener('click', (event) => {
    const isClickInsideMenu = asideElement.contains(event.target) || burgerOpen.contains(event.target) || burgerClose.contains(event.target);
    const isMenuVisible = !asideElement.classList.contains('visually-hidden');
    if (!isClickInsideMenu && isMenuVisible) {
      asideElement.classList.add('visually-hidden');
      burgerClose.classList.add('visually-hidden');
      burgerOpen.classList.remove('visually-hidden');
    }
  });

  // Обработчики диалоговых окон
  const openDialog = (dialog) => dialog.classList.remove('visually-hidden');
  const closeDialog = (dialog) => dialog.classList.add('visually-hidden');

  const closeButtons = document.querySelectorAll('.dialog-box__close-btn');
  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const dialog = button.closest('.dialog-box');
      closeDialog(dialog);
    });
  });

  const openFeedbackDialog = () => openDialog(feedbackDialog);
  const openCallDialog = () => openDialog(callDialog);

  const closeFeedbackDialog = () => closeDialog(feedbackDialog);
  const closeCallDialog = () => closeDialog(callDialog);

  statusButton.addEventListener('click', openCallDialog);
  applicationButton.addEventListener('click', openFeedbackDialog);
  statusButton2.addEventListener('click', openCallDialog);
  applicationButton2.addEventListener('click', openFeedbackDialog);

  document.addEventListener('click', (event) => {
    if (!callDialog.contains(event.target) && !statusButton.contains(event.target) && !statusButton2.contains(event.target)) {
      closeCallDialog();
    }
    if (!feedbackDialog.contains(event.target) && !applicationButton.contains(event.target) && !applicationButton2.contains(event.target)) {
      closeFeedbackDialog();
    }
  });

  // if (window.innerWidth > 1440) {
  //   asideElement2.classList.add('centered');
  // } else {
  //   asideElement2.classList.remove('centered');
  // }

  // Обработка изменения размера окна
  window.addEventListener('resize', initializeSwipers);
});
