function random(number) {
    return Math.floor(Math.random()*100%number);
}

var names = ["Мария", "Валерия", "Виктор", "Надежда", "Анастасия", "Николай"];
var cities = ["Минск", "Гродно", "Гомель", "Витебск", "Могилев", "Брест"];
var goods = ['Книга "Цветы для Элджерона"', 'Банка для сыпучих продуктов стеклянная (1,55 л)', 'Сковорода "Мишка"', 'Карта памяти micro SDHC 16Gb', 'Антистресс раскраска "Вторжение дудлов"', 'Книга "Чистый код"']
var images = ["img/1.jpg", "img/5.jpg", "img/6.jpg", "img/4.jpg", "img/3.jpg", "img/2.jpg"]


var body = document.getElementById("body");
var num = 0, numGoods = 1;
var I = setInterval(function(){
    num = random(6);
    var div = document.createElement("div");
    body.appendChild(div);
    div.setAttribute("class","cl"); 
    var img  = document.createElement("img");
    div.appendChild(img);
    img.setAttribute("src", images[num]);
    img.setAttribute("class","img"); 
    var p = document.createElement("p");
    div.appendChild(p);
    p.innerText = names[random(6)] + " из г." + cities[random(6)] + " купил(а) " + random(20) + 1 + " ед. товара " + goods[num];
    numGoods++;
    if (numGoods > 15) {
        clearInterval(I);
    }
}, Math.floor(Math.random()*(4500 + 1 - 2700) + 2700));