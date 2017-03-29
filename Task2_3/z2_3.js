var x = Number(prompt("Введите х",''));
var n = Number(prompt("Введите n", ''));

var arr = [];
var res = 0;

for(var i = 0; i <= n; i++){

	arr[i] = prompt("Введите а[" + i + "]");
	 = res + arr[i]*Math.pow(x, i);
	
}
document.write("Результат вычисления= " + res);