var song;

function preload() {
  song= loadSound('asset2/donkey2.mp3');

}

function setup() {

  createCanvas(400,400);
  background(255,0,0);
}

function mousePressed() {

  song.play();
}
