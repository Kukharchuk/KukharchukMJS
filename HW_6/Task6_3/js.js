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
    div.setAttribute("class","col s12 m7");

    var div_card = document.createElement("div");
    div.appendChild(div_card);
    div_card.setAttribute("class","card horizontal"); 

    var div_img = document.createElement("div");
    div_card.appendChild(div_img);
    div_img.setAttribute("class","card-image"); 

    var img  = document.createElement("img");
    div_img.appendChild(img);
    img.setAttribute("src", images[num]);
    img.setAttribute("class", "img");

    var div_card_stacked = document.createElement("div");
    div_card.appendChild(div_card_stacked);
    div_card_stacked.setAttribute("class","card-stacked"); 

    var div_card_content = document.createElement("div");
    div_card_stacked.appendChild(div_card_content);
    div_card_content.setAttribute("class","card-content");   

    var p = document.createElement("p");
    div_card_content.appendChild(p);
    p.innerText = names[random(6)] + " из г." + cities[random(6)] + " купил(а) " +(1 + random(20)) + " ед. товара " + goods[num];
    numGoods++;

    var div_card_action = document.createElement("div");
    div_card.appendChild(div_card_action);
    div_card_action.setAttribute("class","card-action");   

    var btn = document.createElement("input");
    div_card_action.appendChild(btn);
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "X");
    btn.addEventListener("click", function (){
        
        body.removeChild(div);

    });

    if (numGoods > 15) {
        clearInterval(I);
    }



}, Math.floor(Math.random()*(4500 + 1 - 2700) + 2700));

