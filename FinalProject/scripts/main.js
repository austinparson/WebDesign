let y = 0; // starting at the top of the canvas

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // our drawing “brush”

ctx.fillStyle = "rgba(50, 142, 200, 0.8)";
ctx.shadowColor = "rgba(4, 211, 111, 0.8)";
ctx.shadowBlur = 20;

ctx.beginPath();
ctx.arc(150, 150, 40, 0, Math.PI * 2);
ctx.fill();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Add this line that erases the previous frame

    ctx.beginPath();
    ctx.arc(150, y, 40, 0, Math.PI * 2); // use y instead of 150 so it moves along the vertical axis
    ctx.fill();

    y += 1; // tiny downward movement
    if (y > canvas.height) y = 0; // Add this line to make the animation loop forever
}

function loop() {
    draw();
    requestAnimationFrame(loop);
}

loop(); // start the animation