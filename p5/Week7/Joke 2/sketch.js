var timer = 500;

function setup() {

createCanvas (800, 800);

}

function draw() {

  timer -- ;

  if (timer <= 300) {
    background ('green');
    text("Just look in the mirror!", 100, 100);
    textSize(18);
  }

  else

  {
    background('red')
    text("Wanna see a joke?", 100, 100)
    textSize(18)
  }

}
