var N = Number(prompt("Введите число членов массива:", N));
var S = Number(prompt("Введите среднее значение для генерации рандомных чисел", S));
var p = Number(prompt("Введите процент отклонения", p));
var sum = 0;
var arr = [];

function getRandomArbitary(S, p)
	{
	  return Math.round(Math.random() * ((S + S*p/100) - (S - S*p/100)) + (S - S*p/100));
	}

for (var i = 0; i < N; i++) {
	arr[i] = getRandomArbitary(S,p);
	sum += arr[i];
}

function compare(a, b) {
  return a - b;
}

document.write("Array: " + arr + " \nAverage: " + Math.round(sum/N) + "\nSort: " + arr.sort(compare));