/*function Calculator(){
	}

Calculator.prototype.sum = function(a,b){
	return a+b;
}
Calculator.prototype.minus = function(a,b){
	return a-b;
}
Calculator.prototype.mult = function(a,b){
	return a*b;
}
Calculator.prototype.del = function(a,b){
	return a/b;
}


var clc = new Calculator();
var calc = new Calculator();
alert(calc.mult() == clc.mult());


//Паттерны классов джс
//1. Фабрика
/* function Human(name,age){
	return {
		name: name,
		age: ag,
		sayHi: function(){alert("hi");}	
	}
}
var h = Human("Alex", 30);
var m = Human("maria", 18);
2. Конструктор
function Human(name,age){
	
		this.name: name,
		this.age: ag,
		this.sayHi: function(){alert("hi");}	
	
}
var h = new Human("Alex", 30);
var m = new Human("maria", 18);
h instanceof Human (true еслі созданн этім конструктором)
3*. Прототип+конструкторо
!!!function Human(name,age){
	
		this.name: name,
		this.age: age,
		}
Задаем только те поля которые у разных объектов разные, одинаковые поля заносим в прототип:
Human.prototype.sayHi = function(){
	alert("hi");
}
Когда создаем объект, те поля и те методы которые через прототип вызываются точно также как и другие.
var h = new Human("alex", 33);
h.sayHi();

При вызове свойства, сначала попытка получить собственное свойсто, если нет - идем в прототип.

Human.prototype.constractor --- Human

Human.prototype = {
	sayHi: function(){},
	country: ..,
	field: ..,
} В таком способе конструктор назначаем вручную, так все что было стирается

Отличе паттерна прототип от прототип+конструктор

У любого объекта есть метод 
.hasOwnProperty - если такой метод уже есть - вернутся тру, если нет фолс.

---------Цепочка прототипов( Наследование)
	function SuperTye(){
		this.field = "a";
	}
	superTupe.method = function(){}
	function SubType(){}
	SubType.prototype = new SuperType();
*/
//var body = document.getElementById("body");
//var xhr = new XMLHttpRequest();
//xhr.open("GET", "hello.html", true);
/*var onLoadData = function(){
	body.innerHTML = xhr.responseText;
	var btn = document.getElementById("btn");
	var kek = document.getElementById("kek");
	btn.addEventListener("click", function(){
		alert(kek.value);
	})
}
xhr.onload = function(){
    onLoadData();
}


*/
var div = document.getElementById("human");


var xhr = new XMLHttpRequest();
xhr.open("GET", "json.json", true);


var onLoadData = function(){
	var goods = JSON.parse(xhr.responseText);
	for (var i = 0; i < goods.length; i++) {
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
		var input = document.createElement("input");
		form.appendChild(input);
		input.setAttribute("type","number");
		var btn = document.createElement("button");
		form.appendChild(btn);
		btn.setAttribute("type", "button");
		btn.innerText="+";
		img.setAttribute("src", goods[i].img);


		title.innerText = goods[i].title;
		coast.innerText = goods[i].coast + " р.";
		desc.innerText = goods[i].description;

			if (goods[i].stock == true){
				stock.innerText = "В наличии";
			}
			else {stock.innerText = "Нет в наличии";}

	    var res = document.getElementById("result");

	    			var j = 0;
					
					var bag = [];
	(function(x){	
		btn.addEventListener("click", function(){				
		//	var strk = document.createElement("p");
		//    res.appendChild(strk);
		if(bag[x].name != goods[x].title){		
			bag[x].sum =  +this.previousSibling.value; 
			bag[x].name = goods[x].title;
		}
		else {
			bag[x].sum+= +this.previousSibling.value; 
		}
			strk.innerText = bag[x].name + ":" + bag[x].sum;
		})
	})(i);
		
	}
	

}

xhr.onload = function(){
    onLoadData();
}

xhr.send();