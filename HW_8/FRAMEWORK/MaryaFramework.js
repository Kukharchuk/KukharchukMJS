var maryaFramework = {
	append: function(t,w){
			w.appendChild(t)
	},
	prepend: function(t,w){
		w.insertBefor(t, w.firstChild)
	},
	remove: function(t){
		t.remove();
	},
	create: function(s){
		return document.createElement(s);
	},
	replace: function(t,w){
		var parent = w.parentNode;
		parent.replaceChild(t,w)
	},
	event: function(t,e,f){
		if (typeof t.addEventListener(e,f) == "function"){
			t.addEventListener(e,f)
		}
		else t.attachEvent("on" + e,f);

	},
	unevent: function(t,e,f){
		if(typeof t.removeEventListener == "function") { 
				t.removeEventListener(e, f); 
		} 
		else { 
				t.detachEvent("on" + e, f) 
		}
},
	dispatch: function(t,e){
		var event = new Event(e); 
		t.dispatchEvent(event); 
},
	Get:{
		ById: function(id){
			return document.getElementById(id)
		},
		ByClass: function(cl){
			return document.getElementsByClassName(cl)
		},
		ByTag: function(tag){
			return document.getElementsByTagName(tag)
		},
		BySelector: function(selector){
			return  document.querySelector(selector)
		},
		BySelectorAll: function(selectorAll){
			return	document.querySelectorAll(selectorAll)		
		}

	},
	width: function(e){
		return e.clientWidth;
	},
	hight: function(e){
		return e.clientHeight;
	},
	pageTop: function(e){
        var offset = 0;
		while(e.offsetParent!= null){
			offset = e.offsetTop;
			e = e.offsetParent;
		}
		return offset;
	},
	pageLeft: function(e){
        var offset = 0;
		while(e.offsetParent!= null){
			offset = e.offsetLeft;
			e = e.offsetParent;
		}
		return offset;
	},
	css: function(){
		if (arguments.lenght == 2) {
			return arguments[0].style[arguments[1]];
		}
    	else         
    		if( arguments.length == 3) {
            arguments[0].style[arguments[1]] = arguments[2];
        }
        	else {console.log("Неверное число аргументов")}
    }

};
var btn = document.getElementById("btn");



/*var btn = document.getElementById("btn");
var fun =  function(){
alert("kek");
}
maryaFramework.event(btn, "click", fun);
var el = maryaFramework.create("div"); 
*/


