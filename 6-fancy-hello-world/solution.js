const h1Element = document.querySelector(".header__text");
const inputElement = document.querySelector(".controls__input");

inputElement.addEventListener("change", () => {
  h1Element.textContent = h1Element.textContent + " " + inputElement.value;
});
