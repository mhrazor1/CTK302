let state = 3;

function preload() {
  s0 = loadSound('assets/MA.ogg');
  s0.setVolume(.6);
  s1 = loadSound('assets/pond.ogg');
  s1.setVolume(.5);
  s2 = loadSound('assets/idles.ogg');
  s2.setVolume(.4);
  i0 = loadImage('assets/MA.jpg');
  i1 = loadImage('assets/pond.jpg');
  i2 = loadImage('assets/idles.jpg');
  lgc = loadFont('assets/LGC.ttf')
}

function setup() {
  imageMode(CENTER);
  textAlign(CENTER,CENTER);
  textFont(lgc);
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background('#dbdbdb');
  switch (state) {

    case 0:
      if (!(s0.isPlaying())) {
        s1.pause();
        s2.pause();
        s0.play();
      }
      image(i0,width/2,height/2,500,500);
      text('Paradise Circus - Massive Attack',width/2, height/2+290);
    break;

    case 1:
      if (!(s1.isPlaying())) {
        s0.pause();
        s2.pause();
        s1.play();
      }
      image(i1,width/2,height/2,500,500);
      text('Sweep Me Off My Feet - Pond',width/2, height/2+290);
    break;

    case 2:
      if (!(s2.isPlaying())) {
        s0.pause();
        s1.pause();
        s2.play();
      }
      image(i2,width/2,height/2,500,500);
      text('Never Fight A Man With A Perm - IDLES',width/2, height/2+290);
    break;

    default:
      textSize(36);
      text('Click to begin',width/2, height/2);
    break;

  }
}
function mouseReleased() {
    state++;
    if (state>2) {
      state =0;
    }
}

function windowResized() {
  setup();
}
