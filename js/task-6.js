function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divElement = document.querySelector("#controls");
const inputElement = document.querySelector('input[type="number"]');
const btnCreateElement = document.querySelector("button[data-create]");
const btnDestrouElement = document.querySelector("button[data-destroy]");
const messagesValue = inputElement.value.trim();
const divBoxesElement = document.querySelector("#boxes");

btnCreateElement.addEventListener("click", handleBtnElementClick) 
function handleBtnElementClick(event) {
  
}
