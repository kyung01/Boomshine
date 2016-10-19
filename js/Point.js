
"use strict";
class Point{
	constructor(){
		this.value = 0;
		this.timeline = new Array();
	}
	addTimeline(value){
		this.timeline.push(value);
	}
	get(ratio){
		var n = ratio * (this.timeline.length-1);
		var index = Math.floor(Math.min( this.timeline.length - 1.001, Math.floor(n) ) );
		var progress = n - index;
		this.value = this.timeline[index] + (this.timeline[index+1] - this.timeline[index]) * progress;	
		return this.value;
	}
}