function preload() {
  p1=loadImage('assets/1.jpg');
  p2=loadImage('assets/2.jpg');
  p3=loadImage('assets/3.jpg');
  createCanvas(0, 0);
}

function setup() {
  print('setup');
  p1.resize(windowWidth*.75,0);
  p2.resize(windowWidth*.75,0);
  p3.resize(windowWidth*.75,0);
  imgHeight = p1.height + p2.height + p3.height;
  resizeCanvas(windowWidth, imgHeight);
  imageMode(CENTER);
}

function draw() {
  image(p1,width/2,p1.height/2);
  image(p2,width/2,p1.height+(p2.height/2));
  image(p3,width/2,p1.height+p2.height+(p3.height/2));
}

function windowResized() {
  setup();
}
