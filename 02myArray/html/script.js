const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];

function drawTenBalls({
  let A = new Point(new Vector2d(getRandom(width),getRandom(height)), 40);



  A.addEventListener('mousedown', ()=>{
    document.getElementsById('A').fillStyle = "red";
  })
  points.push(A)
  //A.draw(context);

  for(let i = 0; i<10; i++){
    points[i].draw(context);
}


if(complete = true){
context.clearRect(0, 0, width, height);
requestAnimationFrame(animate);
drawTenBalls();
}


function getRandom(max){
  return Math.floor(Math.random()*max);
}
