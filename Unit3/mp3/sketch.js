let fires = [];
let particles = [];
let songs =[];
let wind = 0;
let gameState = 0;
let timer = 0;
function preload() {
  font = loadFont('assets/bold.ttf');
  songs.push(loadSound('assets/diagonals.wav'));
  songs[0].setVolume(0.5);
  songs.push(loadSound('assets/runwayN.wav'));
  songs[1].setVolume(0.3);
  songs.push(loadSound('assets/TMVE.wav'));
  songs[2].setVolume(0.5);
  songs.push(loadSound('assets/weepingBirch.wav'));
  songs[3].setVolume(0.5);

  currentSong = round(random(0,3));
}

function setup(resize) {
  textAlign(CENTER,CENTER);
  createCanvas(windowWidth, windowHeight);
  noStroke();
  if (!resize) {
    fires.push(new Flame);
  }
}

function draw() {
  timer++;

  switch (gameState) {
    case 0: //Welcome screen
      push();
      textFont(font);
      background(255, 180, 167);
      textSize(60);
      fill(0,0,0);
      text("WHACK-A-FLAME",windowWidth/2,windowHeight/2-30);
      pop();
      push();
      textSize(30);
      textFont(font);
      fill(0,0,0);
      text("Click to begin",windowWidth/2,(windowHeight/2)+30);
      pop();
    break;

    case 1: //Gameplay
      if (!songs[currentSong].isPlaying()) {
        songs[currentSong].play();
      }
      wind = random(0,.05);
      background(100);

      if (fires.length == 15) {
        gameState = 2; //lose
        break;
      }
      else if (fires.length == 0) {
        gameState = 3; //win
        break;
      }
      else if (timer > 1*60 && fires.length <= 15) {
        fires.push(new Flame);
        timer = 0;
      }
      for (var i = 0; i < fires.length; i++) {
        fires[i].display();
      }
      push();
      textFont(font);
      textSize(24);
      text("Put out the fires before there's too many!\n(Click on them)",windowWidth/2,30);
      pop();
    break;

    case 2: //lose screen
      push();
      background(0,0,0);
      push();
      fill('#ab1c1c');
      ellipse(windowWidth/2,windowHeight/2,windowHeight/1.2);
      pop();
      push();
      fill('#ffc579');
      ellipse(windowWidth/2,windowHeight/2,windowHeight/1.5);
      pop();
      textFont(font);
      textSize(50)
      fill(0,0,0);
      text("YOU HAVE FAILED.\n\nTHE WORLD IS\nCONSUMED BY FLAME.",windowWidth/2,windowHeight/2);
      pop();
      fires.splice(0);
    break;

    case 3: //win screen
      push();
      background('#91fffc');
      textSize(24)
      fill(0,0,0);
      text("you win :)",windowWidth/2,windowHeight/2);
      pop();
      fires.splice(1);
    break;
    default:
    break;
  }

}
class Flame{
  constructor(size) {
    this.pos = createVector(random(25,windowWidth-25),random(windowHeight/4,windowHeight-10));
    this.flames = [];
  }
  display() {
    this.flames.push(new Particle(this.pos));
    for (var i = 0; i < this.flames.length; i++) { //manipulate all particles
      this.flames[i].display();
      this.flames[i].move();
      if (this.flames[i].a < 1) {
        this.flames.splice(i,1);
      }
    }
  }
}
class Particle {

  constructor(position) {
    this.pos = createVector(position.x+random(-5,5),position.y+random(-5,5));
    this.initial = this.pos;
    this.velocity = createVector(random(-.3, .3), random(-8, -5)) ;
    this.r = 255;
    this.g = 180;
    this.b = 133;
    this.a = 255;
  }

  display() {
    fill(this.r,this.g,this.b,this.a);
    ellipse(this.pos.x, this.pos.y, ((0.25)^(this.a)/8));
  }

  move() {
    this.velocity.x = this.velocity.x + wind;
    this.velocity.y = this.velocity.y + random(.01,.08);
    this.pos.add(this.velocity) ;
    this.r = this.r - 5;
    this.g = this.g - 6;
    this.b = this.b - 6;
    this.a = this.a - (2+(fires.length/7));
  }

}

function windowResized() {
  setup(true);
  flames.splice(0);
  fires.push(new Flame);
}

function mouseReleased() {
  mousePos = createVector(mouseX,mouseY);
  if (gameState != 1) {
    gameState++;
  }
  if (gameState > 1) {
    gameState = 0;
  }
  if (gameState == 0) {
    fires.push(new Flame);
  }
  for (var i = 0; i < fires.length; i++) {
    if (fires[i].pos.dist(mousePos) < 22) {
      fires.splice(i,1);
    }
  }
}
