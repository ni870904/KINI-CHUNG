let str = "GetReady? Welcome NTUA MAA";
let str_arr = [];
let font;
let sdgreg;

function preload() {
  font = loadFont("word/TRIAL_FactorA-Black.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB);
  let strs = str.split(" ");
  for (let i = 0; i < strs.length*50; i++) {
    let x = random(-width / 100, width / 100);
    let y = random(-height / 1, height / 1);
    let z = random(-width*25, width/10);
    str_arr.push(new Type(strs[i%strs.length], x, y, z));
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function draw() {
  background('black');
  

	orbitControl();
  for (let i = 0; i < str_arr.length; i++) {
    str_arr[i].update();
    str_arr[i].display();
  }
}

class Type {
  constructor(_str, _x, _y, _z) {
    this.str = _str;
    this.x = _x;
    this.y = _y;
    this.z = _z;
  }

  //速度
  update() {
    this.z += 10;
    if(this.z > width/1){
    	this.z = -width*1000;
    }
  }

  display() {
    push();
    translate(this.x, this.y, this.z);
    textAlign(RIGHT, CENTER);
    textFont(font);
    textSize(80);
		fill(246, 2, 243);
    text(this.str, 0, 0);
    pop();
  }
  
}