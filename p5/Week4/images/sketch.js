var bunnyPic;
var catPic;
var dogPic;

function setup() {
  // put setup code here
  createCanvas(800,800);
  bunnyPic = loadImage("assets/bunny.jpg");
  tint (0,153,204,20);
  catPic = loadImage("assets/cat.jpg");
  dogPic = loadImage("assets/lo siento.jpg");
}

function draw() {
  // put drawing code here
  image(bunnyPic,10,10);
  image(catPic, 250,0);
  image(dogPic,0,320);
}
