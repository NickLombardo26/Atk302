var timer = 200;

function setup() {

createCanvas (800, 800);
background('green');

}

function draw() {

  timer -- ;

  if (timer <= 0) {
    background (random(256), random (256), random (256) );
    timer = 200;
  }
}
