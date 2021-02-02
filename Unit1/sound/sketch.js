function preload() {
  soundFormats('ogg');
  song1 = loadSound('assets/blackRefraction.ogg')
  setVolume(0.5);
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('#EEEEEE');
}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.play();
  }
}

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
