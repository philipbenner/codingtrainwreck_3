function UI (_g) {
	this.w = width;
	this.h= height;
	this.frame = [10,10];
	this.grid = _g;
	this.modalSize = this.grid.fieldSize//(this.grid.fieldSize/this.grid.blockSize)*this.grid.blockSize

	this.drawFrame = function(){
		push();
		stroke (0);
		strokeWeight(2);
		noFill();
		rect(10,10, this.w-20, this.h-20);


		pop();

	}
	this.drawTitle =  function() {
		push();
		textSize(23);
		fill(0);
		text("The Coding Trainwreck", 40, 43);
		textSize(51);
		text("SSSNAKE", 38, 88);
		pop();
	}
	this.drawGameModal =  function() {
		// need to work on this... i'm sort of locking in size here... 
		push();
		noStroke();
		fill(255, 0,0,50);
		rect(20-2,100-2,this.modalSize+4,this.modalSize+4)
		pop();
	}
	this.drawGameOver = function () {
		
	}
	this.drawGameStart = function(){
		push();
		stroke(0);
		strokeWeight(1);
		fill(255);
		translate(40, 180);
		rect(0,0,240,60);
		noStroke();
		textSize(20);
		fill(0);
		text("Press Enter to Start!", 24, 40);
		pop();
	}
	this.drawUI = function (){
		this.drawFrame();
		this.drawTitle();
		if(!gameState){
			this.drawGameModal();
			this.drawGameStart();
		}
	}
}