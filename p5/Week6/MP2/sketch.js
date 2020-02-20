var myState = 0;
var timer = 0;

function setup() {
  createCanvas(800,800) ;
}

function draw() {


  switch(myState) {

    case 0 :
    background('red') ;
    textSize(20);
    text("I'm in state 0" , 100, 100) ;

    timer = timer++;

    if (timer > 200){
    myState=1;
    timer=0;

    }
    break ;

    case 1 :
    background('orange') ;
    text("And now I've moved down 200 " , 100 ,300) ;
    break ;

    case 2 :
    background('yellow') ;
    text("I didn't like it there, so I moved back." , 100 ,100) ;

    break ;

    case 3 :
   background('green') ;
   text("Maybe I'll try moving this way...",430,100) ;
    break ;

    case 4 :
    background('blue') ;
    textSize(40);
    text("This is the end",250,400) ;
    break ;

    case 5:
    background('purple');
    textSize(30);
    text("or is it?", 250, 200);
    break;


  }
}

function mouseReleased() {
  myState = myState + 1 ;
  if (myState > 5) {
    myState = 0 ;
  }
}
