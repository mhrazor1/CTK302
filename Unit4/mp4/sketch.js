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
  for (var i = 0; i < curves.length; i++) {
    curves[i].display();
  }

}

function positionPing(position) {
  noFill();
	textSize(24) ;
  pings++;
  text("lat: " + position.latitude, 10, 40);
  text("long: " + position.longitude, 10, 90);
	text("number of updates " + num, 10, 140) ;

  mappedLat = map(position.latitude,locationData.latitude-1,locationData.latitude+1,0,windowWidth);
  mappedLong = map(position.longitude,locationData.longitude-1,locationData.longitude+1,0,windowWidth);
  lastDistance = distance;
  console.log(distance);
	distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi') ;
	text("you have moved " + distance, 10, 190);
  if (abs(distance - lastDistance) > 0.005 || pings == 1) {
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
    noFill();
    line(this.x1,this.y1,this.x2,this.y2);
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
    noFill();
    bezier(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3,this.x4,this.y4);
  }
}
