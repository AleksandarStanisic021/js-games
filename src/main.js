import "./style.css";
import dogImage from "./shadow_dog.png";

let canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = dogImage;

const spriteWidth = 575;
const spriteHeight = 523;

let frameX = 0;
let frameY = 4;
let gameFrame = 0;
const staggerFrames = 5;

function animate() {
  if (gameFrame % staggerFrames === 0) {
    if (frameX < 6) frameX++;
    else frameX = 0;
  }
  gameFrame++;

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight,
  );

  requestAnimationFrame(animate);
}

animate();
