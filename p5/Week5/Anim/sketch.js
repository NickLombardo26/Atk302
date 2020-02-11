var x=0;

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background('blue');
  ellipse(x,100,100,100);
  x=x+5;

  if (x > width) {
    x=0;
  }

}
