let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
      background('black');
      timer++;
      if (timer > 20) {
        timer = 0;
        state++;
      }
      break;

    case 1:
      background('#9966aa');
      timer++;
      if (timer > 40) {
        timer = 0;
        state++;
      }
      break;

    case 2:
      background('gold');
      timer++;
      if (timer > 60) {
        timer = 0;
        state = 0;
      }
      break;

    default:
    timer = 0;
    state = 0;
  }
}
