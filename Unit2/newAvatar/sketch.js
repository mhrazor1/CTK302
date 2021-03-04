/*
Time log:
Fri 29 : 2hr
Tues 2 : 5hr
Thurs 4: 1hr
*/
let time = 0;
let state = -1;

function preload() {
  f1 = loadFont('assets/LGC.ttf');
  body = loadModel('assets/modelBody.obj', true);
  eye = loadModel('assets/modelEye.obj', true);
  beep = loadSound('assets/beep.wav');
  beep.setVolume(0.2);
  rest = loadSound('assets/rest.wav');
  rest.setVolume(0.1);
  alarm = loadSound('assets/alarm.wav');
  alarm.setVolume(0.3);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  print(windowWidth + ', ' + windowHeight);
  eyeZ = height / 2 / tan((30 * PI) / 180); // The default distance the camera is away from the origin.
  normalMaterial();
  colRest = color('rgb(116, 210, 236)');
  colActive = color('hsl(0, 74%, 63%)');
  last = colRest;
}

function draw() {
  background('rgb(107, 80, 86)');
  pointLight(color('hsl(0, 0%, 80%)'), 50, -windowHeight/3, eyeZ);

  textFont(f1);
  textAlign(CENTER);
  textSize(25);

  push();
  fill('#d6d6d6');
  text("This is QUB, a local security droid.\nThey're new to the force and a little skittish,\n so don't move your mouse too fast,\n or they might get scared.\nAnd especially DO NOT CLICK",0,-windowHeight/2.5);
  pop();

  speed = abs(winMouseX - pwinMouseX); //calculcate mouse speed between current and last frame

  x = (width / 2) - mouseX;
  y = (height / 2) - mouseY;

  thetaX = (atan(x / eyeZ)); //calculates angle between eyeZ and horizontal mouse position
  thetaY = (atan(y / eyeZ)); //calculates angle between eyeZ and vertical mouse position

  fill(0);

  ambientLight('#464646');
  ambientMaterial('hsl(0, 0%, 60%)');

  if (mouseIsPressed) {
    state = 2;
  } else if (speed >= 60 && speed < 1000) {
    state = 1;
  } else if (speed < 5 && (millis() - time) > 1000) {
    state = 0;
  } else {
    state = null;
  }

  switch (state) {
    case 0: //IDLE
      if (!rest.isPlaying() && last == colActive) {rest.play();}
      rotateY(thetaX * -1);
      rotateX(thetaY);
      model(body);
      ambientMaterial(colRest);
      last = color(colRest);
      translate(0, 0, 10);
      model(eye);
    break;

    case 1: //WARNING
      if (!beep.isPlaying() && last == colRest) {beep.play();}
      rotateY(thetaX * -1);
      rotateX(thetaY);
      model(body);
      ambientMaterial(colActive);
      last = color(colActive);
      time = millis();
      translate(0, 0, 10);
      model(eye);
    break;

    case 2: //ALARM
      alarm.play();
      rotateY((thetaX * -1)+random(-PI/11,PI/11));
      rotateX((thetaY)+random(-PI/11,PI/11));
      rotateZ(PI/81);
      model(body);
      last = color(colActive);
      ambientMaterial(colActive);
      time = millis();
      translate(0, 0, 10);
      model(eye);
    break;

    default:
      rotateY(thetaX * -1);
      rotateX(thetaY);
      model(body);
      ambientMaterial(last);
      translate(0, 0, 10);
      model(eye);
    break;
  }


} //end of draw

function windowResized() {
  setup();
}

function mousePressed(){
  userStartAudio();
}
