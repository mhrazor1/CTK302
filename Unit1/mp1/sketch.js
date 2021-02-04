/*
Time log:
Fri 29 : 2hr
Tues 2 : 5hr
Thurs 4: 1hr
*/


function preload() {
  f1 = loadFont('assets/LGC.ttf');
  body = loadModel('assets/modelBody.obj', true);
  eye = loadModel('assets/modelEye.obj', true);
  time = 0;
  beep = loadSound('assets/beep.wav');
  beep.setVolume(0.2);
  rest = loadSound('assets/rest.wav');
  rest.setVolume(0.1);
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
  text("This is QUB, a local security droid.\nThey're new to the force and a little skittish,\n so don't move your mouse too fast,\n or they might get scared.",0,-windowHeight/3);
  pop();

  speed = abs(winMouseX - pwinMouseX); //calculcate mouse speed between current and last frame

  x = (width / 2) - mouseX;
  y = (height / 2) - mouseY;

  thetaX = (atan(x / eyeZ)); //calculates angle between eyeZ and horizontal mouse pos
  thetaY = (atan(y / eyeZ)); //calculates angle between eyeZ and vertical mouse pos

  fill(0);

  rotateY(thetaX * -1);
  rotateX(thetaY);

  ambientLight('#464646');
  ambientMaterial('hsl(0, 0%, 60%)');

  model(body);

  if (speed >= 60 && speed < 1000) {

    if (beep.isPlaying() === false && last === colRest) {beep.play();}

    ambientMaterial(colActive);
    last = color(colActive);;
    time = millis();

  } else if (speed < 5 && (millis() - time) > 1000) {

    if (rest.isPlaying() === false && last === colActive) {rest.play();}

    ambientMaterial(colRest);
    last = color(colRest);

  } else {
    ambientMaterial(last);
  }

  translate(0, 0, 10);
  model(eye);
} //end of draw

function windowResized() {
  setup();
}

function mousePressed(){
  userStartAudio();
}
