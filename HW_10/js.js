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
};


prod_good.prototype = new Good();

function Shop(name, addres, markup, income){
    this.name = name; 
    this.addres = addres; 
    this.markup = markup; 
    this.income = income; 
    
    Object.defineProperty(this, "goods", { 
    set: function(goods) {
        this.goods.push(good);
    }
    });
    
    
    Object.defineProperty(this, "sum", { 
    get: function() {
        var sum = 0;
        for(var i = 0; i < this.goods.length; i++){
            sum+=this.goods[i].price;
        };
        return sum;
    }
    });
    
};

Shop.prototype.addGood = function(t, n){
    for(var i = 0; i < n; i++) {
        this.goods.push(t);
    }
};