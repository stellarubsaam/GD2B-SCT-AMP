class Point {
  constructor(position, radius, color, label){
    this.position = position;
    this.radius = radius;
    this.color = color;
    this.label = label || "";
  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "blue";
    context.fillStyle = this.color;
    context.arc(this.position.dx, this.position.dy, this.radius, 0, 2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    context.fillStyle = "black";
    context.font = "12px Arial";
    context.fillText(this.label, this.position.dx-20, this.position.dy-this.radius-10);
  }

  distanceToOtherPoint(P){
   let dx = this.position.dx - P.x;
   let dy = this.position.dy - P.y;
   return Math.sqrt(dx*dx + dy*dy);
 }

  drag(){
    let mousePosition ={};
    let dragStatus = false;
    document.addEventListener('mousedown',(evt)=>{
      mousePosition.x = evt.clientX;
      mousePosition.y = evt.clientY;
      console.log(mousePosition)
      if(this.distanceToOtherPoint(mousePosition)<= this.radius){
        dragStatus = true;
        evt.stopImmediatePropagation();
      } else {
        dragStatus = false;
      };
    });

    document.addEventListener('mousemove',(evt)=>{
      mousePosition = {};
      mousePosition.x = evt.clientX;
      mousePosition.y = evt.clientY;

      if(dragStatus == true){
        this.position.dx = evt.clientX;
        this.position.dy = evt.clientY;
      }
      if(this.distanceToOtherPoint(mousePosition)<= this.r){
        document.body.style.cursor = "pointer";
      } else {
        document.body.style.cursor = "default";
      }
    });

    document.addEventListener('mouseup',(evt)=>{
      dragStatus = false;
    })


  }


}
