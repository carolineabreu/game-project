let character = document.getElementById("character");

function moveLeft() {
  let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  left -= 100;
  if (left >= 0) {
    character.style.left = left + "px";
  }
}

function moveRight() {
  let right = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  right += 100;
  if (right < 300) {
    character.style.left = right + "px";
  }
}

function keyDown(event) {
  if (event.key === "ArrowLeft") {
    moveLeft();
  }
  if (event.key === "ArrowRight") {
    moveRight();
  }
}

document.addEventListener("keydown", keyDown);
