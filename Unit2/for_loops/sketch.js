function setup() {
  createCanvas(500, 500);
}

function draw() {
  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 20; i++) {
      rect(i * 50 + 10, j * 50 + 10, 25, 5);
    }
  }
}
