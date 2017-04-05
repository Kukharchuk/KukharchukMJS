function scr(x) {
  return Math.pow(x, 4) - x;
}

var x = 1;

var i = setInterval(function(){
	scrollBy(0,scr(x));
	if(scrollY + innerHeight >= 15000){
		clearInterval(i);
	};
    x++;
},200);