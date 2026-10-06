let rotate = 0;

const carousel = document.querySelector(".carousel");
const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".previous");

function rotateLeft() {
  rotate -= 60;
  carousel.style.transform = `rotateY(${rotate}deg)`;
}

function rotateRight() {
  rotate += 60;
  carousel.style.transform = `rotateY(${rotate}deg)`;
}

buttonNext.addEventListener("click", rotateLeft);
buttonPrev.addEventListener("click", rotateRight);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    rotateRight();
  } else if (e.key === "ArrowRight") {
    rotateLeft();
  }
});