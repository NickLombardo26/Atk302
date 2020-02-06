var sickFont;

function setup() {
  // put setup code here
  createCanvas(800,800);
  sickFont = loadFont('asset/font.ttf');
}

function draw() {
  // put drawing code here
  background(100);
  textFont(sickFont, 75);

  fill('RED');
  text("hello world", 50, 100);

}
