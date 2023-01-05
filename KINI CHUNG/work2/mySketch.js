let colors="084c61-db504a-e3b505-5d2a42-56a3a6".split("-").map(a=>"#"+a)
let mic, fft;
//穩定麥克風偵測畫面
let z1 = 1 ;
let z2 = 1 ;
let z3 = 1 ;
let vol1 = 0.1;
let robots = []


function preload(){
	img = loadImage('Flag.png');

	//聲音
	sound1 = loadSound("Sergei1.mp3");
	//材質
	text1Texture=loadImage("text1.jpg");
}

function setup() {
	createCanvas(windowWidth-300, windowHeight-100);
	background(100);
	
	//!!!!!
	//mic = new p5.AudioIn()
	//mic.start()
	
	fft = new p5.FFT();
    fft.setInput(sound1);
	
	//p預設畫面中央,v速度
	p = createVector(width/2,height)
	
	for(var x = 0;x<width;x+=150){
		for(var y = 0;y<height;y+=800){
				robots.push(new Robot({
				p:createVector(x,y)
				}))
		}
	}
	
	for(var x = 0;x<width;x+=150){
		for(var y = 0;y<height;y+=800){
				robots.push(new Robot2({
				p:createVector(x,y)
				}))
		}
	}
	for(var x = 0;x<width;x+=150){
		for(var y = 0;y<height;y+=800){
				robots.push(new Robot3({
				p:createVector(x,y)
				}))
		}
	}
	
	
	textSize(32);
	textAlign(LEFT, TOP);
}

//!!!!!
var lerpedMicLevel =0
var micCache = []

let val1 = 0; //-- 低音
let val2 = 0; //-- 中音
let val3 = 0; //-- 高音

let vn1 = 0;
let vn2 = 0;
let vn3 = 0;

function draw() {
	
  let spectrum = fft.analyze();
	
  val1 = 0;
  val2 = 0;
  val3 = 0;

  vn1 = 0;
  vn2 = 0;
  vn3 = 0;
	
	for (i=0; i<int(spectrum.length*0.005); i++) {
		if(spectrum[i]>val1){
			val1 = spectrum[i];
		}
		//val1 += spectrum[i];
		//vn1++;
	}
	//val1 = val1/vn1;
	
	for (i=int(spectrum.length*0.08); i<int(spectrum.length*0.24); i++) {
		if(spectrum[i]>val2){
			val2 = spectrum[i];
		}
	    // val2 += spectrum[i];
		// vn3++;
	}
	//val2 = val2/vn1;
	
	for (i=int(spectrum.length*0.29); i<int(spectrum.length); i++) {
		if(spectrum[i]>val3){
			val3 = spectrum[i];
		}
	    // val3 += spectrum[i];
		// vn3++;
	}
	//val3 = val3/vn1;

	if(val3>50){
		val1=0 ; val2=0;
	}
	if(val2>50 && val1>50){
		val3=0; 
	}
	if(val1>200){
		val2=0; 
	}
	if(val1>0){
		val3=0;
	}

	//背景
	background(204, 204, 204)
	scale(1.5);
	image(img, width/4.3, height/4.5);
	scale(0.7);
	robots.forEach(robot=>robot.update())
	robots.forEach(robot=>robot.draw())
	
	
	//材質
	push()
		blendMode(MULTIPLY)
		image(text1Texture,0,0,width,height)
	pop()
	
	//fill(255);
	//text(int(val1)+", "+int(val2)+","+int(val3), 100, 100);
	//fill('black');
	//text(int(mouseX),50,50);
	//text(int(mouseY),50,80);
}
	

//點擊撥放音樂
function mousePressed(){
	//let select = int(mouseX/(width/3))
	if (423<mouseX && mouseX<752 && 189<mouseY &&mouseY<351){
		sound1.play()
	}else{
		sound1.stop()
	}
}
