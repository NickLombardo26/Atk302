var timer = 500;

function setup() {

createCanvas (800, 800);

}

function draw() {

  timer -- ;

  if (timer <= 300) {
    background ('orange');
    text("A carrot", 300, 200);
    textSize(18);
  }

  else

  {
    background('green');
    text("What's orange and sounds like a parrot?", 100, 400);
    textSize(30);
  }

}
