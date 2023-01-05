var colors="084c61-db504a-e3b505-5d2a42-56a3a6".split("-").map(a=>"#"+a)
let mic, fft;
let z = 1 //穩定麥克風偵測畫面
let vol1 = 0.1;
var robots = []


function preload(){
	img = loadImage('https://openprocessing-usercontent.s3.amazonaws.com/files/user155242/visual1781044/h76919969059134a05a8a9b2a1e00e672/Flag.png');

	//聲音
	sound1 = loadSound("Sergei1.mp3")
	sound2 = loadSound("Sergei3.mp3")
	sound3 = loadSound("Sergei2.mp3")
	//材質
	text1Texture=loadImage("text1.jpg")
}

function setup() {
	createCanvas(windowWidth-300, windowHeight-100);
	background(100);
	
	//!!!!!
	mic = new p5.AudioIn()
	mic.start()
	//fft = new p5.FFT();
  //fft.setInput(mic);
	
	//p預設畫面中央,v速度
	p = createVector(width/2,height)
	
	for(var x = 0;x<width;x+=150){
		for(var y = 0;y<height;y+=370){
				robots.push(new Robot({
				p:createVector(x,y)
				}))
	}
}
	
		for(var x = 0;x<width;x+=150){
		for(var y = 0;y<height;y+=370){
				robots.push(new Robot2({
				p:createVector(x,y)}))
			}
		}
	}

var lerpedMicLevel =0
var micCache = []

function draw() {
	//背景
	background(204, 204, 204)
	image(img, width/8, height/2.5);
	image(img, width/2.4, height/2.5);
	image(img, width/1.4, height/2.5);
	robots.forEach(robot=>robot.update())
	robots.forEach(robot=>robot.draw())
	
	//材質
	push()
		blendMode(MULTIPLY)
		image(text1Texture,0,0,width,height)
	pop()
	
	//fill('black');
	//text(int(mouseX),50,50);
	//text(int(mouseY),50,80);
}

//點擊撥放音樂
function mousePressed(){
	//let select = int(mouseX/(width/3))
	if (133<mouseX && mouseX<352 && 225<mouseY &&mouseY<332){
		sound1.play()
		sound2.stop()
		sound3.stop()
	}else{
		sound1.stop()
		sound2.stop()
		sound3.stop()
	}
	if (450<mouseX && mouseX<670 && 225<mouseY &&mouseY<332){
		sound2.play()
		sound1.stop()
		sound3.stop()
	}
	if (770<mouseX && mouseX<990 && 225<mouseY &&mouseY<332){
		sound3.play()
		sound1.stop()
		sound2.stop()
	}
}
