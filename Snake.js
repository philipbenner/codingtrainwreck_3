function Snake (_i,_d, _b, _p){
	this.startIndex = _i;
	this.parent = _p;
	this.index = this.startIndex;
	this.division = _d;
	this.blockSize = _b;
	this.snakeLength = 5;
	this.snakeHead = this.startIndex;
	this.move = 1
	this.list = [0];

	this.init = function (){
	}

	this.show = function () {
		var sideConstrain = false;
		if (gameState){
			var tempHead = this.snakeHead + this.move;
			if( tempHead >= 0 && tempHead <= 899){
				
				for (var i = 0; i < this.division; i++) {
					var tempIndex = i*this.division;

					if( (tempHead == tempIndex && this.snakeHead == tempIndex-1) || (tempHead == tempIndex-1 && this.snakeHead == tempIndex) ){

						sideConstrain = true;
						gameState = false;
					}
				};
				
				if(!sideConstrain){
					var newPos = [];

					newPos = this.list.slice(0,this.snakeLength);
					//console.log(newPos);

					

					// need a better constaint system... 
				
					this.list = newPos;
					this.snakeHead = tempHead;
					this.list.unshift(this.snakeHead);
				}
				
			} else{
				console.log('stopped');
			}
		}
		//console.log(this.snakeHead)
		return this.list;
		
	}

	this.direction = function (x,y){
		if(x > 0 && y == 0){
			this.move = 1;
		} else if(x < 0 && y == 0){
			this.move = -1;
		} else if(y > 0 && x == 0){
			this.move = this.division;
		} else if(y < 0 && x == 0){
			this.move = -this.division;
		}
		
	}
	
	

}