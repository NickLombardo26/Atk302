var timer = 350;
var myState= 0;
var x=0;


function setup() {

createCanvas (800, 800);

}

function draw() {

  switch(myState){

    case 0:

      background('black');

      fill('white')
      rect(x,700,40,20);

      fill('yellow')
      rectMode(CENTER)
      rect(400,300,120,320);

      fill('red')
      ellipseMode(CENTER)
      ellipse(400,200,100,100);

      fill('gray')
      ellipseMode(CENTER)
      ellipse(400,300,100,100);

      fill('gray')
      ellipseMode(CENTER)
      ellipse(400,400,100,100);

      timer--;

      if (timer < 0) {
        timer=350
        myState=myState+1;
        x=x+2;

      }

      break;

    case 1:

      background('black');

      fill('white')
      rect(x,700,40,20);
      x=x+2;

      fill('yellow')
      rectMode(CENTER)
      rect(400,300,120,320);

      fill('green')
      ellipseMode(CENTER)
      ellipse(400,400,100,100);

      fill('gray')
      ellipseMode(CENTER)
      ellipse(400,200,100,100);

      fill('gray')
      ellipseMode(CENTER)
      ellipse(400,300,100,100);

      timer--;

      if (timer < 0) {
        timer=350;
        myState=myState+1;
        x=x+1;
      }

      break;

    case 2:

      background('black');

      fill('white')
      rect(x,700,40,20);
      x=x+1;

      fill('yellow')
      rectMode(CENTER)
      rect(400,300,120,320);

      fill('yellow')
      ellipseMode(CENTER)
      ellipse(400,300,100,100);

      fill('gray')
      ellipseMode(CENTER)
      ellipse(400,400,100,100);

      fill('gray')
      ellipseMode(CENTER)
      ellipse(400,200,100,100);


      timer--;

      if (timer < 0) {
        timer=350;
        myState=myState+1;
        x=x+0;

      }

      break;
    }

    if (x > width) {
      x=0;
    }

    if (myState>2){
      myState=0;
    }


}
