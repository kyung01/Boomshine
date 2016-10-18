
"use strict";
class Point2D{
	constructor(){
		this.x = new Point();
		this.y = new Point();
	}
	addTimeline(x,y){
		this.x.addTimeline(x);
		this.y.addTimeline(y);
	}
	get(ratio){
        return [this.x.get(ratio),this.y.get(ratio)];
	}
}