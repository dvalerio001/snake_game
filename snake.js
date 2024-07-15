// Declare canvas and context variables
let canvas;
let ctx;

// Will run after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get the canvas element by its ID
  canvas = document.getElementById("snake-game-canvas");
  // Get the 2D drawing context from HTML5 Canvas API
  ctx = canvas.getContext("2d");

  // Draw a 300 x 300 white rectangle
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 300, 300); // (x, y, width, height)
  ctx.strokeRect(0, 0, 300, 300); // (x, y, width, height)

  // Draw the initial snake
  drawSnake();
});

// Snake - represent Snake as an array of coordinates
let snake = [
  { x: 150, y: 150 }, // represents the head
  { x: 140, y: 150 }, // -10px to the left..
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 },
];

function drawSnakePart(snakePart) {
  // Draw a rectangle for each part of the snake
  ctx.fillStyle = "lightgreen";
  ctx.strokestyle = "darkgreen";
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
function drawSnake() {
  // Print snake parts on the canvas
  snake.forEach(drawSnakePart);
}
