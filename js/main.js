// main.js
// Dependencies: 
// Description: singleton object
// This object will be our main "controller" class and will contain references
// to most of the other objects in the game.

"use strict";

// if app exists use the existing copy
// else create a new object literal
var app = app || {};

/*
 .main is an object literal that is a property of the app global
 This object literal has its own properties and methods (functions)
 
 */
app.main = {
	//  properties

    WIDTH : 640, 
    HEIGHT: 480,
    canvas: undefined,
    ctx: undefined,
   	PAUSED: false,
   	lastTime: 0, // used by calculateDeltaTime() 
    debug: true,
    x:100,
    y:100,
    radius:40,
    xSpeed:200,
    ySpeed:160,
    fillStyle:"red",
    balls : new Array(),
    scene_title : new BoomshineTitle(640),

    STATIC : Object.freeze({
    	CIRCLE_NUM_START :100
    }),
    
    // methods
	init : function() {
		console.log("app.main.init() called");
		// initialize properties
		this.canvas = document.querySelector('canvas');
		this.canvas.width = this.WIDTH;
		this.canvas.height = this.HEIGHT;
		this.ctx = this.canvas.getContext('2d');

		this.canvas.onmousemove = this.doMouseMove.bind(this);
		this.canvas.onmousedown= this.doMouseDown.bind(this);
		for(var i = 0 ; i < this.STATIC.CIRCLE_NUM_START; i++){
			this.balls.push(new Ball(Math.random() * this.WIDTH,Math.random()*this.HEIGHT ) );

		}
		// start the game loop
		this.update();
	},
	doMouseMove:function(e){
    	var pos = getMouse(e);
        this.x = pos.x;
        this.y = pos.y;

	},

    doMouseDown:function(e){
    	var pos = getMouse(e);

		for (var i = 0; i < this.balls.length; i++) {
			var ball = this.balls[i];
			var x = pos.x - ball.x;
			var y = pos.y - ball.y;
			if(Math.sqrt(x*x+y*y) < ball.radius){
				ball.color = new RGBA(0,0,255,1);
				ball.xSpeed = 0;
				ball.ySpeed = 0;

			}
		}
    },
    
    
	update: function(){
		this.animationID = requestAnimationFrame(this.update.bind(this));// schedule a call to update()
	 	if(this.PAUSED){
	 		this.drawPauseScreen(this.ctx);
	 		return;
	 	}
	 	var dt = this.calculateDeltaTime();
        this.scene_title.update(dt.toFixed(3), this.x/(this.WIDTH*.5));
	 	 
		this.ctx.fillStyle = "black"; 
		this.ctx.fillRect(0,0,this.WIDTH,this.HEIGHT); 
        this.render(this.ctx);
        
		if (this.debug){
			this.fillText("dt: " + dt.toFixed(3), this.WIDTH - 150, this.HEIGHT - 10, "18pt courier", "white");
		}
		
	},
    render:function(ctx){
        this.scene_title.render(ctx);
    },
	drawPauseScreen:function(ctx){
		ctx.save();
		ctx.fillStyle = "black";
		ctx.fillRect(0,0,this.WIDTH,this.HEIGHT);
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		this.fillText("...PAUSE...", this.WIDTH/2, this.HEIGHT/2, "40pt courier","white");
		ctx.restore();
	},
	circleHitLeftRight: function(x,y,radius){
		if( x< radius || x > this.WIDTH - radius){
			return true;
		}
	},
	circleHitTopBottom: function(x,y,radius){
		if(y < radius || y > this.HEIGHT - radius){
			return true;
		}
	},
	
	fillText: function(string, x, y, css, color) {
		this.ctx.save();
		// https://developer.mozilla.org/en-US/docs/Web/CSS/font
		this.ctx.font = css;
		this.ctx.fillStyle = color;
		this.ctx.fillText(string, x, y);
		this.ctx.restore();
	},
	
	calculateDeltaTime: function(){
		var now,fps;
		now = performance.now(); 
		fps = 1000 / (now - this.lastTime);
		fps = clamp(fps, 12, 60);
		this.lastTime = now; 
		return 1/fps;
	}
	
    
    
}; // end app.main