var s;
var lcount;

function setup() {
	lcount = width/10;
	frameRate(10);
	createCanvas(400, 400);
	createSnake();
}

function createSnake (){
	s = new Snake();
	s.init();
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		s.direction(-1,0);
	} else if(keyCode === RIGHT_ARROW){
		s.direction(1,0);
	} else if(keyCode === UP_ARROW){
		s.direction(0,-1);
	} else if(keyCode === DOWN_ARROW){
		s.direction(0,1);
	}
}

function draw() {
	background(0);
	//push();
	stroke(255,255,255,50);

	for (var l = 0; l <400/10; l++){
		line(10*l, 0, 10*l, height);
		line(0, 10*l, width, 10*l);
	}
	
	s.show();

}