var x = +prompt("Введите х",'');
var n = +prompt("Введите n", '');

var arr = [];
var sum = 0;

for(var i = 0; i <= n; i++){

	arr[i] = prompt("Введите а[" + i + "]");
	sum+= arr[i]*Math.pow(x, i);
}
document.write("Сумма полинома равна = " + sum);