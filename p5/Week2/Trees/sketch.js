function setup() {
  // put setup code here
  createCanvas(720, 400);
}
  function draw() {
    // put drawing code here
background(76, 200, 255);
noStroke();

fill(85,90,98);
arc(650, 400, 280, 500, PI, TWO_PI);

fill('black');
arc(650, 250, 80, 120, PI, TWO_PI);

fill('green');
rect(0, 360, 720, 40);

fill(110,58,11);
rect(220, 200, 63, 300);

fill('yellow');
ellipse(0, 10, 72, 72);

fill(11,110,58);
triangle(150, 250, 350, 250, 250, 150);

fill(11,110,58);
triangle(100, 300, 400, 300, 250, 200);

fill(0) ;
textsize(40);
  text( smouseX + ", " + mouseY, 100, 100);
}
