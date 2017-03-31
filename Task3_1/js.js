var names = ['Адам','Вадим','Евгений','Никита','Валентин','Евдоким','Николай','Александр','Валерий','Егор','Роза','Александра','Вероника','Лариса','Роксана','Алина','Виктория','Лидия','Светлана','Алиса','Виолетта','Лилия','Серафима','Алла','Галина','Любовь','Софья']
var cites = ['Аахен','Абу-Даби','Агадир','Агиос-Николаос','Аделаида','Аджман','Айя-Напа','Барселона','Бейрут','Белград','Белек','Белосток','Белфаст','Бенидорм','Берген','Берлин','Берн']

var people = [];

function getRandom(max, min){
	return Math.round(Math.random()*(max - min)+  min)
}

for (var i = 0; i < names.length; i++) {
	people[i] = {
		age: getRandom(1, 100),
		city: cites[getRandom(0, cites.length - 1)]
	}
}


function Name () {
	for (var i = 0; i < names.length; i++) {
		people[i].name = names[getRandom(0, names.length - 1)]
	}
}
Name();

function compareNumeric(a, b) {
  return a.age-b.age;
}

for (var i = 0; i < names.length; i++){
  people[i].name = names[i];
}


console.log(people.sort(compareNumeric))
for (var i = 0; i < people.length; i++){
document.writeln("\n| " + people[i].name + " ,  " + people[i].city + " ," + people[i].age + " |")
}