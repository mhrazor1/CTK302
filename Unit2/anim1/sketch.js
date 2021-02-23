let xPos=0;
let txt = 'i am speed';

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background('#EEEEEE')
  fill('black');
  //rect(xPos, 100, 50, 50);
  textSize(48);
  text(txt,xPos,height/2);
  xPos+=15;

  if(xPos>windowWidth)
  { xPos=0}

}
