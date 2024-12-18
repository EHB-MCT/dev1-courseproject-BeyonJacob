// Create and append a canvas element to the document
export const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

// Get the 2D rendering context for drawing on the canvas
const context = canvas.getContext("2d");

// Set the initial canvas size to match the window's dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Add an event listener to handle window resizing
// When the window is resized, update the canvas size
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Export the context for use in other parts of the application
export default context;
