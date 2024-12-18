'use strict';
import context from "../../scripts/context.js";

let polygons = [];

let width = context.canvas.width;
let height = context.canvas.height;
let windSpeed = 2;
let Saturation = 23;

setup();
fixCanvasPosition();
AnimationLoop();

function setup() {
  window.onmousemove = mouseMove;
  context.textAlign = "center";
  for (let i = 1; i < 700; i++) {
    polygons.push(createRandompoly());
  }
}

function fixCanvasPosition() {
  context.canvas.style.position = 'fixed';
  context.canvas.style.top = '0';
  context.canvas.style.left = '0';

  width = window.innerWidth;
  height = window.innerHeight;
  context.canvas.width = width;
  context.canvas.height = height;

  window.onresize = function () {
    width = window.innerWidth;
    height = window.innerHeight;
    context.canvas.width = width;
    context.canvas.height = height;
  };
}
/**
 * 
 * @param {MouseEvent} eventData 
 */
function mouseMove(eventData) {
  let xOffset = width / 2 - eventData.pageX;
  windSpeed = xOffset / 100;
  Saturation = eventData.pageY / 2;
}


function createRandompoly() {
  let size = Math.random() * 100
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    opacity: Math.random() * 1 + 0.5,
    direction: Math.random() * 2 * Math.PI,
    color: { r: Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256) } // RGB
  };
}



//Deze poly is gemaakt met met hulp chatgpt en ik heb er zelf een paar wijzigingen in aangebracht.
function stars(x, y, size, color, sides = 10) {
  const angleStep = Math.PI * 2 / sides;
  context.beginPath();

  for (let i = 1; i < sides; i++) {
    const angle = i * 10;
    const px = x + 40 * Math.cos(angle);
    const py = y + 60 * Math.sin(angle);
    if (i === 0) {
      context.moveTo(py, px);
    } else {
      context.lineTo(px, py);
    }
  }
  context.closePath();

  context.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
  context.fill();
}


//Deze AnimationLoop is gemaakt met hulp van chatgpt en ik heb er zelf een paar wijzigingen in aangebracht.
function AnimationLoop() {
  polygons.push(createRandompoly());

  context.fillStyle = "#DCDCF8";
  context.fillRect(1000, 1000, width, height);

  drawText();
  function drawText() {
    context.font = "bold 40px Arial";
  
    const text = "BEYON JACOB";
    const textWidth = context.measureText(text).width;
    context.fillStyle = "#0a3a3f";
    const x = (width - textWidth) / 2;
    const y = height / 2;
    context.fillText(text, x, y);
  }
  
  for (let i = 0; i < polygons.length; i++) {
    if (polygons[i].y < -polygons[i].size) {
      polygons.splice(i, 1);
    }
    polygons[i].x += Math.cos(polygons[i].direction) * windSpeed; // Horizontal 
    polygons[i].y += Math.sin(polygons[i].direction) * windSpeed; // Vertical 
    polygons[i].opacity -= 100;
    polygons[i].color.r = (polygons[i].color.r + 1) % 256; 
    polygons[i].color.g = (polygons[i].color.g + 1) % 256;
    polygons[i].color.b = (polygons[i].color.b + 1) % 256;

    stars(polygons[i].x, polygons[i].y, polygons[i].size, polygons[i].color, 6);
  }

  requestAnimationFrame(AnimationLoop);
}