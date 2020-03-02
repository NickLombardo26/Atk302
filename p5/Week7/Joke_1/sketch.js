var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800,800);

}

function draw() {
  // put drawing code here
  background('gray');

  switch (myState) {

    case 0:
    text("Epstein killed himself (click)", 100,100);
    textSize(24);
    break;

    case 1:
    text("That's it, that's the joke...", 100,100);
    textSize(24);
    break;

  }
}

function mouseReleased() {
    myState = myState + 1 ;
    if (myState > 1) {
      myState = 0 ;
    }
}
