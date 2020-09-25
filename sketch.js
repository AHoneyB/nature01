var displacement;

function setup() {
	createCanvas(400, 400);
	displacement = new Displacement(200, 200);
}

function draw() {
	background(0);
	displacement.update();
	displacement.show();
}