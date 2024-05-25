const inputElement = document.querySelector("#name-input");

const messagesElement = document.querySelector("#name-output");

inputElement.addEventListener("input", handleInputElementInput);

function handleInputElementInput() {
  const massagesValue = inputElement.value.trim();
  messagesElement.textContent = massagesValue;
  if (massagesValue === "") {
    return (messagesElement.textContent = "Anonymous");
  }
}
const header = document.querySelector("h1");
header.style.color = "#2e2f42";
header.style.fontSize = "24px";
header.style.fontWeight = "600";
header.style.fontFamily = "Montserrat, sans-serif";
header.style.lineHeight = "1.3";
header.style.letterSpacing = "0.04em";
