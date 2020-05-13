let pink;
let c, img, k;
let slider, button;

function setup() {
	c = createCanvas(windowWidth, windowHeight);
	c.position(0, 0);
	c.style('z-index', ' -1');
	img = createImage(windowWidth, windowHeight);
	slider = createSlider(0, 100, 30);
	slider.style('width', '210px');
	slider.class('slider');
	slider.changed(update);
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
			let m = cos(i * 0.0045) * tan(slider.value() / 10 * k);
			let r = 127 + 127 * sin(m * i * j * 0.001);
			let g = 127 + 127 * sin(m * i * j * 0.00103);
			let b = 127 + 127 * sin(m * i * j * 0.00106);
			img.set(i, j, color(r, g, b));
		}
	}
	img.updatePixels();
	image(img, 0, 0);
}