
"use strict";
class PointTriangle{
	constructor(){
		this.point00 = new Point2D();
		this.point01 = new Point2D();
		this.point02 = new Point2D();
		this.points = [this.point00,this.point01,this.point02];
	}
    
	addTimeline(x0,y0, x1,y1,x2,y2){
        this.point00.addTimeline(x0,y0);
        this.point01.addTimeline(x1,y1);
        this.point02.addTimeline(x2,y2);
	}
    update(timeElapsed, ratio){
        ratio = Math.min(ratio,1);
        for(var i = 0;  i <3; i++){
            this.points[i].get(ratio);
        }
    }
	render(ctx){
        ctx.beginPath();
        //console.log(this.point00);
        ctx.moveTo(Math.round(this.point00.x.value),Math.round(this.point00.y.value));
        ctx.lineTo(Math.round(this.point00.x.value),Math.round(this.point00.y.value));
        ctx.lineTo(Math.round(this.point01.x.value),Math.round(this.point01.y.value));
        ctx.lineTo(Math.round(this.point02.x.value),Math.round(this.point02.y.value));
        ctx.lineTo(Math.round(this.point00.x.value),Math.round(this.point00.y.value));
        ctx.fill();
        ctx.stroke();
		//draw a triangle
	}
}