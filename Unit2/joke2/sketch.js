let state = 0;
let timer = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(48);
}

function draw() {
  switch (state) {
    case 0:
      background('#9AD4D6');
      text('I came up with\na new word:',width/2,height/2);
    break;

    case 1:
      background('#F87060');
      text('plagiarism',width/2,height/2);
    break;
    default:
  }
  timer++;
  if (timer > 3*60) {
    state++;
    timer = 0;
    if (state>1) {
      state = 0;
    }
  }
}
