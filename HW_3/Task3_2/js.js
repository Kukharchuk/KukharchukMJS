
var names = ['Адам','Вадим','Евгений','Валерий','Егор','Роза','Александра','Вероника','Лариса','Роксана','Лидия','Светлана','Алиса','Виолетта','Лилия','Серафима','Алла','Галина','Любовь','Софья'];
var numfl = 15; 
var house = {
    resedents: [],
    flats: [],
    addResedents: function() {
        if(arguments.length == 0) {
            var name = prompt("Введите имя:");
            var flat = +prompt("Введите № квартиры:");
            if (flat > 0 && flat < 15) {
                this.resedents.push({ name: name, flat: flat })
                this.flats[flat - 1].resedents.push(name);
            }
            else alert("Такой квартиры нет! Введите квартиру от 1 до 15.")
        }
        else {
            this.resedents.push({ name: arguments[0], flat: arguments[1] });
            this.flats[arguments[1] - 1].resedents.push(arguments[0]);
        }
    },   
    showResedents: function() {
        var number = prompt("Вывксти список жильов квартиры №");
        if (number > 0 && number < 15) {
            document.write("Жилец(ы) квартиры № " + number + ": " + this.flats[number-1].resedents);           
        }
        else  alert("Такой квартиры нет! Введите квартиру от 1 до 15.")
    },
    cleanFlat: function() {
        var number = prompt("Очистить квартиру №");
        if (number > 0 && number < 15) {
            this.flats[number-1].resedents = null;
            
        }
        else alert("Нет такой квартиры!")
    }
/*	getCommunal: function(){
			var costofonesqmetr = 5;	
			for (var i = 0; i < flats.length; i++) {
				var costofflat = costofonesqmetr*house.flats[i].area;	
	            var house.resedents[i].communal = costofflat / house.resedents[i].length;
	        }
	}*/ //Не смогла рассчитать коммнульные платежи 
}

for (var i = 0; i < numfl; i++) {
    house.flats[i] = { number: i + 1,
                area: getRandom(15, 50),
                floor: getRandom(1,5),
                resedents: []
               }
}
for( i = 0; i < names.length; i++) {
    house.resedents[i] = {name: names[i],
                 flat: getRandom(1, numfl - 1)
                }
    house.flats[house.resedents[i].flat].resedents.push(names[i])
}

function getRandom(max, min){
	return Math.round(Math.random()*(max - min)+  min)
}



console.log(house);
//house.getCommunal();
house.addResedents();
house.cleanFlat();
house.showResedents();




/*var nfl = 15;
var house = {
    residents: [],
    flats: [],
    addPeople: function() {
    	if(arguments.length == 0) {
            var name = prompt("Введите имя");
            var flat = +prompt("Введите номер квартиры");
            if (flat > 0 && flat < 15) {
                this.resident.push({ name: name, flat: nfl })
                this.flats[nfl - 1].people.push(name);

            }
            else alert("Ops, mistake!")
        }
        else {
            this.residents.push({ name: arguments[0], nfl: arguments[1] });
            this.flats[arguments[1] - 1].residents.push(arguments[0]);
        }
    },
    listPeople: function() {
        var number = +prompt("Вывксти список жильов квартиры №");
        if (number > 0 && number < 15) {
            document.write(this.flats[number-1].resedents);
            
        }
        else alert("Ops, mistake!")
    },
    cleanFlat: function() {
        var number = +prompt("Очистить квартиру №");
        if (number > 0 && number < 100) {
            this.flats[number-1].resedents = null;         
        }
        else { alert("Неверный ввод")}
    }
}

function getRandom(max, min){
	return Math.round(Math.random()*(max - min)+  min)
}

for(var i = 0; i < nfl; i++) {
    house.flats[i] = { number: i + 1,
                area: getRandom(15, 50), 
                level: getRandom(1, 5),
                resedents: []
               }
}
for( i = 0; i < names.length; i++) {
    house.resedents[i] = {name: names[i],
                 flat: getRandom(1, nfl - 1)
                }
    house.flats[house.resedents[i].flat].resedents.push(names[i])
}//

console.log(house);

house.addPeople();
house.cleanFlat();
house.listPeople();*/