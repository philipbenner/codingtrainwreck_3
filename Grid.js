function Grid (){
	this.blockSize = 20;
	this.fieldSize = 280;//I have NOOOO clue why I used this... refractor later... 
	// though this does seem to have worked it was 10 280
	this.field = [];
	this.snake;
	this.food;
	this.foodLoc;
	this.foodExists = false;
	this.foodRandom = floor(this.fieldSize/this.blockSize);


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
		this.food = new Food(this.foodRandom);
	}

	this.drawGrid = function (){
		this.theGrid();
		
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

	this.theGrid = function (){
		push();
		stroke(255,255,255,100);
		strokeWeight(1);
		for (var y = 0; y < this.divisions+1; y++ ){
			var yv = y*this.blockSize;
			line(0, yv, this.fieldSize , yv);
		}
		for (var x = 0; x < this.divisions+1; x ++ ){
			var xv = x*this.blockSize;
			line(xv, 0, xv, this.fieldSize );
		}
		pop();
	}


	this.showFood = function(ind) {

		this.field[ind].foodBlock();
	}
	this.showSnake = function (a){

		for (var i = 0; i < a.length; i++) {
			this.field[a[i]].fillBlock();
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