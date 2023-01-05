class Robot{
	constructor(args){
		let def = {
			p: createVector(width/2,height/2)
		}
		Object.assign(def,args)
		Object.assign(this,def)
	}
	
	draw(){
	//取得當下音量
	//var micLevel = mic.getLevel()

//!!!!!
	let micLevel1 = val1/2000;
	//let micLevel = val2/2000;
	//let micLevel = val3/3000;

	
	if(val1<120){
		micLevel1 = 0;
	}
		

	//micCache.push(micLevel)
	//控制要留多少個最近的數值
	//micCache=micCache.slice(-5,0)
	//let avgMicLevel = 0
	//for(let v of micCache){
	//	avgMicLevel +=v
	//}
	//avgMicLevel=micCache.length	
	//lerpedMicLevel = lerp(lerpedMicLevel,micLevel,0.01)
		
		
	//穩定麥克風偵測畫面
  	z1 = lerp(z1,micLevel1*650+100,0.1)
	noStroke()


	
	
//圖
push()
		translate(this.p.x,this.p.y)
		translate(15,390)
		scale(0.45)
		
	//右腳
	push()
		translate(-80,25)
	 	rotate(210-z1/40)
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
		translate(width/300,height/7+z1/10)
		//blendMode(SCREEN)
		strokeWeight(1)
		fill(80-29+z1*0.25, 102-58+z1*0.5, 77-24+z1*0.21);
		//rotate(frameCount/20)
		ellipse(0,0,130+z1/2,130+z1/2);
	pop()
		
	//鈕扣
	push()
		fill(245, 207, 0);
		ellipse(15+z1/5, 110, 8, 8);
		ellipse(15+z1/5, 130, 8, 8);
		ellipse(-5-z1/5, 110, 8, 8);
		ellipse(-5-z1/5, 130, 8, 8);	
	pop()

	//左腳
	push()
		translate(-110,80)
	 	rotate(-2000+z1/80)
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
	 	rotate(1150+z1*0.01+sin(frameCount/80)/7);
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
  		vertex(-25, 50);
		vertex(10, 100);
		vertex(25, 50);
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
		push()
			noStroke()
			rotate(0+sin(frameCount/100+z1)/5.5);
			fill(227+13-z1/9, 181+103-z1*0.9, 5-67+z1*0.6);
			rect(0,0,z1,p.y/5,50);
		pop()
			
		//眼睛
		push()
			fill(colors[0]);
			ellipse(-30,0,10+random(-5,5),10+random(-3,3));
			fill(colors[1]);
			ellipse(30,0,10+z1/12,15);
		pop()
		//眉毛
		push()
			fill(colors[0]);
			rotate(0+sin(frameCount/100)/5);
			rect(-25,-20,30,8+z1/20);
		pop()
		//眉毛
		push()
			fill(colors[0]);
			//rotate(-0.25+sin(frameCount/100)/5);
			rect(40-z1/10,-30+z1/8,30,10);
		pop()
		//鼻子
		push()
			fill(colors[4]);
			rect(0,0,10,20);
		pop()
		//嘴巴
		push()
			fill(colors[3]);
			rect(0,25,30,-90+z1);
		pop()
		//耳朵
		push()
			fill(colors[4]);
			ellipse(50-z1,0,30,40);
			fill(colors[2]);
			ellipse(-50+z1,0,30,30);
		pop()
	pop()
	
		
	//帽子
		push()
			fill(49, 76, 45);
			beginShape();
 		  	vertex(-33, -85+60-z1/2);
			vertex(33, -85+60-z1/2);
  			vertex(45, -40+60-z1/2);
			vertex(0, -35+60-z1/2);
  			vertex(-45, -40+60-z1/2);
			endShape(CLOSE);
			fill(245, 207, 0);
			ellipse(0, 8-z1/2, 15, 15);
		pop()	
pop()
		



}
	
	update(){
	}
}