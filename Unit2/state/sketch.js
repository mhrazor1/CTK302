  let state = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();


}

function draw() {
  time = millis();
  rectMode(CENTER);

  switch (state) {

    case 0:
      background('#C05746');
      for (var xPos = 0; xPos < windowWidth; xPos++) {
        for (var yPos = 0; yPos < windowHeight; yPos++) {
          if (yPos%20===0 && xPos%20===0) {
            push();
            fill(map(xPos,0,windowWidth,80,173,false),map(yPos,0,windowHeight,48,198,false),map(xPos,0,windowWidth,71,152,false));
            rect(xPos,yPos,10,10);
            pop();
          }
        }
      }
    break;

    case 1:
      background('#292F36');
      for (var xPos = 0; xPos < windowWidth; xPos++) {
        for (var yPos = 0; yPos < windowHeight; yPos++) {
          if (yPos%40===0 && xPos%40===0) {
            push();
            fill(map(xPos,0,windowWidth,78,255,false),map(xPos,0,windowWidth,107,205,false),map(yPos,0,windowHeight,107,196,false));
            circle(xPos,yPos,10);
            pop();
          }
        }
      }
    break;

    case 2:
      background('#403233');
      for (var xPos = 0; xPos < windowWidth; xPos++) {
        for (var yPos = 0; yPos < windowHeight; yPos++) {
          if (yPos%40===0 && xPos%40===0) {
            push();
            fill(map(xPos,0,windowWidth,152,241,false),map(xPos,0,windowWidth,154,217,false),map(yPos,0,windowHeight,62,194,false));
            quad(xPos+10,yPos,xPos,yPos-10,xPos-10,yPos,xPos,yPos+10);
            pop();
          }
        }
      }
    break;

    case 3:
      background('#D6FFB7');
      for (var xPos = 0; xPos < windowWidth; xPos++) {
        for (var yPos = 0; yPos < windowHeight; yPos++) {
          if (yPos%40===0 && xPos%40===0) {
            push();
            fill(map(xPos,0,windowWidth,122,236,false),map(xPos,0,windowWidth,11,231,false),map(yPos,0,windowHeight,67,199,false));
            triangle(xPos+10,yPos+10,xPos+10,yPos-10,xPos-10,yPos-10);
            pop();
          }
        }
      }
    break;

    case 4:
      background('#DBD5B5');
      for (var xPos = 0; xPos < windowWidth; xPos++) {
        for (var yPos = 0; yPos < windowHeight; yPos++) {
          if (yPos%40===0 && xPos%40===0) {
            push();
            fill(map(xPos,0,windowWidth,43,252,false),map(xPos,0,windowWidth,158,171,false),map(yPos,0,windowHeight,16,179,false));
            triangle(xPos+10,yPos+10,xPos+10,yPos-10,xPos-10,yPos+10);
            pop();
          }
        }
      }
    break;
  }
}
function mouseReleased() {
    state++;
    if (state>4) {
      state =0;
    }
    print('state');
}
