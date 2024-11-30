const background = document.querySelector("body");
const butonClick = document.querySelector(".btn-click");
const butonHover = document.querySelector(".btn-over");
const colorText = document.getElementById("colorText");
const colorHex = document.getElementById("colorInput");
const copyButton = document.getElementById("copy");

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
// Hexdecimal   | Decimal      | Hex Color
// 000000       | 00000000     | White
// FFFFFF       | 16777215     | Black

function randomHexColor() {
  const hexColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${hexColor}`;
}

function changeColor() {
  color = randomHexColor();
  background.style.backgroundColor = color;
  colorHex.value = color;
  colorText.textContent = color;
}

butonClick.addEventListener("click", () => {
  changeColor();
});

butonHover.onmouseover = () => {
  changeColor();
  background.style.position = "relative";
  butonHover.style.width = "250px";
  butonHover.style.height = "50px";
  butonHover.style.position = "absolute";
  butonHover.style.left = `${Math.random() * 80 + 10}%`;
  butonHover.style.top = `${Math.random() * 80 + 10}%`;
};

copyButton.onclick = function () {
  navigator.clipboard.writeText(colorText.textContent);
};
