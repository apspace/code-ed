let r;
let canvas;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');
	r = windowWidth / 10;

	stroke(255);
	fill(0);
}
function draw() {

}
function mouseDragged() {
	ellipse(mouseX, mouseY, r, r);
}
