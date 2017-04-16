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
	}
};


/*var btn = document.getElementById("btn");
var fun =  function(){
alert("kek");
}
maryaFramework.event(btn, "click", fun);
var el = maryaFramework.create("div"); 
*/


