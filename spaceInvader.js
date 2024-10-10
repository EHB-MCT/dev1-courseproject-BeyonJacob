let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

box();
signature();
 
function box() {
    context.fillStyle = 'black';
    context.fillRect(10, 10, 300, 300);
}


function signature() {
    context.fillStyle = '#707cd5';
    context.fillRect(35, 230, 250, 50);
    context.fillRect(85, 80, 150, 50);
    context.fillRect(235, 130, 50, 50);
    context.fillRect(35, 130, 50, 50);
    context.fillRect(135, 130, 50, 50);
    context.fillRect(85, 180, 150, 50);
    context.fillRect(185, 30, 50, 50);
    context.fillRect(85, 30, 50, 50);

}




