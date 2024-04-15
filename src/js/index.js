import '../scss/style.scss';
import { createCard } from './createCards.js';
import { initSwiper, handleScreenSize } from './swiperInit.js';
import { dataCardList } from './cardData';
import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  const elements = {
    burgerOpen: document.getElementById('burger-open'),
    burgerClose: document.getElementById('close-burger'),
    asideElement: document.querySelector('.panel-block'),
    firstSwiperContainer: document.querySelector('.first-swiper-container'),
    secondSwiperContainer: document.querySelector('.second-swiper-container'),
    thirdSwiperContainer: document.querySelector('.third-swiper-container'),
    blockServices: document.querySelector('.block-services__cards-list'),
    blockIMG: document.querySelector('.article__image'),
    button: document.querySelector('.block-services__button'),
    button2: document.querySelector('.article__button'),
    blockArticle: document.querySelector('.article__text--size'),
    button3: document.querySelector('.block-repair__button'),
    blockRepairWrapper: document.querySelector('.block-repair__wrapper'),
    statusButton: document.getElementById('status'),
    applicationButton: document.getElementById('application'),
    statusButton2: document.getElementById('status2'),
    applicationButton2: document.getElementById('application2'),
    callDialog: document.querySelector('.dialog-box--call'),
    feedbackDialog: document.querySelector('.dialog-box--feedback'),
    asideElement2: document.querySelector('.dialog-box'),
  };

  dataCardList.forEach(({ url, ariaLabel }) => createCard(url, ariaLabel));

  // Инициализация swiper'ов
  const initializeSwipers = () => {
    [elements.firstSwiperContainer, elements.secondSwiperContainer, elements.thirdSwiperContainer].forEach(container => {
      const swiper = initSwiper(container);
      handleScreenSize(swiper);
    });
  };

  initializeSwipers();

  const toggleExpanded = (element, button, buttonText) => {
    element.classList.toggle('expanded');
    button.classList.toggle('expanded');
    button.textContent = element.classList.contains('expanded') ? 'Скрыть' : buttonText;
  };

  elements.button.addEventListener('click', () => toggleExpanded(elements.blockServices, elements.button, 'Показать все'));
  elements.button2.addEventListener('click', () => {
    toggleExpanded(elements.blockArticle, elements.button2, 'Читать далее');
    elements.blockIMG.classList.toggle('expanded');
  });
  elements.button3.addEventListener('click', () => toggleExpanded(elements.blockRepairWrapper, elements.button3, 'Скрыть'));


  const toggleAsideElement = (event) => {
    event.stopPropagation();
    elements.asideElement.classList.toggle('visually-hidden');
  };

  elements.burgerOpen.addEventListener('click', toggleAsideElement);
  elements.burgerClose.addEventListener('click', toggleAsideElement);
  document.addEventListener('click', event => {
    const isClickInsideMenu = elements.asideElement.contains(event.target) || elements.burgerOpen.contains(event.target) || elements.burgerClose.contains(event.target);
    const isMenuVisible = !elements.asideElement.classList.contains('visually-hidden');
    if (!isClickInsideMenu && isMenuVisible) {
      elements.asideElement.classList.add('visually-hidden');
    }
  });

  function openDialog(dialog) {
    dialog.classList.remove('visually-hidden');
  }

  function closeDialog(dialog) {
    dialog.classList.add('visually-hidden');
  }

  const closeButtons = document.querySelectorAll('.dialog-box__close-btn');
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const dialog = this.closest('.dialog-box');
      closeDialog(dialog);
    });
  });


  function openFeedbackDialog() {
    openDialog(elements.feedbackDialog);
  }

  function openCallDialog() {
    openDialog(elements.callDialog);
  }

  function closeFeedbackDialog() {
    closeDialog(elements.feedbackDialog);
  }

  function closeCallDialog() {
    closeDialog(elements.callDialog);
  }


  elements.statusButton.addEventListener('click', openCallDialog);
  elements.applicationButton.addEventListener('click', openFeedbackDialog);
  elements.statusButton2.addEventListener('click', openCallDialog);
  elements.applicationButton2.addEventListener('click', openFeedbackDialog);

  document.addEventListener('click', event => {
    if (!elements.callDialog.contains(event.target) && !elements.statusButton.contains(event.target) && !elements.statusButton2.contains(event.target)) {
      closeCallDialog();
    }
    if (!elements.feedbackDialog.contains(event.target) && !elements.applicationButton.contains(event.target) && !elements.applicationButton2.contains(event.target)) {
      closeFeedbackDialog();
    }
  });

  window.addEventListener('resize', initializeSwipers);
});
