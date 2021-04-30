var num ;
var distance ;
var locationData;
var mosaic = createImage(displayWidth,displayHeight);

function preload(){

    locationData =  getCurrentPosition();
}

function setup(){
	num = 0 ;
  intervalCurrentPosition(positionPing, 10000) ;
	createCanvas(displayWidth, displayHeight) ;
  let d = pixelDensity();
}

function draw() {



}
function positionPing(position){
	textSize(24) ;
	num++ ;
	background(255) ;
  text("lat: " + position.latitude, 10, 40);
  text("long: " + position.longitude, 10, 90);
	text("number of updates " + num, 10, 140) ;

	distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi') ;
	text("you have moved " + distance, 10, 190) ;
  updateMosaic(position);
}
function updateMosaic(position){
  mosaic.loadPixels();
  for (var i = 0; i < mosaic.pixels.length; i++) {
    array[i]
  }
}
