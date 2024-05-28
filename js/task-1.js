const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const h = item.children[0];
  const ulEl = h.nextElementSibling;
  const ulElLen = ulEl.children.length;
  const textH = h.textContent;

  const ul = item.children[1];
  console.log(ul);
  ul.className = "inner--ul";

  console.log(`Category: ${textH}`);
  console.log(`Elements: ${ulElLen}`);
});
