import { codeOfCardsPrices } from './cardData';
import { cardData2 } from './cardData';

export function createCardsBlockPrices() {
  let servicesMenuItems = document.querySelector('.block-prices__cards');

  function createCard(card) {
    let html = codeOfCardsPrices;
    html = html.replace('{{cardOrderDescription}}', card.cardOrderDescription);
    html = html.replace('{{cardOrderPrice}}', card.cardOrderPrice);
    html = html.replace('{{cardOrderTerm}}', card.cardOrderTerm);
    return html;
  }

  servicesMenuItems.innerHTML = cardData2.map(createCard).join('');
}

