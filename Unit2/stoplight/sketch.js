let state = 0;
let timer = 0;
let speed = 0;

function preload() {
  car = loadImage('car.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  textSize(48);
  xpos=windowWidth/2;
}

function draw() {
  print(state);
  background('#ffffff');
  fill('#e6da45')
  rect(width/2,height/2,200,600);

  switch (state) {
    case 0:
      push();
      fill('#363636');
      circle(width/2,(height/2)-200,175);
      fill('#363636');
      circle(width/2,(height/2),175);
      fill('#00ff00');
      circle(width/2,(height/2)+200,175);
      pop();
      push();
      image(car,xpos,(height/2)+300,475,175);
      if (xpos < windowWidth) {
        xpos = xpos + 5;
        translate(xpos,0);
      } else{
        xpos = -475;
      }
      pop();
    break;

    case 1:
      push();
      fill('#363636');
      circle(width/2,(height/2)-200,175);
      fill('#ffff00');
      circle(width/2,(height/2),175);
      fill('#363636');
      circle(width/2,(height/2)+200,175);
      pop();
      push();
      image(car,xpos,(height/2)+300,475,175);
      if (xpos < windowWidth) {
        xpos = xpos + 2;
        translate(xpos,0);
      } else{
        xpos = -475;
      }
      pop();
    break;

    case 2:
      push();
      fill('#ff0000');
      circle(width/2,(height/2)-200,175);
      fill('#363636');
      circle(width/2,(height/2),175);
      fill('#363636');
      circle(width/2,(height/2)+200,175);
      pop();
      push();
      image(car,xpos,(height/2)+300,475,175);
      if (xpos < windowWidth) {


      } else{
        xpos = -475;
      }
      pop();
    break;
  }
  timer++;
  if (timer > 3*60) {
    state++;
    timer = 0;
    if (state>2) {
      state = 0;
    }
  }
}
