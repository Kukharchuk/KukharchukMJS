var menu = document.getElementById("masthead-nav");
var xhr = new XMLHttpRequest();
var site_wrapper = document.getElementById("site-wrapper");
var body = document.querySelector("body");
var buscket_count = document.getElementById('basket_curr')
if(localStorage.counter != undefined){ buscket_count.innerText = localStorage.counter; }
xhr.open("GET", "./src/categories.json", true);



var takeList = function(categories) {
    
    var openItemsPage = function(path) {
        console.log(path);
        var newxhr = new XMLHttpRequest(); 
        newxhr.open("GET", path, true); 
        newxhr.onload = function(){ 

             var items = JSON.parse(newxhr.responseText);
             creatingItemsList(items);

        }  
        newxhr.send(); 
    }
    
    var route = function(){ 
        var hash = location.hash; 
        var path = null; 
        for (var h in categories) { 
            if (categories[h].hash == hash) { 
                path = categories[h].url; 
            } 
        } 
        
        if(path != null){ 
            openItemsPage(path); 
        } 
    }
    
    window.onhashchange = route; 
    route();
}

xhr.onload = function() {
   openPage();
}
xhr.send();

var openPage = function(){
    var categories = JSON.parse(xhr.responseText);
    
    for (var i in categories) {
        
        var menuItemLi = document.createElement("li");
        menu.appendChild(menuItemLi);
        var menuItemA = document.createElement("a");
        menuItemLi.appendChild(menuItemA);
        menuItemA.setAttribute("href", categories[i].hash);
        menuItemA.innerText = categories[i].name; 
    }
    takeList(categories);
}

var creatingItemsList = function(items){

    site_wrapper.classList.remove("site-wrapper"); 
    site_wrapper.innerHTML =""; 
    var container = document.createElement("div"); 
    site_wrapper.appendChild(container); 
    container.classList.add("container");
    
    var row = document.createElement("div");
    site_wrapper.appendChild(row);
    row.classList.add("row");
    for ( var i in items) {

        var divItem = document.createElement("div");
        row.appendChild(divItem);
        divItem.classList.add("col-sm-3");
        divItem.classList.add("col-md-3");

        var thumbnail = document.createElement("div");
        divItem.appendChild(thumbnail);
        thumbnail.classList.add("thumbnail");

        var itemImg = document.createElement("img");
        thumbnail.appendChild(itemImg);
        itemImg.setAttribute("src", items[i].img);

        var caption = document.createElement("div");
        thumbnail.appendChild(caption);
        caption.classList.add("caption");

        var priceText = document.createElement("h3");
        caption.appendChild(priceText);
        priceText.innerText = "US$"+items[i].price;

        var itemName = document.createElement("p");
        caption.appendChild(itemName);
        itemName.innerText = items[i].name;

        var btngroup = document.createElement("p");
        thumbnail.appendChild(btngroup);
        var addToBag = document.createElement("button");
        var seeDescription = document.createElement("button");
        btngroup.appendChild(addToBag);
        btngroup.appendChild(seeDescription);
        addToBag.classList.add("btn");
        seeDescription.classList.add("btn");
        addToBag.classList.add("btn-warning");
        addToBag.innerText = "To basket";
        seeDescription.innerText = "Description";
        seeDescription.setAttribute("id", items[i].id);
        
        
        seeDescription.addEventListener("click", function() {
            var descriptionWrap = document.createElement("div");
            body.appendChild(descriptionWrap);
            descriptionWrap.classList.add("descriptionWrap");
            
            var descriptionInner = document.createElement("div");
            descriptionWrap.appendChild(descriptionInner);
            descriptionInner.classList.add("descriptionInner");
            
            var id = this["id"];
            for (var h in items) {
                if(id == items[h].id) {
                    descriptionInner.innerHTML = "<div class='row'><div class='col-sm-6'><img src = " + items[h].img + " class='descriptionIMG'> " + "<div class='underimg'> <h4> Available: </h4> " + items[h].quantity + " pieces <h4> Tags: </h4> " + items[h].tags + "</div></div><div class='col-sm-6'><div class = 'descriptionText'> <h3> US$" + items[h].price + " </h3> " + " <h4> " + items[h].name + " </h4> " + "<p>" + items[h].description + "</p> </div></div></div>";
                }
            }
            
            descriptionWrap.style.display="block";
            descriptionWrap.addEventListener("click", function(e){
                descriptionWrap.style.display="none";
            })
            
            descriptionInner.addEventListener("click", function(e){
                e.stopPropagation();
            })
        })  

        addToBag.addEventListener("click", function(){

            var idGood = this.nextSibling["id"];
         //   var quantity = items[idGood].quantity;
            if(localStorage.counter == undefined)
            {

              //  var busket = [];
             //   busket[count] = idGood;
                localStorage.setItem("counter", 1);
                localStorage.setItem("idGood", idGood);
                buscket_count.innerText = 1;
                
            }
            else 
            {

                var count = +localStorage.counter;
                ++count;
             //   busket[count] = idGood;
                localStorage.setItem("counter", count);
                localStorage.setItem("idGood", idGood);
                console.log(localStorage.idGood);
                buscket_count.innerText = count;
            }
        })

    }
}

