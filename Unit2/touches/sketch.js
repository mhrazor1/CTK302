let numberOfTouches ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22);
      break ;

      case 1:
      text("it's kind of lonely here", 5, 22);
      fill('#ff6670');
      circle(touches[0].x,touches[0].y,50);
      break ;

      case 2:
      text("two fingers are touching the screen", 5, 22);
      fill('#ff6670');
      circle(touches[0].x,touches[0].y,50);
      circle(touches[1].x,touches[1].y,50);
      break ;

      case 3:
      text("three are touching the screen", 5, 22);
      fill('#ff6670');
      circle(touches[0].x,touches[0].y,50);
      circle(touches[1].x,touches[1].y,50);
      circle(touches[2].x,touches[2].y,50);
      break ;


  }

}
