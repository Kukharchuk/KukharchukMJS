
var div = document.getElementById('body');
var img = document.createElement("img");
div.appendChild(img);
img.onload = function() {

	var canvas = document.getElementById('canvas');

	var context = canvas.getContext('2d');

	context.drawImage(img, 0, 0);

	var imageData = context.getImageData(0, 0, 300, 300);

	imageDataFiltered = sepia(imageData);
	context.putImageData(imageDataFiltered, 0, 0);
}

img.src = '2.png';

var sepia = function (imageData) {

var pixels = imageData.data;

	for (var i = 0; i < pixels.length; i += 4) {
	var r = pixels[i];
	var g = pixels[i + 1];
	var b = pixels[i + 2];
	pixels[i]     = (r * 0.393)+(g * 0.769)+(b * 0.189); // red
	pixels[i + 1] = (r * 0.349)+(g * 0.686)+(b * 0.168); // green
	pixels[i + 2] = (r * 0.272)+(g * 0.534)+(b * 0.131); // blue
	}
	return imageData;
};