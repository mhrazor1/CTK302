let state = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(48);
}

function draw() {
  switch (state) {
    case 0:
      background('#eaa54d');
      text('Someone in London\ngets stabbed\nevery 52 seconds',width/2,height/2);
    break;

    case 1:
      background('#3AB795');
      text('Poor bastard',width/2,height/2);
    break;
    default:

  }
}

function mouseReleased() {
  state++;
  if (state>1) {
    state=0;
  }
}
