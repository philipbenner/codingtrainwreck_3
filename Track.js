function Track (_fs,_bs,_d){

	this.fieldSize = _fs;
	this.blockSize = _bs;
	this.divisions = _d;

	this.trackImage;

	this.init = function (){
		this.loadImg();
	}

	this.loadImg = function () {
		this.trackImage = loadImage("trackloop.png");
	}
	this.show = function () {
		

		push();
		for (var y = 0; y < this.divisions; y++ ){
			for (var x = 0; x < this.divisions; x ++ ){
				var yv = y*this.blockSize;
				var xv = x*this.blockSize;
				var spos = [];
				//this would be better as a switch so it could fall through... 
				if(y == 0){
					if( x == 0){
						spos = [0,0]
					} else if ( x >0 && x < this.divisions-1 ){
						spos = [40, 0];
					} else if (x == this.divisions-1){
						spos = [80, 0];
					}
				} else if (y == this.divisions-1){
					if( x == 0){
						spos = [0,80]
					} else if (x >0 && x < this.divisions-1 ){
						spos = [40, 80];
					} else if ( x == this.divisions-1){
						spos = [80, 80];
					}
				} else if (y > 0 && y < this.divisions-1 && x== 0){
					spos = [0, 40];
				} else if (y > 0 && y < this.divisions-1 && x== this.divisions-1){
					spos = [80, 40];
				} else{
				 	spos = [40,40];
				}

				
				image(this.trackImage,xv,yv,28,28,spos[0],spos[1],40,40)
				
			}
		}

		pop();



	}

}