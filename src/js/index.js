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
    writeButton: document.getElementById('call2'),
    callButton: document.getElementById('write2'),
    writeButton2: document.getElementById('write'),
    callButton2: document.getElementById('call'),
    callDialog: document.querySelector('.dialog-box--call'),
    feedbackDialog: document.querySelector('.dialog-box--feedback'),
    asideElement2: document.querySelector('.dialog-box'),
    blurOverlay: document.querySelector('.blur-overlay'),
    dialogBoxCallCloseButton: document.getElementById('dialog-box-call-close'),
    dialogBoxFeedbackCloseButton: document.getElementById('dialog-box-feedback-close'),
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

  const closeSidebar = (sidebar) => {
    sidebar.classList.add('visually-hidden');
    elements.blurOverlay.classList.add('visually-hidden');
  };

  const openSidebar= (sidebar) => {
    sidebar.classList.remove('visually-hidden');
    elements.blurOverlay.classList.remove('visually-hidden');
  }

  document.addEventListener('click', event => {
    if (event.target === elements.burgerOpen) {
      openSidebar(elements.asideElement);
    } else if (event.target === elements.burgerClose) {
      closeSidebar(elements.asideElement);
    } else if (event.target === elements.callButton || event.target === elements.callButton2) {
      openDialogAndCloseOthers(elements.callDialog);
    } else if (event.target === elements.writeButton || event.target === elements.writeButton2) {
      openDialogAndCloseOthers(elements.feedbackDialog);
    } else if (event.target === elements.dialogBoxCallCloseButton) {
      closeSidebar(elements.callDialog);
    } else if (event.target === elements.dialogBoxFeedbackCloseButton) {
      closeSidebar(elements.feedbackDialog);
    } else if (event.target === elements.blurOverlay) {
      closeSidebar(elements.callDialog);
      closeSidebar(elements.feedbackDialog);
      closeSidebar(elements.asideElement);
    }
  });

  function openDialogAndCloseOthers(dialogElement) {
    // Close all dialog boxes
    closeSidebar(elements.asideElement)
    closeSidebar(elements.callDialog);
    closeSidebar(elements.feedbackDialog);
    openSidebar(dialogElement);
  }

  window.addEventListener('resize', initializeSwipers);
});
