var routes = { 
	"#action": {
		path: "action.json",
		handler: function(){
			//	var div = document.createElement("div");

		}
	}, 
	"#western": {
		path: "western.json",
		handler: function(){}
	} , 
	"#comedy": {
		path: "comedy.json",
		handler: function(){}
	},
	"#tcomedy": {
		path: "tcomedy.json",
		handler: function(){}
	},
	"#fantasy":{
		path: "fantasy.json",
		handler: function(){}
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
    
	xhr.onload = function(){ 
		var films = JSON.parse(xhr.responseText);
		var i = 0;
		if(i===0){
		for (var i = 0; i < films.length; i++) {
			var div = document.getElementById("div");
			var img = document.createElement("img");
			div.appendChild(img);
			var wrap = document.createElement("div");
			div.appendChild(wrap);
			var title = document.createElement("h3");
			wrap.appendChild(title);
			var coast = document.createElement("p");
			wrap.appendChild(coast);
			var stock = document.createElement("p");
			wrap.appendChild(stock);
			var desc = document.createElement("p");
			wrap.appendChild(desc);
			var form = document.createElement("form");
			wrap.appendChild(form);
			img.setAttribute("src", films[i].img);


			title.innerText = films[i].title;
			coast.innerText = films[i].coast + " р.";
			desc.innerText = films[i].description;

				if (films[i].stock == true){
					stock.innerText = "В наличии";
				}
				else {films.innerText = "Нет в наличии";}
				i++;
			}

		console.log(xhr.responseText);
		handler(); 
		console.log("fd")
	}
} 
xhr.send(); 
} 


window.onhashchange = route; 
route();