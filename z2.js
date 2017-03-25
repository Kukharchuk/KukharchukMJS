var str, counter = 0;
str = prompt('Введите текст', str);

function search(str) {
	for (var i = 0; i < str.lenght; i++) {
		
		if (str[i] == "(") {counter++};

		if (str[i] == ")") {counter--}
	}
	if (counter == 0) {alert("Все хорошо")} 
		else alert("Лишние скобки")
}

alert( search(str));