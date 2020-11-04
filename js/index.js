// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };

//   function startGame() {}
// };

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'red';

let img = new Image()
img.src = 'road.png'
img.onload = function () {
  ctx.drawImage(img, 500, 500, 50, 50)
}

let car = {
  x: 0,
  y: 0,
  h: 100,
  w: 100
}