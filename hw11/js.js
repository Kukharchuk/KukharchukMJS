

var routes = { 
	"#peace": {
		path: "peace.html",
		handler: function(){
			var img = document.getElementById("img");
			img.addEventListener("mouseover", function(){
				img.classList.toggle("peace2");
			})
		}
	}, 
	"#flower": {
		path: "flower.html",
		handler: function(){
			
		}
	} , 
	"#dog": {
		path: "dog.html",
		handler: function(){ 
			console.log("kek");
			var names = document.getElementsByName("name");
			var res = document.createElement("p");
			var btn = document.getElementById("btn");
			btn.addEventListener("click", function(){
				div.appendChild(res);
			    res.innerText = "Привет " +  names[0].value + " " + names[1].value + "!";
			})
			
		}
	},
	"#cat": {
		path: "cat.html",
		handler: function(){}
	},
	"#world":{
		path: "world.html",
		handler: function(){
			var btn = document.getElementsByTagName("button")
			for (var i = 0; i < btn.length; i++) {
				btn[i].addEventListener("click", function(){
				this.parentNode.parentNode.remove();
			})
			}
		}
	}
} 

var route = function(){ 
	var hash = location.hash; 
	var path = null;  
	var handler = null;
	for (var h in routes) { 
		if (h == hash) { 
		path = routes[h].path; 
		 handler = routes[h].handler; 
		} 
	} 
	if(path != null){ 
	openPage(path, handler); 
	} 
} 

var openPage = function(path, handler){ 

var xhr = new XMLHttpRequest(); 
xhr.open("GET", path, true); 
var div = document.getElementById("div"); 
xhr.onload = function(){ 
div.innerHTML = xhr.responseText; 
handler(); 
console.log("fd")
} 
xhr.send(); 
} 

window.onhashchange = route; 
route();