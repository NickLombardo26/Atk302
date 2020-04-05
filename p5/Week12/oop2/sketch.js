var cars = [] ;
var frogPos;
var myState = 0;
var maxCars= 10;
var maxTimer = 10*60 ;
var timer = maxTimer;

function setup() {
  createCanvas(800, 800);

for (var i = 0; i < 5; i ++) {
  cars.push(new Car());
}

frogPos = createVector(400, height -100);

textAlign(CENTER);
}


function draw() {

switch (myState) {
  case 0:
    background('red');
    fill('white');
    text('Welcome to my game! (click)', width/2, height/2);
    textSize(24);
  break;

  case 1:
    game();
    timer = timer - 1;
    if(timer <= 0) {
      timer = maxTimer;
      myState = 3;
    }
  break;

  case 2:
    background('yellow');
    text("YAY! You've won!", width/2, height/2);
  break;

  case 3:
    background('purple');
    text("Sorry! You've lost, try again!", width/2, height/2);
  break;


  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1 ;
    break;

    case 2:
      timer = maxTimer;
      cars=[];
      for (var i = 0; i < 5; i ++) {cars.push(new Car() ) ; }
      myState = 0 ;
    break;

    case 3:
      timer = maxTimer;
      cars=[];
        for (var i = 0; i < 5; i ++) {cars.push(new Car() ) ; }
        myState = 0 ;
    break;
  }
}

function game() {
  background ('lightblue');

  for (var i = 0; i < cars.length; i ++) {

  cars[i].display();

  cars[i].drive();

  if (cars[i].pos.dist(frogPos) < 50 ) {
    cars.splice(i,1) ;

   }
  }

  if (cars.length==0) {
    myState = 2 ;
  }

  //frog
  fill('green');
  ellipse(frogPos.x,frogPos.y,50,50);
  check4keys();

}

function check4keys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -=5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x +=5;
  if (keyIsDown(UP_ARROW)) frogPos.y -=5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y +=5;

}

function Car() {
//attrinutes
  this.pos = createVector(random(width),random(height));
  this.vel = createVector(random(-5,5),random(-5,5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  //methods
   this.display = function() {
     fill(this.r, this.g, this.b)
     rect(this.pos.x,this.pos.y,35,35);

 }
 this.drive = function() {
   this.pos.add(this.vel);
   if (this.pos.x > width) this.pos.x = 0;
   if (this.pos.x < 0) this.pos.x = width;
   if (this.pos.y > height) this.pos.y = 0;
   if (this.pos.y < 0) this.pos.y = height;

 }
}
