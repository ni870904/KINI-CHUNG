let txt = "GENERATIVE ART  GENERATIVE ART  GENERATIVE ART  GENERATIVE ART  GENERATIVE ART  GENERATIVE ART";

let txtW;

let inc = 0;

function setup() {
  createCanvas(windowWidth,60);
  background(0);
	txtSize = height / 2;
  textSize(txtSize);
  txtW = textWidth(txt);
}

function draw() {
  background(246, 2, 243);
	
  if (inc <= txtW / 1) {
    inc += 3;
  } else {
    inc=0;
  }
	
	fill(0);
  text(txt, -inc, height/5 + txtSize);
}
