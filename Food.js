function Food (r){
	this.ran = r;
	//this.gridCount = 899;

	this.createFood =  function (a) {
		// take in snake array
		// while loop of random to find a spot that isn't where the snake is. 
		var r = floor(random(this.ran*this.ran));
		return r;
		//this.exists = true;
	}
}