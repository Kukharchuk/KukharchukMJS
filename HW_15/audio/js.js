var audio = document.getElementsByTagName("audio")[0];
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var stop = document.getElementById("stop");
var spon = document.getElementById("speed_more");
var spoff = document.getElementById("speed_less");
var speed = document.getElementById("speed");
var vol = document.getElementById("volume");
var vol_track = document.getElementById("vol_track");
var track = document.getElementById("track");
var track_now = document.getElementById("track_now");

var v = 1;

vol.addEventListener("click", function(){
	if (v){
	audio.volume = 0;
	vol.firstChild.setAttribute("src", "voloff.png");
	v--;
}
	else {
	audio.volume = 0.5;
	vol.firstChild.setAttribute("src", "vol.png");
	v++;
	}
})


var i = 1;
play.addEventListener("click", function(){
	if(i){
	audio.play();
	play.firstChild.setAttribute("src", "pause.png");
	i--;
}
   else {
   	audio.pause();
	play.firstChild.setAttribute("src", "play.png");
	i++;
   } 
})

stop.addEventListener("click", function(){
	audio.currentTime = 0;
	audio.pause();
	play.firstChild.setAttribute("src", "play.png");
	i++;
})

speed_more.addEventListener("click", function(){
	audio.playbackRate = audio.playbackRate*1.25;
	speed.innerHTML = audio.playbackRate;
})

speed_less.addEventListener("click", function(){
	audio.playbackRate = audio.playbackRate/1.25;
})

vol_track.addEventListener("change", function(){
	audio.volume = vol_track.value/10;
	if ( audio.volume == 0){
	vol.firstChild.setAttribute("src", "voloff.png");
	v--;
}
	else {
	vol.firstChild.setAttribute("src", "vol.png");
	v++;
	}

})
var time = document.getElementById("time");

function length(){
	return track.getBoundingClientRect().right - track.getBoundingClientRect().left
}

audio.addEventListener("loadedmetadata", function(){
 	audio.addEventListener("play", function(){
	setInterval(function() {
		time.innerHTML = audio.currentTime + "/" + audio.duration;
		var wdth = audio.currentTime/audio.duration*100;
		track_now.style.width = wdth + "%";
	})
	}, 1);

track.addEventListener("click", function(e){
	var new_width = e.offsetX/length()*100;
	audio.currentTime = audio.duration*e.offsetX/length();
	track_now.style.width = new_width + "%";

})
})

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
 function Human(name,age){
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

-----------------------------------------------------------------------
<audio src="..."></audio>
<video src=".."></video>
controls="controls"

consructors:
var img = new Image();
var aud = new Audio();
*/


//var canvas = document.querySelector("canvas");



/*audio.play();
audio.pause();
.src - adress of audio fail
.controls - true - basic player
.valume - volume of song ( 0 - 1 )
.currentTime - seconds from start of song
.duration - length of track
.muted - true - valume off/ false - back to old
.playbackRate - (1) speed of track
.loop - infinity play if true 

---------------addEventListener-------------
loadetdata
loaddedmetadate
error
ended
pause
play
volumechange
-------------------------video
.width
.height
.videoWidth
.videoHeight
*/



