const button = document.querySelector(".shine-button");
const listofItems = document.querySelectorAll(".list__item");

button.addEventListener("click", () => {
  for (let i = 0; i < listofItems.length; i++) {
    listofItems[i].style.color = listofItems[i].textContent;
  }
});
