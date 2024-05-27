function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divElement = document.querySelector("#controls");
const inputElement = document.querySelector('input[type="number"]');
const btnCreateElement = document.querySelector("button[data-create]");
const btnDestroyElement = document.querySelector("button[data-destroy]");
const divBoxesElement = document.querySelector("#boxes");

btnCreateElement.addEventListener("click", () => {
  const amount = inputElement.value;
  if (amount < 0 || amount > 100) {
    return;
  }
  let size = 30;
  const markup = [];
  for (let index = 0; index < amount; index++) {
    markup.push(
      `<div style =
      "background-color:${getRandomHexColor()}; width = ${size}px; height = ${size}px"></div>`
    );
    size += 10;
  }
  divBoxesElement.innerHTML = markup.join("");
});

btnDestroyElement.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divBoxesElement.innerHTML = "";
}
