var div = document.getElementById("div");
div.contentEditable = true;
var menu = document.getElementById("menu");
var link = document.getElementById("link")
var bold = document.getElementById("bold");
var emphasize = document.getElementById("emphasize");
var italic = document.getElementById("italic");
var сlear = document.getElementById("сlear");
var color_text = document.getElementById("color_text");
var color_back = document.getElementById("color_back");
var list = document.getElementById('list');

list.addEventListener("click", function(){
	document.execCommand("insertOrderedList", false, null);
})
bold.addEventListener("click", function(){
    document.execCommand("bold", false, null);
});

italic.addEventListener("click", function(){
    document.execCommand("italic", false, null);
});

emphasize.addEventListener("click", function(){
    document.execCommand("underline", false, null);
});
color_text.addEventListener("click", function(){
    document.execCommand("foreColor", false, "orange");
});
сlear.addEventListener("click", function(){
    document.execCommand("removeFormat", false, null);
});

link.addEventListener("click", function(){
	var url = prompt("Link:");
	document.execCommand("createLink", false, url)
})