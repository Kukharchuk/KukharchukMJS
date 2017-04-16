var str = prompt("Введите ваш номер телефона: ")
 
var r = /(\+[3][7][5])[\s(]{0,2}([1-9][0-9])[\s)]{0,2}([1-9][0-9]{2})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})/;
if (r.test(str) == true){
    var tel = r.exec(str);
    document.write("Ваш номер телефона: ")
    for (var i = 1; i < tel.length - 1; i++)
    	document.write(tel[i])
}
else alert("Некоректные данные")




