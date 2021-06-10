const textDisplay = document.querySelector(".text_display");
const btn = document.querySelector(".generate");

function randomNum() {
  const random = Math.floor(Math.random() * 1000 + 1);
  textDisplay.innerHTML = random;
}

btn.addEventListener("click", randomNum);
