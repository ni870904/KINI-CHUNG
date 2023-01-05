let input;
let particles = [];
let word = 'KINI'

function preload() {
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
 let pts = font.textToPoints(word, width/2 - word.length*75, height/1.5, 240);
  for (let i = 0; i < pts.length; i++) {
    particles.push(new Particle(random(width), random(height), pts[i].x, pts[i].y));
  }
}

function draw() {
  background(255);
  for (let p of particles) {
    p.show();
    p.move();
  }
}

function newword() {
  word = input.value();
	particles=[];
	let pts = font.textToPoints(word, width/2 - word.length*45, height/2, 160);
  for (let i = 0; i < pts.length; i++) {
    particles.push(new Particle(random(width), random(height), pts[i].x, pts[i].y));
  }
}