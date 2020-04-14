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
    background('blue');
    fill('white');
    text('Welcome to my game! (click)', width/2, height/2);
    textSize(50);
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
    textSize(75);
    text("YAY!", width/2, 300);
    textSize(50);
    text("You've won!", width/2, height/2 );
  break;

  case 3:
    background('red');
    fill('white');
    textSize(75);
    text("Sorry!", width/2, 300);
    textSize(50);
    text("You've lost, try again!", width/2, height/2);

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
  rectMode(CENTER);
  ellipseMode(CENTER);
  fill('black');
  rect(frogPos.x,frogPos.y,50,50);
  fill('red')
  ellipse(frogPos.x+10,frogPos.y-7,15,10);
  ellipse(frogPos.x-10,frogPos.y-7,15,10);
  arc(frogPos.x,frogPos.y+10, 20, 20, PI, 0, CHORD);




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
     ellipseMode(CENTER);
     fill(this.r, this.g, this.b);
     ellipse(this.pos.x,this.pos.y,40,40);
     fill(51);
     ellipse(this.pos.x - 10,this.pos.y -3, 5,5);
     ellipse(this.pos.x + 10,this.pos.y - 3, 5,5);
     arc(this.pos.x,this.pos.y, 10, 10, 0, PI, CHORD);

   }

 this.drive = function() {
   this.pos.add(this.vel);
   if (this.pos.x > width) this.pos.x = 0;
   if (this.pos.x < 0) this.pos.x = width;
   if (this.pos.y > height) this.pos.y = 0;
   if (this.pos.y < 0) this.pos.y = height;
 }

}
