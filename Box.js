function Box (_x, _y, _i,_b,_p){
	this.pos = [_x,_y];
	this.index = _i;
	this.blockSize = _b;
	this.parent = _p;

	this.show = function (){
		/*push()
		noFill();
		stroke(100,100,100,255);
		strokeWeight(1);
		rect(this.pos[0]*this.blockSize,this.pos[1]*this.blockSize, this.blockSize, this.blockSize);

		pop();*/

	}
	this.fillBlock = function  () {
		push()
		fill(255);
		stroke(100);
		rect(this.pos[0]*this.blockSize,this.pos[1]*this.blockSize, this.blockSize, this.blockSize);

		pop();
	}
	this.foodBlock = function  () {
		push()
		fill(255);
		stroke(100);
		ellipse(this.pos[0]*this.blockSize+((this.blockSize)/2),this.pos[1]*this.blockSize+((this.blockSize)/2), this.blockSize);

		pop();
	}
}