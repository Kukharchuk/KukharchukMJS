function Good(name, type, price, date, id){ 
	this.name = name; 
	this.type = type; 
	this.price = price; 
	this.date = new Date(date); 
	this.id = id;
};  
var id=0;
Good.prototype.setId = function(){ 
 this.id= id++; 
};

function prod_good(exp_date){
	this.exp_date = new Date(exp_date);
	Array.prototype.shift.call(arguments)
	Good.apply(this, arguments);
	
	Object.defineProperty(this, "term", {
		get: function(){ return this.date.getFullYear() - this.exp_date.getFullYear(); }
	})
}

prod_good.prototype = new Good();
var l = new prod_good("2018", "ff", "ffd", "44", "2017", id) ;
//l.setId();
 //var h = new Good("ff", "ffd", "44", "2017", id);
 //h.setId();
console.log(l);
//console.log(h);