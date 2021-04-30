// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;



function setup(resize) {
  createCanvas(windowWidth, windowHeight);
  font = loadFont('assets/LGC.ttf')
  imageMode(CENTER);
  cloud = loadImage('assets/cloud.png');
  if (!resize) {
    var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Washington,IL,US&units=imperial&';
    //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';
    var myIDString = 'appid=cba61c953c443538344c9252ca4c2b60'; // USE YOUR ID HERE, take out the x's!!!
    var myBigString = myCityString + myIDString ;
    loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.
  }
}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  sunrise = new Date(weather.sys.sunrise*1000).toLocaleTimeString("en-US", { hour: 'numeric', minute: '2-digit'});
  sunset = new Date(weather.sys.sunset*1000).toLocaleTimeString("en-US", { hour: 'numeric', minute: '2-digit'});
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background('#dbf4ff');
      fill('black');
      textFont(font);
      textSize(24);
      text("What is the weather in " + weather.name + "?", 20, 40);
      text("Windspeed is " + round(windspeed)+ " mph", 20, 80);
      text("The temperature is " + round(temp) + "° Fahrenheit", 20, 120);
      text("Sunrise: "+sunrise,20,160);
      text("Sunset: "+sunset,20,200);


      // cloud
      fill('white');
      noStroke();
      //ellipse(x, 300, 200, 100);
      image(cloud,x,windowHeight/2,600,400);

      // move the cloud's x position
      x = x + windspeed;
      if (x > width) x = 0;

      break;

  }
}

function windowResized() {
  setup(true);
}
