const numberDisplay = document.querySelector(".text_display");
const btn = document.querySelector(".generate");

function generateNumber() {
  const random = Math.floor(Math.random() * 1000 + 1);
  numberDisplay.innerHTML = random;
}

btn.addEventListener("click", generateNumber);
