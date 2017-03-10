function Grid (){
	this.blockSize = 10;
	this.fieldSize = 300;//squared
	this.field = [];
	this.snake;
	this.food;
	this.foodLoc;
	this.foodExists = false;
	this.divisions = floor(this.fieldSize/this.blockSize);

	this.init = function() {
		var counter = 0;
		for (var y = 0; y < this.divisions; y++ ){
			for (var x = 0; x < this.divisions; x ++ ){
				var tempxy = new Box (x,y,counter,this.blockSize, this);
				counter++
				this.field.push(tempxy);
			}
		}
		// redraw grid with lines rather than drawing 900 boxes
		
		this.snake = new Snake(0, this.divisions, this.blockSize, this);
		this.food = new Food();
	}

	this.drawGrid = function (){

		for (var i = this.field.length - 1; i >= 0; i--) {
			this.field[i].show();
		};
		var snakeList = this.snake.show()
		this.showSnake(snakeList); 

		if (!this.foodExists){
			this.foodLoc = this.food.createFood(snakeList);
			
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
		}

	}
	this.showFood = function(ind) {
		this.field[ind].foodBlock();
	}
	this.showSnake = function (a){

		for (var i = 0; i < a.length; i++) {
			//console.log("a", a, a[i]);
			this.field[a[i]].fillBlock();
		};
		//this.field[a].fillBlock();
	}
	


	this.direction  = function(x,y){
		this.snake.direction(x,y)
	}

	this.update = function (){

	}


}