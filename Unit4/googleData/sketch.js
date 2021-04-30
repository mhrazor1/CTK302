var bubbles = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1SVTx8yCCemeRJZA931MwMwNCrCOJyGjZ0oAWB50QcmU'; // this is KEY of the URL from the sheet
  //let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  //https://docs.google.com/spreadsheets/d/1SVTx8yCCemeRJZA931MwMwNCrCOJyGjZ0oAWB50QcmU/edit?usp=sharing
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff

  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].bandits, data[i].merchant, data[i].wizard)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }
}


function draw() {
  background('white');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }
}


// my Bubble class
class Bubble {

  constructor(bandits, merchant, wizard) {
    this.bandits = bandits;
    this.merchant = merchant;
    this.wizard = wizard;
    this.pos = createVector(random(width), random(height));
    this.velocity = createVector(random(0,2), 0);
  }


  display() {
    if (this.bandits == "Draw your blade (Intimidation)") {
      push();
      fill('#ff5454');
      rect(this.pos.x, this.pos.y, 80, 75);
      pop();
      text("Intimidate", this.pos.x, this.pos.y - 15);
    } else if (this.bandits == "Conceal your valuables (Stealth)") {
      push();
      fill('#c7c7c7');
      rect(this.pos.x, this.pos.y, 100, 75);
      pop();
      text("Stealth", this.pos.x, this.pos.y - 15);
    } else if (this.bandits == "Attempt to charm the bandits (Magic)") {
      push();
      fill('#3be5ff');
      rect(this.pos.x, this.pos.y, 100, 75);
      pop();
      text("Magic", this.pos.x, this.pos.y - 15);
    } else if (this.bandits == "Surrender") {
      push();
      fill('#ffffff');
      rect(this.pos.x, this.pos.y, 100, 75);
      pop();
      text("Coward", this.pos.x, this.pos.y - 15);
    }

    if (this.merchant == "A silver necklace with a glowing orange pendant.") {
      push();
      pop();
      text("Necklace", this.pos.x, this.pos.y);
    } else if (this.merchant == "A small metal cube that appears to move on its own.") {
      text("Cube", this.pos.x, this.pos.y);
    } else if (this.merchant == "A pair of goggles with purple-tinted lenses.") {
      text("Goggles", this.pos.x, this.pos.y);
    } else if (this.merchant == "Decline and move on.") {
      text("Swagless", this.pos.x, this.pos.y);
    }

    if (this.wizard == "Fireball") {
      text("Fireball", this.pos.x, this.pos.y+15);
    } else if (this.wizard == "Animate Dead") {
      text("Animate Dead", this.pos.x, this.pos.y+15);
    } else if (this.wizard == "Dispel Magic") {
      text("Dispel Magic", this.pos.x, this.pos.y+15);
    } else if (this.wizard == "Ask for gold instead") {
      text("Gold fiend", this.pos.x, this.pos.y+15);
    }
  }

  move() {
    if (this.pos.x > windowWidth) {
      this.pos.x = 0
    }
    this.pos.add(this.velocity);
  }
}
