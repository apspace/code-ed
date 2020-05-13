let button, change;
let para = [];
let h;
function setup() {
	noCanvas();
	button = createButton("Click");
	change = createSlider(1, 36, 24);
	change.input(changeSize);
	button.mousePressed(createPara);
	background(0);
	h = select('h1');
	// h.html('1234');
}


function createPara() {
	let p = createP('Number ' + random(0, 10));
	p.class('new');

}

function changeSize() {
	para = selectAll('.new');
	// // createP(para);
	// let x = createP(para.length + 'size');
	// x.style('font-size', change.value() + 'pt');

	for (let i = 0; i < para.length; i++) {
		para[i].style('font-size', change.value() + 'pt')
	}
}
// function draw() {
// 	fill(255);
// 	noStroke();
// 	ellipse(mouseX, mouseY, 30, 30);

// }