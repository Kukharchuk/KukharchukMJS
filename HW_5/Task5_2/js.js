var countries = [];
countries[0] = {
	name: "Сирия",
	flag: "img/14.png",
	population: 17780044,
	code: "+963"
};
countries[1] = {
	name: "Австрия",
	flag: "img/2.png",
	population: 8662588,
	code: "+43"
};
countries[2] = {
	name: "Грузия",
	flag: "img/15.png",
	population: 3729500,
	code: "+995"
};
countries[3] = {
	name: "Греция",
	flag: "img/6.png",
	population: 10955000,
	code: "+30"
};
countries[4] = {
	name: "Норвегия",
	flag: "img/11.png",
	population: 800,
	code: "+379"
};
countries[5] = {
	name: "Перу",
	flag: "img/12.png",
	population: 3220570,
	code: "+51"
};
countries[6] = {
	name: "Албания",
	flag: "img/1.png",
	population: 3038594,
	code: "+355"
};
countries[7] = {
	name: "Германия",
	flag: "img/5.png",
	population: 82175684,
	code: "+49"
};
countries[8] = {
	name: "Сан-Марино",
	flag: "img/13.png",
	population: 33029,
	code: "+378 0549"
};
countries[9] = {
	name: "Бразилия",
	flag: "img/3.png",
	population: 205737996,
	code: "+25"
};
countries[10] = {
	name: "Дания",
	flag: "img/4.png",
	population: 5693085 ,
	code: "+45"
};
countries[11] = {
	name: "Исландия",
	flag: "img/8.png",
	population: 321857,
	code: "+354"
};

    var table = document.createElement("table");
	var cont = document.getElementById("table"); 
	cont.appendChild(table);  
	
	var main = document.createElement("main"); 
	cont.appendChild(main); 

for(var i = 0; i <= 11; i++)
{ 
		var tr = document.createElement("tr"); 
		var td = document.createElement("td"); 
		tr.appendChild(td); 
		var img = document.createElement("img"); 
		td.appendChild(img); 
		img.setAttribute("src",countries[i].flag); 
		img.setAttribute("width","70px"); 
		main.appendChild(tr); 
		var td = document.createElement("td"); 
		td.innerHTML = countries[i].name; 
		tr.appendChild(td); 
		var td = document.createElement("td"); 
		td.innerHTML = countries[i].population; 
		tr.appendChild(td); 
		var td = document.createElement("td"); 
		td.innerHTML = countries[i].code; 
		tr.appendChild(td);  

	}