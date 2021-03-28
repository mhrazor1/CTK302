let particles = []; //holds instances of 'car' class
function setup(resize) {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //if (!resize) for (var i = 0; i < windowWidth; i++) particles.push(new Particle()); //creates new particles
}

function draw() {
  background(100);
  particles.push(new Particle());
  for (var i = 0; i < particles.length; i++) { //manipulate all particles
    particles[i].display();
    particles[i].move();
    if (particles[i].pos.y < -windowHeight){
      particles.splice(i,1);
    }
  }
}

// Particle class
class Particle {

  // constructor and attributes
  constructor() {
    if (mouseX < windowWidth && mouseY < windowHeight) {
      this.pos = createVector(mouseX,mouseY);
    } else {
      this.pos = createVector(windowWidth/2, (windowHeight/2)+150);
    }
    this.velocity = createVector(random(-.5, .5), random(-8, -4)) ;
    //this.col = color(random(0,255),random(0,255),random(0,255));
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.a = 255;

  }

  // methods
  display() {
    fill(this.r,this.g,this.b,this.a);
    ellipse(this.pos.x, this.pos.y, 25);
  }

  move() {
    this.pos.add(this.velocity) ;
    this.a = this.a - 3;
    // if (this.pos.x > width) this.pos.x = 0 ;
    // if (this.pos.x < 0) this.pos.x = width ;
    // if (this.pos.y > height) this.pos.y = 0 ;
    // if (this.pos.y < 0) this.pos.y = height ;
  }

}
function windowResized() {
  setup(true);
}
