function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(mouseX,mouseY,mouseX+mouseY);
  for(let i=0;i<100;i++){
    line(mouseX+i,mouseY+i, 200, 200);
    rectMode(CENTER)
    fill(255, 204, 0,40);
    rect(mouseX+i,mouseY+i,10,10)
  }
  for(let i=0;i<100;i++){
    line(mouseX-i,mouseY-i, 200, 200);
    rectMode(CENTER)
    fill(255, 204, 0,40);
    rect(mouseX-i,mouseY-i,10,10)
  }
}