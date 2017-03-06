function Snake (){
	this.startX;
	this.startY;
	this.rectSize = 10;
	this.dir = [1,0];

	this.x = floor(width/2);
	this.y = floor(height/2);

	this.init = function (){
		this.reset();
	}
	this.direction = function (x, y){
		this.dir[0] = x;
		this.dir[1] = y;
	}

	this.reset = function (){
		this.startX = this.x;
		this.startY= this.y;
	}

	this.show = function (){
		//push();
		fill(255);
		
		//if (this.x > 0 && this.x < this.width && this.y > 0 && this.y < height){
			rect(this.x, this.y, this.rectSize, this.rectSize);
// else {
			//this.reset();
		//}
		this.x = this.x+this.dir[0]*this.rectSize;
		this.y = this.y+this.dir[1]*this.rectSize;
		//pop();
	}

}