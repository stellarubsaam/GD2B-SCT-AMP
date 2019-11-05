const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let arrow = new Arrow(new Vector2d(context.canvas.width/2, context.canvas.height/2), 0, 3, 255, 10, 10);
let mouse = new Vector2d(10, 10);

function Update() {
    requestAnimationFrame(Update);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    arrow.angle = Math.atan2((mouse.dy - arrow.pos.dy), ( mouse.dx - arrow.pos.dx));
    arrow.draw(context);
}

Update()

window.addEventListener("mousemove", (e)=>{
    mouse.dx = e.clientX;
    mouse.dy = e.clientY;
});
