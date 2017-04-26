var red = document.getElementById("red");
var menu = document.getElementById("context_menu");
	red.addEventListener("contextmenu", function(e){
		e.preventDefault();
		menu.style.display="block";
		menu.style.left = e.pageX + 'px'; 
		menu.style.top = e.pageY + 'px';
	}
	)
document.body.addEventListener("click", function(e){
	menu.style.display="none";
});

var color = document.getElementById("color");
var border = document.getElementById("border");
var form = document.getElementById("form");
var size = document.getElementById("size");
var img = document.getElementById("img") 
size.addEventListener("click", function(){
	red.style.height = '250px';
	red.style.width = '250px';
});

form.addEventListener("click", function(){
	red.style.borderRadius = "250px";
});

border.addEventListener("click", function(){
	red.style.border = '1px dashed black';
});

color.addEventListener("click", function(){
	red.style.backgroundColor = '#F680E6'
})

img.addEventListener("click", function(){
	red.style.backgroundImage = "url(kek.jpg)"
})