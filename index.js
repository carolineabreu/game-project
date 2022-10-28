let character = document.getElementById("character");
let obstacle = document.getElementById("obstacle");
let counter = 0;

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

obstacle.addEventListener("animationiteration", () => {
  let random = Math.floor(Math.random() * 3);
  left = random * 100;
  obstacle.style.left = left + "px";
  counter++;
});

setInterval(function () {
  let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
  let obstacleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));
  if (characterLeft === obstacleLeft && obstacleTop < 500 && obstacleTop > 300) {
    alert(`Game Over! Score: ${counter}`);
    obstacle.style.animation = "none";
  }
}, 1);
