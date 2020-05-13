let canvas, img, k, n, m;
let r, g, b;
let slider1, slider2, button;

function setup() {
	canvas = createCanvas(500, 500);
	canvas.style('border-radius', '30px');

	// canvas.position(0, 0);
	// canvas.style('z-index', ' -1');
	img = createImage(540, 540);
	pixelDensity(2);

	slider1 = createSlider(0, 200, 50);
	slider1.style('width', '210px');
	slider1.style('display', 'block');
	slider1.class('slider');
	slider1.changed(update);

	slider2 = createSlider(0, 100, 5);
	slider2.style('width', '210px');
	slider2.style('display', 'block');
	slider2.class('slider');
	slider2.changed(update);

	button = createButton('Save PNG');
	button.mousePressed(saveImg);
	button.style('width', '210px');
	button.style('height', '30px');

	k = PI / 180;
	background(120);

}
function draw() {
	update();
	noLoop();
}

function update() {
	img.loadPixels();
	for (let i = 0; i < img.width; i++) {
		for (let j = 0; j < img.height; j++) {
			m = (cos(i * 0.0045) * slider1.value()) / 100000;
			n = slider2.value() / 10;

			let r = 127 + 127 * sin(m * i * j);
			let g = 127 + 127 * sin(m * i * j + n);
			let b = 127 + 127 * sin(m * i * j + 2 * n);
			img.set(i, j, color(r, g, b));
		}
	}
	img.updatePixels();
	image(img, 0, 0);
}

function saveImg() {
	saveCanvas('CE002', 'png');
}