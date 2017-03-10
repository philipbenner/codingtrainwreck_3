/* 
*/
var grid;
var s;
var lcount;
var gameState = false;

function setup() {
	//lcount = width/10;
	frameRate(10);
	createCanvas(400, 400);
	createGrid();
}

function createGrid (){ 
	grid = new Grid();
	grid.init();
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		grid.direction(-1,0);
	} else if(keyCode === RIGHT_ARROW){
		grid.direction(1,0);
	} else if(keyCode === UP_ARROW){
		grid.direction(0,-1);
	} else if(keyCode === DOWN_ARROW){
		grid.direction(0,1);
	}else if (keyCode === ENTER){
		gameState = true;
	}
}

function draw() {
	background(0);
	translate(50, 50);
	grid.drawGrid();
	//push();
	
	
	//s.show();

}