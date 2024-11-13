let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let patterns = [
    function randomVerticalLines() {
        let colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];
        for (let i = 0; i < screenWidth; i += 10) {
            let color = colors[Math.floor(Math.random() * colors.length)];
            let yOffset = Math.random() * 20 - 10;
            context.fillStyle = color;
            context.fillRect(screenX + i, screenY + yOffset, 10, screenHeight);
        }
    },

    function randomGlitchCircles() {
        let colors = ['#FF8C33', '#33FFF5', '#8D33FF', '#FFC300'];
        for (let i = 0; i < 30; i++) {
            let color = colors[Math.floor(Math.random() * colors.length)];
            let x = Math.random() * screenWidth;
            let y = Math.random() * screenHeight;
            let size = Math.random() * 20 + 10;
            let offsetX = Math.random() * 10 - 5;
            let offsetY = Math.random() * 10 - 5;
            context.fillStyle = color;
            context.beginPath();
            context.arc(screenX + x + offsetX, screenY + y + offsetY, size, 0, Math.PI * 2);
            context.fill();
        }
    },

    function randomHorizontalLines() {
        let colors = ['#FF6F61', '#6B5B95', '#88B04B'];
        context.lineWidth = 2;
        for (let i = 0; i < screenHeight; i += 20) {
            let color = colors[Math.floor(Math.random() * colors.length)];
            context.strokeStyle = color;
            context.beginPath();
            context.moveTo(screenX, screenY + i);
            context.lineTo(screenX + screenWidth, screenY + i + Math.random() * 20 - 10);
            context.stroke();
        }
    },

    function randomGlitchSquares() {
        let colors = ['#34568B', '#FF6F61', '#88B04B', '#F7CAC9'];
        let spacing = 30;
        for (let x = 0; x < screenWidth; x += spacing) {
            for (let y = 0; y < screenHeight; y += spacing) {
                let color = colors[(x + y) % colors.length];
                let offsetX = Math.random() * 10 - 5;
                let offsetY = Math.random() * 10 - 5;
                context.fillStyle = color;
                context.fillRect(screenX + x + offsetX, screenY + y + offsetY, spacing, spacing);
            }
        }
    },

    function glitchySinWaveLines() {
        let colors = ['#F7CAC9', '#92A8D1', '#034F84'];
        context.lineWidth = 3;
        for (let i = 0; i < 10; i++) {
            context.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
            context.beginPath();
            context.moveTo(screenX, screenY + i * 30);
            for (let x = 0; x < screenWidth; x++) {
                let y = Math.sin(x / 15 + Math.random()) * 30 + screenHeight / 2 + Math.random() * 10 - 5;
                context.lineTo(screenX + x, screenY + y);
            }
            context.stroke();
        }
    },

    function randomGlitchColorBlocks() {
        let colors = ['#DAA520', '#6A5ACD'];
        let blockSize = 40;
        for (let x = 0; x < screenWidth; x += blockSize) {
            for (let y = 0; y < screenHeight; y += blockSize) {
                let color = colors[Math.floor(Math.random() * colors.length)];
                let offsetX = Math.random() * 15 - 7;
                let offsetY = Math.random() * 15 - 7;
                context.fillStyle = color;
                context.fillRect(screenX + x + offsetX, screenY + y + offsetY, blockSize, blockSize);
            }
        }
    },

    function glitchySineWave() {
        context.strokeStyle = '#FF6F61';
        context.lineWidth = 4;
        context.beginPath();
        for (let x = 0; x < screenWidth; x++) {
            let y = Math.sin(x / 30 + Math.random()) * 40 + screenHeight / 2 + Math.random() * 10 - 5;
            context.lineTo(screenX + x, screenY + y);
        }
        context.stroke();
    },

    function randomGlitchShapes() {
        let colors = ['#FF6347', '#4682B4', '#32CD32', '#FFB6C1'];
        for (let i = 0; i < 15; i++) {
            let color = colors[Math.floor(Math.random() * colors.length)];
            let shape = Math.random() > 0.5 ? 'circle' : 'rect';
            let x = Math.random() * screenWidth;
            let y = Math.random() * screenHeight;
            let size = Math.random() * 30 + 10;
            let offsetX = Math.random() * 10 - 5;
            let offsetY = Math.random() * 10 - 5;
            context.fillStyle = color;
            if (shape === 'circle') {
                context.beginPath();
                context.arc(screenX + x + offsetX, screenY + y + offsetY, size, 0, Math.PI * 2);
                context.fill();
            } else {
                context.fillRect(screenX + x + offsetX, screenY + y + offsetY, size, size);
            }
        }
    }
];

let randomPattern = patterns[Math.floor(Math.random() * patterns.length)];

let tvWidth = 720;
let tvHeight = 480;
let frameWidth = 30;
let centerX = (canvas.width - tvWidth) / 2;
let centerY = (canvas.height - tvHeight) / 2;
let screenX = centerX + frameWidth;
let screenY = centerY + frameWidth;
let screenWidth = tvWidth - 2 * frameWidth;
let screenHeight = tvHeight - 2 * frameWidth;

TV();

function TV() {
    context.fillStyle = '#333';
    context.fillRect(centerX, centerY, tvWidth, tvHeight);
    context.fillStyle = '#000';
    context.fillRect(screenX, screenY, screenWidth, screenHeight);
    context.save();
    context.beginPath();
    context.rect(screenX, screenY, screenWidth, screenHeight);
    context.clip();
    randomPattern();
    context.restore();
    context.fillStyle = '#555';
    context.fillRect(centerX + (tvWidth / 4), centerY + tvHeight, tvWidth / 2, 20);
}

