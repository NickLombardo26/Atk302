var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(800,800);
}

function draw() {
  // put drawing code here
background('black')

  push() ;
  translate (x,0) ;
  jim() ;
  pop() ;

  x = x + 1;
  if (x > 400) {
    x=0;
  }
  if (x <200) {
    x=x+10;
  }
}


function jim () {
  fill('white')
//Right
  quad(520,342, 520,400, 645,455, 668,404)
//left
  quad(350,382, 350,440 ,495,495, 515,446)
  ;

//Body
  fill('gray')
    rect(350,315,200,125)
  ;
  //head
    fill('black')
      ellipse(450,405,100,125);
    fill('darkgray')
      ellipse(450,380,110,110);
    fill('black')
      ellipse(450,380,5,5)

}
