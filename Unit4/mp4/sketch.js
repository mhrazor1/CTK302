var num ;
var pings;
var distance;
var lastDistance
var locationData;
var curves = [];
var mappedLat;
var mappedLong;
var center

function preload() {

    locationData =  getCurrentPosition();
}

function setup() {
  center = createVector(windowWidth/2,windowHeight/2);
	num = 0 ;
  pings = 0;
  intervalCurrentPosition(positionPing, 3000) ;
	createCanvas(displayWidth, displayHeight) ;
}

function draw() {
  background('white');
  //noFill();
  for (var i = 0; i < curves.length; i++) {
    curves[i].display();

  }
  //textSize(24) ;
  text('updates: ' + num, 10, 140);
  text('distance: ' + distance, 10, 160);
  text('last dist: ' + lastDistance, 10, 180);
}

function positionPing(position) {
  pings++;
  mappedLat = map(position.latitude,locationData.latitude-1,locationData.latitude+1,0,windowWidth);
  mappedLong = map(position.longitude,locationData.longitude-1,locationData.longitude+1,0,windowWidth);

  console.log(distance);
	distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi') ;
  if (abs(distance - lastDistance) > 0.001 || pings == 1) {
    lastDistance = distance;
    num++ ;
    for (var i = 0; i <= 3; i++) {
      switch (round(random(0,1))) {
        case 0:
          curves.push(new Line);
          print('line ');
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
    this.x2 = center.x+random(-num*distance,num*distance);
    this.y2 = center.y+random(-num*distance,num*distance);
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
    this.x4 = center.x+random(-num*distance,num*distance);
    this.y4 = center.y+random(-num*distance,num*distance);
  }
  display(){
    push();
    noFill();
    bezier(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3,this.x4,this.y4);
    pop();
  }
}
