var song;

function preload() {
  song= loadSound('asset2/drum.wav');

}

function setup() {

  createCanvas(400,400);
  background(255,0,0);
}

function mousePressed() {

  song.play();
}
