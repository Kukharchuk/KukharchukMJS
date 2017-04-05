//CALCULATOR

var a,b,znak;
a = Number(prompt("Введите первое число", a));
b = Number(prompt("Введите второе число", b));
znak = prompt ("Введите знак", znak)

if ( a == NaN || b == NaN)
	alert ("Неверные данные")
else
	switch (znak) {
	  case "+":
	    alert( a + b );
	    break;
	  case "-":
	    alert( a - b );
	    break;
	  case "*":
	    alert( a * b );
	    break;
	  case "/":
	  	alert(a / b)
	  default:
	    alert( 'Такой операции нет!' );
}






























 /*var t,str = prompt("Введитие 1 число", t);

var sum = 0;
 while( str > 0 ) {
sum += str%10;
str = Math.floor(str/10)
 }

alert(sum);

var object = {
	name: "NADYA",
	age: 17,
	IQ: 10,
	description: "noname"
}

document.write(object.name.includes("A"));

var sum = 0, per = prompt("Введитие число элементов", per)

var arr = new Array(0);

for (var i = 0; i < per; i++) {
	arr.push(Math.round(Math.random() * 100))
};
 
document.writeln(arr + "end." + "Делятьс на 3:");

for (var i = 0; i < per; i++) {
	if(arr[i]%3 == 0){
	sum+= arr[i]*1;
	document.writeln(arr[i])
	}
}

document.writeln("sum = " + sum)

var e, x = 0.75;

var sum = 0,N = prompt("Введите число элементов", N);
var math = Math.sin(x);
document.writeln(math);

for (var i = 0; i < N; i++) {
	var fact = 1;
	for (var j = 1; j < (2*i+1); j++) {
		fact *= j; 
	}
	sum += (Math.pow(-1, i-1)*Math.pow(x, 2*i+1))/fact;
}

var n = 0;
document.writeln("Tejlor" + sum);



for (var i = 0; i < N; i++) {
	var fact = 1;
	for (var j = 1; j < (2*i+1); j++) {
		fact *= j; 
	}
	while(razn <= 10*(-6)){
	sum += (Math.pow(-1, i-1)*Math.pow(x, 2*i+1))/fact;
    razn = sum - math;
    n++;
}
}
 
document.write(n);

*/










