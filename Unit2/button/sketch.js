let state = 0;
let buttonOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  textSize(48);
}

function draw() {

  switch (state) {
    case 0:
      background('#eaa54d');
      text('Someone in London\ngets stabbed\nevery 52 seconds...',width/2,height/2);
    break;

    case 1:
      background('#3AB795');
      text('Poor bastard.',width/2,height/2);
    break;
    default:
  }
  push();
  noStroke();
  fill('#6F1A07');
  quad((windowWidth/2)-100,(windowHeight*.8)-50,
      (windowWidth/2)+100,(windowHeight*.8)-50,
      (windowWidth/2)+100,(windowHeight*.8)+50,
      (windowWidth/2)-100,(windowHeight*.8)+50);
  pop();
}

function mouseReleased() {
  if (mouseX > (windowWidth/2)-100 && mouseX < (windowWidth/2)+100 && mouseY > (windowHeight*.8)-50 && mouseY < (windowHeight*.8)+50) {
    state++;
    if (state>1) {
      state=0;
    }
  }
}
