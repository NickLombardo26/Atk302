var myState = 0;
var timer = 0;
var start;
var button1,button2,button2,button4,button5,button6;

function preload() {
  start= loadSound('Assets/Splash1.mp3');
}


function setup() {
  createCanvas(800,1000);
  start.play();
}

function draw() {


  switch(myState) {

    case 0 :
      background('gray') ;

      fill('black');
      textAlign(CENTER);
      textSize(100);
      text("BEGIN",400,400);


    break ;

    case 1 :
      background('gray') ;

      fill('black');
      textAlign(CENTER);
      textSize(50);
      text("JIM JAM!",400,300);
      textSize(20);
      text("Click Screen to Start!", 400, 500);

    break ;

    case 2 :
      background('white') ;

      textAlign(CENTER);
      textSize(30);
      text("JIM JAM is a game about quick comprehension!" , 400 ,200) ;
      text("Count all the squares as fast as you can," , 400 ,300) ;
      text("and submit your answer at the end. " , 400 ,350) ;
      text("Press anywhere on the screen when ready..." , 400 ,450) ;
      text("DO NOT PLAY IF YOU HAVE EPILEPSY ",400, 550);
      text("OR ARE PRONE TO SEIZURE",400,575);

    break ;

    case 3 :
      background('white') ;

        fill('red');

        rect(20,420,20,20);
        rect(287,185,20,20);
        rect(600,100,20,20);

        timer++;
        if (timer > 25) {timer=0;myState=4;}

    break ;

    case 4 :
      background('black') ;

      fill('yellow');

      rect(700,620,10,10);


        timer++;
        if (timer > 25) {timer=0;myState=5;}

    break ;

    case 5 :
      background(random(225),random(225)) ;

      fill(random(225),random(225),random(225));

      rect(574,620,20,20);
      rect(340,334,10,10);


      timer++;
      if (timer > 25) {timer=0;myState=6;}

    break ;

    case 6:
      background(random(225),random(225),random(225)) ;

      timer++;
      if (timer > 25) {timer=0;myState=7;}

    break;

    case 7:
      background(random(225),random(225)) ;

      fill('white');

      rect(600,200,10,10);
      rect(400,200,10,10);
      rect(600,500,10,10);
      rect(400,750,10,10);

      timer++;
      if (timer > 25) {timer=0;myState=8;}

    break;

    case 8:
      background(random(225),random(225)) ;

      ellipseMode(CENTER);
      ellipse(400,400,30,30);

      timer++;
      if (timer > 25) {timer=0;myState=9;}

    break;

    case 9:

      background('black') ;
      textSize(50);
      fill(random(225),random(225),random(225));

      text("How Many?",400,400);

      button1 = createButton('02');
      button1.position(125, 780);
      button1.mousePressed(lose);

      button2 = createButton('04');
      button2.position(225, 780);
      button2.mousePressed(lose);

      button3 = createButton('06');
      button3.position(325, 780);
      button3.mousePressed(lose);

      button4 = createButton('08');
      button4.position(425,780);
      button4.mousePressed(lose);

      button5 = createButton('10');
      button5.position(525, 780);
      button5.mousePressed(win);

      button6 = createButton('12');
      button6.position(625,780);
      button6.mousePressed(lose);


    break;

    case 10:

      background('black');
      fill(random(225),random(225));
      textAlign(CENTER);
      textSize(50);
      text("TRY AGAIN!",400,400) ;

      fill('black')
      rect(0,780,1000,30);

      timer++;
      if (timer>200){
        myState=0;
        timer=0;

      }

    break;

    case 11:

      background('black');
      fill(random(225),random(225),random(225));
      textAlign(CENTER);
      textSize(50);
      text("YOU WIN!",400,400) ;

      fill('black')
      rect(0,780,1000,30);

      timer++;
      if (timer>200){
        myState=0;
        timer=0;

      }

    break;

  }

}

function lose() {
  myState=10;
}
function win() {
  myState=11;
}

function mouseReleased() {
  if (myState<3){myState = myState + 1 ;}
  if(myState > 2){start=start.stop();}
  if (myState > 11) {myState = 0 ;}
}

  function touchStarted() {
     getAudioContext().resume();
  }
