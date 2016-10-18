
"use strict";
class Point{
	constructor(){
		this.value = 0;
		this.timeLine = new Array();
	}
	addTimeline(value){
		this.timeLine.push(value);
	}
	get(ratio){
		var n = ratio * (this.timeLine.length-1);
		var index = Math.floor(Math.min( this.timeLine.length - 1.001, Math.floor(n) ) );
		var progress = n - index;
		this.value = this.timeLine[index] + (this.timeLine[index+1] - this.timeLine[index]) * progress;	
		return this.value;
	}
}