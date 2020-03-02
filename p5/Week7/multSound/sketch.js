var song1, song2, song3;
var myState = 0;


function preload() {

  song1= loadSound('assets/donkey.mp3');
  song2= loadSound('assets/skate.mp3');
  song3= loadSound('assets/thrill.mp3');

}


function setup() {

  createCanvas(400,400);


  /*song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();*/
}

function draw() {
  switch(myState){

  case 0:
    background('blue');
    break;

  case 1:
    background('black');
    song1.play();
    myState=2;
    break;

  case 2:

    break;

  case 3:
    song2.play();
    myState=4;
    break;

  case 4:
    background('red');
    break;

  case 5:
    song3.play();
    myState=6;
    break;

  case 6:
    background('green');
    break;

  case 7:
      background('gray');
      song3.stop();
      text("End");
      textSize(18);
      break;
    }

}
function mousePressed(){
  song1.stop();
  song2.stop();
  song3.stop();
}
function mouseReleased() {

  myState = myState +1 ;
  if (myState>7){
    myState=0;
  }
}
