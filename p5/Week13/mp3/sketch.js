var cars = [] ;
var frogPos;
var myState = 0;
var maxCars= 10;
var maxTimer = 11*60 ;
var timer = maxTimer;
var ghost, pac, creepy, end;
var song1, song2, song3, song4;

function preload(){
  song1 = loadSound('assets/PacStart.wav');
  song2 = loadSound('assets/FIGHT.wav');
  song3 = loadSound('assets/fail.wav');
  song4 = loadSound('assets/success.wav');



}

function setup() {
  createCanvas(800, 750);
  imageMode(CENTER);
  ghost = loadImage('assets/ghost.png');
  pac = loadImage('assets/pac.png');
  creepy = loadFont('assets/creepy.ttf');
  end = loadFont('assets/end.ttf');

  for (var i = 0; i < 15; i ++) {
    cars.push(new Car());
}

frogPos = createVector(400, height -100);

textAlign(CENTER);
}


function draw() {

switch (myState) {
  case 0:
    fill('black');
    textSize(35);
    text("welcome to...",width/2, height/2);
    break;

  case 1:
    song2.stop();
    song3.stop();
    song4.stop();
    background(51);
    fill('red');
    textFont(creepy,90);
    text("GHOST'S REVENGE!", width/2, height/2);
    textSize(50);
    text("Click to Begin", width/2, (height/2)+200);
    break;

  //game
  case 2:
    game();
    timer = timer - 1;
    if (timer <= 0) {
      song2.stop();
      song3.play();
      timer = maxTimer;
      myState = 4;
    }
    break;

  //win
  case 3:
    background('red');
    fill('black')
    textFont(end,75);
    text("WELL DONE!", width/2, height/2);
    break;

  //loss
  case 4:
    song2.stop();

    background('red');
    fill('white');
    textFont(end,75)
    text("Unavenged", width/2, 300);
    textSize(50);
    text("Go again!", width/2, (height/2)+50);
    break;


  }
}

function mouseReleased() {
  switch (myState) {

    case 0:
      myState=1
      song1.play();
      break;

    case 1:
      myState = 2 ;
      song1.stop();
      song2.loop();
      break;

    case 3:

      timer = maxTimer;
      cars=[];
      for (var i = 0; i < 15; i ++) {cars.push(new Car() ) ; }
      song3.stop();
      song1.play();
      myState = 1 ;
      revert();
      break;

    case 4:

      timer = maxTimer;
        cars=[];
        for (var i = 0; i < 15; i ++) {cars.push(new Car() ) ; }
        song4.stop();
        song1.play();
        myState = 1 ;
        revert();
        break;
  }
}

function revert() {
  frogPos.x = 400;
  frogPos.y = height-100;
}
function game() {
  background ('black');
  for (var i = 0; i < cars.length; i ++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50 ) {
      cars.splice(i,1) ;
    }
  }

  if (cars.length==0) {
    song2.stop();
    myState = 3 ;
    song4.play();
  }

  //frog
  image(ghost,frogPos.x, frogPos.y, 50,50);


  check4keys();

}

function check4keys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -=10;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x +=10;
  if (keyIsDown(UP_ARROW)) frogPos.y -=10;
  if (keyIsDown(DOWN_ARROW)) frogPos.y +=10;


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
      image(pac,this.pos.x, this.pos.y, 50, 50)
   }

 this.drive = function() {
   this.pos.add(this.vel);
   if (this.pos.x > width) this.pos.x = 0;
   if (this.pos.x < 0) this.pos.x = width;
   if (this.pos.y > height) this.pos.y = 0;
   if (this.pos.y < 0) this.pos.y = height;
 }

}
