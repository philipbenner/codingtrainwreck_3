/* 
*/
var grid;
var ui;
var s;
var lcount;
var gameState = false;

function setup() {
	//lcount = width/10;
	pixelDensity(1);
	frameRate(8);
	var can = createCanvas(320, 568);
	can.parent("container");
	createGrid();
}

function createGrid (){ 
	grid = new Grid();
	grid.init();
	ui = new UI(grid);
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
		grid.reset();
		gameState = true;
	}
}
function mousePressed (){

		//gameState = true;
}

function draw() {
	background(255);
	push()
	translate(20, 100);
	grid.drawGrid();
	pop();
	ui.drawUI();
	
	
	//s.show();

}