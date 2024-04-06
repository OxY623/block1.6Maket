// Создание карточек
export function createCard(srcLogo, ariaLabel) {
  let card = document.createElement("li");
  let blockServices = document.querySelector(".block-services__cards-list");
  card.classList.add("swiper-slide");
  card.classList.add("block-services__cards-item");
  blockServices.appendChild(card);

  let link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("aria-label", ariaLabel);
  link.classList.add("block-services__cards-link");
  link.setAttribute("style", `background-image: url(${srcLogo})`);
  card.appendChild(link);

  let img_icon = document.createElement("img");
  img_icon.setAttribute("src", "./img/go.svg");
  img_icon.setAttribute("alt", "Перейти");
  img_icon.classList.add("block-services__icon");
  link.appendChild(img_icon);
}


