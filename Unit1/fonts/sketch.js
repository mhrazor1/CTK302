let f1, f2;

function preload(){
  f1 = "Alexander Quill";
  f2 = loadFont('assets/Walkway.ttf');
}
function setup() {
  createCanvas(900, 600);
}

function draw() {
  textSize(100);
  textAlign(CENTER);
  textFont(f1);
  background('#2d2d2d');
  fill(0);
  text("Typekit Font", width/2, height/3);
  textFont(f2);
  text("Local Font", width/2, 2*(height/3));

}
