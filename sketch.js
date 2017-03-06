var s;

function setup() {
	frameRate(10);
	createCanvas(512, 512);
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
	s.show();

}