function Box (_x, _y, _i,_b,_p,_s){
	this.pos = [_x,_y];
	this.index = _i;
	this.blockSize = _b;
	this.parent = _p;
	this.trainImage = _s;

	this.init = function (){
		
	}

	this.show = function (){
		/*push()
		noFill();
		stroke(100,100,100,255);
		strokeWeight(1);
		rect(this.pos[0]*this.blockSize,this.pos[1]*this.blockSize, this.blockSize, this.blockSize);

		pop();*/

	}
	this.fillBlock = function  (s, n, u,f) {
		var fc = (frameCount %2) ;
		if(n%2){
			if(fc == 0 ){
				fc =1;
			} else if (fc ==1 ){
				fc = 0;
			}
		}
		// 81x90
		// find direction...  this is now a trainwreck!!! 
		// should probably restart the whole thing again now.
		var headpos = [81*2,0, 81, 90];
		if(s == 0){
			if(u == 1){
				headpos = [81*2,fc*90, 81, 90];
			} else if(u ==-1) {
				headpos = [81*3,fc*90,81,90];
			} else if(u == 10){
				headpos = [81*7,fc*90, 81, 90];
			} else if(u == -10){
				headpos = [81*6,fc*90, 81, 90];
			}
			
		} else if(s == 1){
			
			if(Math.abs(u) == 10 ){
				headpos = [81*5,fc*90,81,90];
			} else {
				headpos = [81,fc*90,81,90];
			}
		} else if (s == 2){
			// caboose
			if(Math.abs(u) == 1 ){
				headpos = [0,fc*90,81,90];
			} else {

				headpos = [81*4,fc*90,81,90];
			}
		}
		

		push();
		translate(this.pos[0]*this.blockSize,this.pos[1]*this.blockSize-5);
		
		image(this.trainImage,-2,-4,32,32,headpos[0],headpos[1],headpos[2],headpos[3])
		pop();

		/*push();
		fill(255);
		stroke(100);
		rect(this.pos[0]*this.blockSize,this.pos[1]*this.blockSize, this.blockSize, this.blockSize);

		pop();*/

	}
	this.foodBlock = function  () {
		push()
		fill(255);
		stroke(100);
		ellipse(this.pos[0]*this.blockSize+((this.blockSize)/2),this.pos[1]*this.blockSize+((this.blockSize)/2), this.blockSize);

		pop();
	}
}