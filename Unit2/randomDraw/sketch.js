function setup() {
  createCanvas(500, 500);
}

function draw() {

 // background(220);
  noStroke() ;
  fill(0, random(255), 0, random(40)) ;
  textSize(random(20,40)) ;
  //text("HULK", mouseX, mouseY) ;
  ellipse(mouseX, mouseY, random(100), random(100)) ;
}

function mouseReleased() {
//  saveCanvas("My Picture", 'jpg') ;
}
