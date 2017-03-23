function Grid (){
	this.blockSize = 28;
	this.fieldSize = 280;//I have NOOOO clue why I used this... refractor later... 
	// though this does seem to have worked it was 10 280
	this.field = [];
	this.tracks;
	this.snake;
	this.food;
	this.foodLoc;
	this.foodExists = false;
	this.foodRandom = floor(this.fieldSize/this.blockSize);
	this.trainSprite;

	this.divisions = floor(this.fieldSize/this.blockSize);

	this.init = function() {
		this.trainSprite = loadImage('trainSprite.png');
		this.tracks = new Track(this.fieldSize, this.blockSize,this.divisions);
		this.tracks.init();
		var counter = 0;
		for (var y = 0; y < this.divisions; y++ ){
			for (var x = 0; x < this.divisions; x ++ ){
				var tempxy = new Box (x,y,counter,this.blockSize, this, this.trainSprite);
				counter++;
				this.field.push(tempxy);
			}
		}
		// redraw grid with lines rather than drawing 900 boxes
		
		this.snake = new Snake(0, this.divisions, this.blockSize, this);
		this.food = new Food(this.foodRandom);
	}

	this.drawGrid = function (){
		this.tracks.show();
		
		var snakeList = this.snake.show()
		this.showSnake(snakeList); 
		

		if (!this.foodExists){
			this.foodLoc = this.food.createFood(snakeList);
			//console.log('foodloc',this.foodLoc)
			this.foodExists = true;
		}else{
			if(this.foodLoc == snakeList[0]){
				this.foodExists = false;
				this.snake.extend();
			}else{
				this.showFood(this.foodLoc);	
			}
		}

		if(gameState){	
			//gameState = false;
		}/**/

	}



	this.showFood = function(ind) {
		this.field[ind].foodBlock();
	}

	this.showSnake = function (a){
		var fc = frameCount;
		for (var i = 0; i < a.length; i++) {
			var u = -1;
			if (a[i+1] != null){
				var b = a[i]-a[i+1];
			//console.log('b',b)

			}

			var n = 0;
			if (i == 0){
				// engine
				n = 0;
				u = b;
			} else if(i >= a.length-1) {
				//caboose
				n = 2;
				u = b;
			}else {
				//coach
				n = 1;
				u = b;
			}
			//console.log(a[i])
			this.field[a[i]].fillBlock(n, i, u, fc);
		};
	}
	


	this.direction  = function(x,y){
		this.snake.direction(x,y)
	}

	this.update = function (){

	}
	this.reset = function (){
		//console.log('gridreset')
		this.snake.reset();
		var snakeList = this.snake.show()
		this.showSnake(snakeList); 
	}

	

}