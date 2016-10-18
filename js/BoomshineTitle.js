
"use strict";
class BoomshineTitle{
	constructor(size){
		this.triangles = [];
		for(var i = 0 ; i < 4+4+4+3;i++){
			this.triangles.push( new PointTriangle());
		}
		
		var posInit = size * .05;
		var fontSize = size *.2
		
		for(var i = 0 ; i < 3; i++)for(var j = 0 ; j < this.triangles.length;j++){
			this.triangles[j].addTimeline(Math.random()*500,Math.random()*500,Math.random()*500,Math.random()*500,Math.random()*500,Math.random()*500);
			
		}
		for(var j = 4*3 ; j < this.triangles.length;j++){
			this.triangles[j].addTimeline(0,0,0,0,0,0);
			
		}
		
		this.triangle_B({x:posInit,y:posInit},fontSize,this.triangles[0],this.triangles[1],this.triangles[2],this.triangles[3]);
		this.triangle_O({x:posInit+fontSize*1.2,y:posInit},fontSize,this.triangles[4],this.triangles[5],this.triangles[6],this.triangles[7]);
		this.triangle_O({x:posInit+fontSize*2.4,y:posInit},fontSize,this.triangles[8],this.triangles[9],this.triangles[10],this.triangles[11]);
		this.triangle_M({x:posInit+fontSize*3.6,y:posInit},fontSize,this.triangles[12],this.triangles[13],this.triangles[14]);
	}
	triangle_B(posInit,size,t0, t1, t2,t3){
		var center = [posInit.x+size*.5,posInit.y + size*.5];
		var end00 = [posInit.x + size, posInit.y+ size*.3]
		var end01 = [posInit.x + size, posInit.y+ size*.6]
		//,end01;
		
		t0.addTimeline(posInit.x,posInit.y,
									  posInit.x+size*.5,posInit.y+ size*.5,
									  posInit.x,posInit.y+size);
		
		t1.addTimeline(posInit.x,posInit.y,
									  posInit.x+size,posInit.y,
									  posInit.x+size,posInit.y+size* .3);
		t2.addTimeline(posInit.x+size,posInit.y+size* .3,
									  posInit.x+size*.5,posInit.y+size*.5,
										  posInit.x+size , posInit.y+size*.7);
		t3.addTimeline(posInit.x+size , posInit.y+size*.7,
									  posInit.x+size,posInit.y+size,
									  posInit.x , posInit.y+size);
		
	}
	triangle_O(posInit,size,t0,t1,t2,t3){
		var width = size*.333;
		t0.addTimeline( posInit.x,posInit.y,
						posInit.x,posInit.y + size,
						posInit.x+width,posInit.y + size/2);
		t1.addTimeline( posInit.x+size,posInit.y,
						posInit.x+size,posInit.y+size,
						posInit.x+size-width,posInit.y + size/2);
		t2.addTimeline( posInit.x,posInit.y,
						posInit.x+size,posInit.y,
						posInit.x+(size)/2,posInit.y + width);
		t3.addTimeline( posInit.x,posInit.y+size,
						posInit.x+size,posInit.y+size,
						posInit.x+(size)/2,posInit.y + size-width);
		
	}
	triangle_M(posInit,size,t0,t1,t2){
		var width = size*.333;
		t0.addTimeline( posInit.x,posInit.y,
						posInit.x,posInit.y + size,
						posInit.x+width,posInit.y +size);
		t1.addTimeline( posInit.x+width,posInit.y,
						posInit.x+width,posInit.y + size,
						posInit.x+width+width,posInit.y +size);
		t2.addTimeline( posInit.x+width*2,posInit.y,
						posInit.x+width*2,posInit.y + size,
						posInit.x+width*2+width,posInit.y +size);
		
	}
	triangle_S(posInit,size,t0,t1,t2){
		var width = size*.333;
		t0.addTimeline( posInit.x,posInit.y,
						posInit.x,posInit.y + size,
						posInit.x+width,posInit.y +size);
		t1.addTimeline( posInit.x+width,posInit.y,
						posInit.x+width,posInit.y + size,
						posInit.x+width+width,posInit.y +size);
		t2.addTimeline( posInit.x+width*2,posInit.y,
						posInit.x+width*2,posInit.y + size,
						posInit.x+width*2+width,posInit.y +size);
		
	}
	triangle_H(posInit,size,t0,t1,t2){
		var width = size*.333;
		t0.addTimeline( posInit.x,posInit.y,
						posInit.x,posInit.y + size,
						posInit.x+width,posInit.y +size);
		t1.addTimeline( posInit.x+width,posInit.y,
						posInit.x+width,posInit.y + size,
						posInit.x+width+width,posInit.y +size);
		t2.addTimeline( posInit.x+width*2,posInit.y,
						posInit.x+width*2,posInit.y + size,
						posInit.x+width*2+width,posInit.y +size);
		
	}
	triangle_I(posInit,size,t0,t1,t2){
		var width = size*.333;
		t0.addTimeline( posInit.x,posInit.y,
						posInit.x,posInit.y + size,
						posInit.x+width,posInit.y +size);
		t1.addTimeline( posInit.x+width,posInit.y,
						posInit.x+width,posInit.y + size,
						posInit.x+width+width,posInit.y +size);
		t2.addTimeline( posInit.x+width*2,posInit.y,
						posInit.x+width*2,posInit.y + size,
						posInit.x+width*2+width,posInit.y +size);
		
	}
	triangle_N(posInit,size,t0,t1,t2){
		var width = size*.333;
		t0.addTimeline( posInit.x,posInit.y,
						posInit.x,posInit.y + size,
						posInit.x+width,posInit.y +size);
		t1.addTimeline( posInit.x+width,posInit.y,
						posInit.x+width,posInit.y + size,
						posInit.x+width+width,posInit.y +size);
		t2.addTimeline( posInit.x+width*2,posInit.y,
						posInit.x+width*2,posInit.y + size,
						posInit.x+width*2+width,posInit.y +size);
		
	}
	
	update(timeElapsed, ratio){
		for(var i = 0 ; i < this.triangles.length;i++){
			this.triangles[i].update(0,ratio);
		}
	}
	render(ctx){
		ctx.save();
		ctx.strokeStyle = "yellow";
		ctx.fillStyle = "blue";
		this.triangles[0].render(ctx);
		for(var i = 0 ; i < this.triangles.length;i++){
			this.triangles[i].render(ctx);
		}
		ctx.restore();
	}
}