/* the more i thought about this the more I thought this wasn't the correct approach.
Nor one that the original coders would have used. I feel this way because of the 'food'
The food needs to fall in the 'grid' and not where the snake has been. I also believe programmers
of the Basic language would be thinking on more of a grid/array/matrix than in the more free 
world of Processing/flash/or Canvas(JS)
*/

var s;
var lcount;

function setup() {
	lcount = width/10;
	frameRate(3);
	createCanvas(400, 400);
	createSnake();
}

function createSnake (){
	s = new Snake();
	s.init();
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		s.direction(-10,0);
	} else if(keyCode === RIGHT_ARROW){
		s.direction(10,0);
	} else if(keyCode === UP_ARROW){
		s.direction(0,-10);
	} else if(keyCode === DOWN_ARROW){
		s.direction(0,10);
	}
}

function draw() {
	background(0);
	//push();
	stroke(255,255,255,20);

	for (var l = 0; l <400/10; l++){
		line(10*l, 0, 10*l, height);
		line(0, 10*l, width, 10*l);
	}
	
	s.show();

}