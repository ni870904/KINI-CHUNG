//The Wizard Bear CC-BY-SA 2019 https://www.openprocessing.org/sketch/713379

var string = "I"; //words to be displayed intially
const size = 500; //font size
const fontFile = "word/Muli-Black.ttf";
const showText = true; //whether or not to have an overlay of the original text (in the background color)
const textAlpha = 0.1; //the alpha of the text if displayed (low value will make it slowly fade in)
const backgroundColor = 8; //kinda self-explanatory
const strokeAlpha = 100; //the alpha of the lines (lower numbers are more transparent)
const strokeColor = (35, 108, 255); //the line color


const fontSampleFactor = 0.5; //How many points there are: the higher the number, the closer together they are (more detail)

const noiseZoom = 0.006; //how zoomed in the perlin noise is
const noiseOctaves = 4; //The number of octaves for the noise
const noiseFalloff = 1; //The falloff for the noise layers

const zOffsetChange = 0; //How much the noise field changes in the z direction each frame
const individualZOffset = 0; //how far away the points/lines are from each other in the z noise axies (the bigger the number, the more chaotic)

const lineSpeed = 1; //the maximum amount each point can move each frame

const newPointsCount = 90; //the number of new points added when the mouse is dragged

var seed;
var font;
var points = [];
var startingPoints;

function preload() {
	font = loadFont(fontFile);

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont(font);
	fill(backgroundColor, textAlpha);
	stroke(strokeColor, strokeAlpha);
	noiseDetail(noiseOctaves, noiseFalloff);
	seed = floor(random(1000000));
	
	start();
}

function start(){
	background(backgroundColor);

	textSize(size);
	
	randomSeed(seed);
	noiseSeed(seed);
	frameCount = 0;
	startingPoints = font.textToPoints(string, width / 2 - textWidth(string) / 2, height / 2, size, {"sampleFactor": fontSampleFactor});
	
	points = [];
	for (let p = 0; p < startingPoints.length; p++) {
		points[p] = startingPoints[p];
		points[p].zOffset = random();
			
		
	}
}

function draw() {
		translate(-250,80)
	  
	if(showText){
		noStroke();
		text(string, width / 2 - textWidth(string) / 2, height / 2);
		stroke(strokeColor, strokeAlpha);
	}
	for (let pt = 0; pt < points.length; pt++) {
		let p = points[pt];
		let noiseX = p.x * noiseZoom;
		let noiseY = p.y * noiseZoom;
		let noiseZ = frameCount * zOffsetChange + p.zOffset*individualZOffset;
		let newPX = p.x + map(noise(noiseX, noiseY, noiseZ), 0, 1, -lineSpeed, lineSpeed);
		let newPY = p.y + map(noise(noiseX, noiseY, noiseZ + 214), 0, 1, -lineSpeed, lineSpeed);
		line(p.x, p.y, newPX, newPY);
		p.x = newPX;
		p.y = newPY;
		
	}
}




function mouseDragged() {
	for (let i = 0; i < newPointsCount; i++) {
		let angle = random(TAU);
		let magnitude = randomGaussian() * ((newPointsCount-1)**0.5*3);
		let newPoint = {
			"x": mouseX + magnitude * cos(angle)+250,
			"y": mouseY + magnitude * sin(angle)-80,
			"zOffset": random()
		};
		points[points.length] = newPoint;
		startingPoints[startingPoints.length] = newPoint;
	}
}