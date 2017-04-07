var N = prompt("Vvedite N");
var K = prompt("Vvedite K");


var table = document.getElementById("table")

 	for (var i = 1; i < N; i++){
	    var tr = document.createElement("tr");
	    table.appendChild(tr);
	    for(var j = 1; j < K; j++){
		    var td = document.createElement("td");
		    tr.appendChild(td);
		    td.innerText = i*j
	        if(td.innerText == i*i){
	    		td.setAttribute("class", "green")
			}    
		}
	}

