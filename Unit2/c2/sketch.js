var mic;
var vol;
let timer = 0;
let state = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(48);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  vol = (mic.getLevel()).toFixed(2);

  switch (state) {
    case 0:
      background('#9AD4D6');
      text('shhhh....',width/2,height/2);
    break;

    case 1:
      background('#F87060');
      text('BE QUIET!!!!!!!',width/2,height/2);
    break;

    default:
      text('click to begin',width/2,height/2);
    break;
  }

  if (vol<0.15 && (millis()-timer) > 200) {
      state = 0;
  }
  else if (vol>=0.15) {
      state = 1;
      //timer = 0;
  }
  print(millis() + ' millis');
  print(timer + ' timer');
  //print(vol);
  }

function mouseReleased(){
  if (state == -1) {
    state = 0;
  }
}
