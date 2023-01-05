var colors="084c61-db504a-e3b505-5d2a42-56a3a6".split("-").map(a=>"#"+a)
let mic;
let z = 1 //穩定麥克風偵測畫面
let vol1 = 0.1;


function preload(){
	//材質
	text1Texture=loadImage("text1.jpg")
}

function setup() {
	createCanvas(500,500);
	background(100);
	mic = new p5.AudioIn()
	mic.start()
	p = createVector(width/2,height)
}

var lerpedMicLevel =0
var micCache = []

function draw() {
	//背景
	background(204, 204, 204)
	
	//材質
	push()
		blendMode(MULTIPLY)
		image(text1Texture,0,0,width,height)
	pop()
	
	let micLevel = mic.getLevel()
		
	micCache.push(micLevel)
	//控制要留多少個最近的數值
	micCache=micCache.slice(-5,0)
	let avgMicLevel = 0
	for(let v of micCache){
		avgMicLevel +=v
	}
	avgMicLevel/=micCache.length	
	lerpedMicLevel = lerp(lerpedMicLevel,micLevel,0.1)
		
	//穩定麥克風偵測畫面
  z = lerp(z,micLevel*2500+100,0.05)
	noStroke()

	
//圖
push()
		translate(width/3.5,height/5)
		scale(0.55)
		
//右腳
	push()
		translate(-80,25)
	 	rotate(210-z/40)
		fill(colors[3]);
		strokeWeight(4)
		stroke(colors[3])
		beginShape();
  		vertex(50, 100);
  		vertex(60, 100);
 		vertex(150, 150);
	 	vertex(90, 220);
		vertex(125, 225);
		vertex(130, 250);
		vertex(70, 240);
	 	vertex(80, 220);
		vertex(90, 220);
		vertex(150, 150);
		endShape(CLOSE);
	pop()
		
		
//身體
	push()
		noFill()
		translate(width/300,height/7+z/10)
		//blendMode(SCREEN)
		strokeWeight(1)
		fill(80-29+z*0.25, 102-58+z*0.5, 77-24+z*0.21);
		rotate(frameCount/20)
		for(var i=0;i<70;i++){
			rotate(lerpedMicLevel*PI*90)
			arc(0,0,i*(2+lerpedMicLevel*70),
				 			i*(2+lerpedMicLevel*50),
				 			0,PI)
		}
	pop()
		
//鈕扣
		fill(245, 207, 0);
		ellipse(15+z/5, 110, 8, 8);
		ellipse(15+z/5, 130, 8, 8);
		ellipse(-5-z/5, 110, 8, 8);
		ellipse(-5-z/5, 130, 8, 8);	
		
//左腳
	push()
		translate(-110,80)
	 	rotate(-2000+z/80)
		fill(colors[3]);
		strokeWeight(4)
		stroke(colors[3])
		beginShape();
  	vertex(50, 100);
  	vertex(60, 100);
 		vertex(150, 150);
	  vertex(90, 220);
		vertex(125, 225);
		vertex(130, 250);
		vertex(70, 240);
	  vertex(80, 220);
		vertex(90, 220);
		vertex(150, 150);
		endShape(CLOSE);
	pop()
	
	//手	
	push()
		scale(0.7)
		translate(20,30);
	 	rotate(1150+z*0.01+sin(frameCount/80)/7);
		fill(colors[3]);
		strokeWeight(4)
		stroke(colors[3])
		beginShape();
  	vertex(50, 100);
  	vertex(60, 100);
 		vertex(10, 170);
	  vertex(90, 220);
	  vertex(120, 210);
	  vertex(100, 220);
		vertex(125, 225);
		vertex(100, 225);
		vertex(125, 245);
		vertex(100, 230);
		vertex(110, 255);
		vertex(95, 230);
		vertex(95, 255);
		vertex(90, 220);
		vertex(10, 170);
		endShape(CLOSE);
	pop()
	
	//衣服
	push()
		fill(204, 204, 204);
		beginShape();
  		vertex(-35, 30);
		vertex(10, 100);
		vertex(30, 30);
		endShape(CLOSE);
	pop()	
	push()
		fill(colors[3]);
		beginShape();
  		vertex(-8, 60);
		vertex(-5, 75);
		vertex(12, 75);
		vertex(14, 60);
		endShape(CLOSE);
	pop()
	push()
		fill(colors[3]);
		beginShape();
		vertex(-5, 75);
		vertex(12, 75);
		vertex(15, 90);
		vertex(10, 100);
		vertex(-7, 90);
		endShape(CLOSE);
	pop()
	push()
		fill(49, 76, 45);
		beginShape();
  		vertex(25, 50);
		vertex(40, 70);
		vertex(20, 80);
		vertex(30, 90);
		vertex(10, 100);
		endShape(CLOSE);
	pop()
	push()
		fill(49, 76, 45);
		beginShape();
  		vertex(-25, 50);
		vertex(-40, 70);
		vertex(-20, 80);
		vertex(-30, 90);
		vertex(10, 100);
		endShape(CLOSE);
	pop()
		
		
	//士兵	
	push()	
			rectMode(CENTER);
			//臉
			noStroke()
			rotate(0+sin(frameCount/100+z)/5.5);
			fill(227+13-z/9, 181+103-z*0.9, 5-67+z*0.6);
			rect(0,0,z,p.y/5,50);

			//眼睛
			fill(colors[0]);
			ellipse(-30,0,10+random(-5,5),10+random(-3,3));
			fill(colors[1]);
			ellipse(30,0,10+z/12,15);

			push()
			//眉毛
				fill(colors[0]);
				rotate(0+sin(frameCount/100)/5);
				rect(-25,-20,30,8+z/20);
			pop()
			//眉毛
			push()
				fill(colors[0]);
				//rotate(-0.25+sin(frameCount/100)/5);
				rect(40-z/10,-30+z/8,30,10);
			pop()
		
			//鼻子
			fill(colors[4]);
			rect(0,0,10,20);

			//嘴巴
			fill(colors[3]);
			rect(0,25,30,-100+z);

			//耳朵
			fill(colors[4]);
			ellipse(50-z,0,30,40);
			fill(colors[2]);
			ellipse(-50+z,0,30,30);
	pop()
	
		
//帽子
	push()
		fill(49, 76, 45);
		beginShape();
 		  vertex(-33, -85+60-z/2);
			vertex(33, -85+60-z/2);
  		vertex(45, -40+60-z/2);
			vertex(0, -35+60-z/2);
  		vertex(-45, -40+60-z/2);
		endShape(CLOSE);
		fill(245, 207, 0);
		ellipse(0, 8-z/2, 15, 15);
	pop()	
pop()
}
