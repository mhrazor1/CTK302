var num ;
var pings;
var distance;
var lastDistance;
var locationData;
var curves = [];
var mappedLat;
var mappedLong;
var center;
var point1;
var point2;

function preload() {

    locationData =  getCurrentPosition();
    point1 = locationData;
}

function setup() {
  center = createVector(windowWidth/2,windowHeight/2);
	num = 0 ;
  pings = 0;
  intervalCurrentPosition(positionPing, 10000) ;
	createCanvas(displayWidth, displayHeight) ;
}

function draw() {
  background('white');
  for (var i = 0; i < curves.length; i++) {
    curves[i].display();

  }
  // text('updates: ' + num, 10, 40);
  // text('distance: ' + distance, 10,60);
  // text('last dist: ' + point1.latitude + ' ' + point1.longitude, 10, 80);
}

function positionPing(position) {

  pings++;
  mappedLat = map(position.latitude,locationData.latitude-1,locationData.latitude+1,0,windowWidth);
  mappedLong = map(position.longitude,locationData.longitude-1,locationData.longitude+1,0,windowWidth);

  console.log(distance);

  distance = calcGeoDistance(point1.latitude,point1.longitude,position.latitude,position.longitude);
  if (distance > 0.005 || pings == 1) {
    point1 = position;
    num++ ;
    for (var i = 0; i <= 3; i++) {
      switch (round(random(0,1))) {
        case 0:
          curves.push(new Line);
          break;
        case 1:
          curves.push(new Bez);
          break;
        default:
      }
    }
  }

}

class Line {
  constructor(){
    this.x1 = center.x+random(-num*num/2,num*num/2);
    this.y1 = center.y+random(-num*num/2,num*num/2);
    this.x2 = center.x+random(-num*(distance*10),num*(distance*10));
    this.y2 = center.y+random(-num*(distance*10),num*(distance*10));
  }
  display(){
    push();
    noFill();
    line(this.x1,this.y1,this.x2,this.y2);
    pop();
  }
}

class Bez {
  constructor(){
    this.x1 = center.x+random(-num*num/2,num*num/2);
    this.y1 = center.y+random(-num*num/2,num*num/2);
    this.x2 = this.x1+random(-num*num,num*num);
    this.y2 = this.y1+random(-num*num,num*num);
    this.x3 = this.x2+random(-num*num,num*num);
    this.y3 = this.y2+random(-num*num,num*num);
    this.x4 = center.x+random(-num*(distance*10),num*(distance*10));
    this.y4 = center.y+random(-num*(distance*10),num*(distance*10));
  }
  display(){
    push();
    noFill();
    bezier(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3,this.x4,this.y4);
    pop();
  }
}
