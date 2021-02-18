let x=0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('#EEEEEE')
  fill('black');
  rect(x, 100, 50,50);

  x+=10;

  if(x>windowWidth)
  { x=0}

}
