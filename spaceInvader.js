let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

signature();
function signature()
{
context.beginPath();
context.fillStyle = '#707cd5'
context.fillRect(50, 500, 500, 100);
context.fillRect(150, 400, 300, 100);
context.fillRect(250, 300, 100, 100);
context.fillRect(50, 300, 100, 100);
context.fillRect(450, 300, 100, 100);
context.fillRect(150, 200, 300, 100);
context.fillRect(150, 100, 100, 100);
context.fillRect(350, 100, 100, 100);
context.stroke();
}
