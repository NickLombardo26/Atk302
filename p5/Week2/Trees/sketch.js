function setup() {
  // put setup code here
  createCanvas(720, 400);
}
  function draw() {
    // put drawing code here
background(76, 200, 255);
noStroke();

//Mntn
fill(85,90,98);
arc(650, 400, 280, 500, PI, TWO_PI);

//Cave
fill('black');
arc(650, 255, 20, 30, PI, TWO_PI);

//Snowtop
fill('white');
arc(650, 200, 170, 110, PI, TWO_PI);

  fill('white')
  arc(650,190,80,80,TWO_PI,PI);

  fill('white')
  arc(595,200,60,60,270,110);

  fill('white')
  arc(703,200,60,60,TWO_PI,PI);

//Ground
fill('green');
rect(0, 360, 720, 40);

//Tree trunk
fill(110,58,11);
rect(220, 200, 63, 300);

  //Pine needles
  fill(11,110,58);
  triangle(150, 250, 350, 250, 250, 150);

  //Pine Bottom
  fill(11,110,58);
  triangle(100, 300, 400, 300, 250, 200);

  //Tree trunk 2
  fill(110,58,11);
  rect(420, 200, 63, 300);

  //Pine needles 2
  fill(11,110,58);
  triangle(350, 250, 550, 250, 450, 150);

  //Pine bottom 2
  fill(11,110,58);
  triangle(300, 300, 600, 300, 450, 200);

  //Tree trunk 3
  fill(110,58,11);
  rect(320, 200, 63, 300);

  //Pine needles 3
  fill('darkgreen');
  triangle(250, 250, 450, 250, 350, 150);

  //Pine bottom 3
  fill('darkgreen');
  triangle(200, 300, 500, 300, 350, 200);

//Sun
fill('yellow');
ellipse(0, 10, 72, 72);

//Cloud
fill('white');
ellipse(200, 40, 140, 72);
ellipse(200, 40, 100, 90);

//Cloud 2
fill('white');
ellipse(400, 40, 140, 72);
ellipse(400, 40, 100, 90);

//Mouse Tracker
fill(0);
textSize(40);
  text(mouseX + ", " + mouseY, 100, 100);
}
