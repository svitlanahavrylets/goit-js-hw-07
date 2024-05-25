function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const BtnElement = document.querySelector(".change-color");
const colorElement = document.querySelector(".color");

const bodyElement = document.querySelector("body");
console.log(bodyElement);

BtnElement.addEventListener("click", handleBtnElementClick);
function handleBtnElementClick() {
  const randomColor = getRandomHexColor();
  colorElement.textContent = randomColor;
  bodyElement.style.backgroundColor = randomColor;
}
const pElement = document.querySelector("p");
pElement.style.color = "#2e2f42";
pElement.style.fontSize = "16px";
pElement.style.fontWeight = "400";
pElement.style.fontFamily = "Montserrat, sans-serif";
pElement.style.lineHeight = "1.3";
pElement.style.letterSpacing = "0.04em";

