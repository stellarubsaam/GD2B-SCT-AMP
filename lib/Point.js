class Point {
  constructor(position, radius){
    this.position = position;
    this.radius = radius;
  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.arc(this.position.dx, this.position.dy, this.radius, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }
}
