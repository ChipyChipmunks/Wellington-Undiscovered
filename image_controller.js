
var images = [];
var current = 0;
var target = document.getElementById('cover-image');
var run = false;

window.addEventListener("load", setup);
window.setInterval(alternateImage, 2500);

function setup() {

	images[0] = "resources/site-images/wellington-background.jpg";
	images[1] = "resources/site-images/wellington_night_1.jpg";
	images[2] = "resources/site-images/wellington-background-1.jpg";
	images[3] = "resources/site-images/wellington-background-4.jpg";
	images[4] = "resources/site-images/wellington-background-5.jpg";


	run = true;
}

function alternateImage() {
	if (run === false){return;}

	if (current < images.length - 1){
		current++;
	}
	else {
		current = 0;
	}

	target.src = images[current];
}