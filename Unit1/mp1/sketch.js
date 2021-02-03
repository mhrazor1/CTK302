function preload() {
  f1 = loadFont('assets/akira.otf');
  body = loadModel('assets/modelBody.obj', true);
  eye = loadModel('assets/modelEye.obj', true);
  time = 0;
  beep = loadSound('assets/beep.wav');
  beep.setVolume(0.3);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  print(windowWidth + ', ' + windowHeight);
  eyeZ = height / 2 / tan((30 * PI) / 180); // The default distance the camera is away from the origin.
  normalMaterial();
  colRest = color('rgb(134, 216, 239)');
  colActive = color('rgb(232, 96, 96)');
  last = colRest;
  let colBlend;
}

function draw() {
  textFont(f1);
  textAlign(CENTER);
  background('#2d2d2d');

  speed = abs(winMouseX - pwinMouseX);

  let eyeMat;

  x = (width / 2) - mouseX;
  y = (width / 2) - mouseY;

  thetaX = (atan(x / eyeZ));
  thetaY = (atan(y / eyeZ));

  fill(0);

  rotateY(thetaX * -1);
  rotateX(thetaY);
  ambientLight('#bbbbbb');
  ambientMaterial('hsl(0, 0%, 90%)');
  model(body);

  if (speed >= 50 && speed < 1000) {
    if (beep.isPlaying() === false && last === colRest) {
      beep.play();
    }
    ambientMaterial(colActive);
    last = color(colActive);;
    time = millis();
  } else if (speed < 5 && (millis() - time) > 1000) {
    ambientMaterial(colRest);
    last = color(colRest);
  } else {
    ambientMaterial(last);
  }

  translate(0, 0, 10);
  model(eye);
}

function mouseReleased() {
  print(x + ", " + mouseY + ', ' + eyeZ + ', ' );
}

function windowResized() {
  setup();
}
