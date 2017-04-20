var test = [
{
			name:"Block_1",
			question:"За что Вас ценят Ваши друзья?",
			answer:["За то, что Вы преданный и верный друг.","Сильный и готов в трудную минуту постоять за друзей.","Эрудированный, интересный собеседник."],
			resalt:["2","1","3"]

},
{
			name:"Block_2",
			question:"На основе сравнительной самооценки выберите, какая характеристика Вам более всего подходит?",
			answer:["Целеустремленный.","Трудолюбивый.","Отзывчивый."],
			resalt:["3","2","1"]

},
{
			name:"Block_3",
			question:"Как Вы относитесь к идее ведения личного ежедневника, к планированию своей работы на год, месяц, ближайшую неделю, день?",
			answer:["Думаю, что чаще всего это пустая трата времени.","Я пытался это делать, но не регулярно.","Положительно, так как я давно это делаю."], 
			resalt:["1","2","3"]
},
{			name:"Block_4",
			question:"Что Вам больше всего мешает профессионально самосовершенствоваться, лучше учиться?",
			answer:["Нет достаточно времени.","Нет подходящей литературы и условий,","Не всегда хватает силы воли и настойчивости."], 
			resalt:["3","2","1"]
},
{
			name:"Block_5",
			question:"Каковы типичные причины Ваших ошибок и промахов?",
			answer:["Невнимательный.","Переоцениваю свои способности.","Точно не знаю."],
			resalt:["2","3","1"]
},
{
			name:"Block_6",
			question:"На основе сравнительной самооценки выберите, какая характеристика Вам более всего подходит?",
			answer:["Настойчивый.","Усидчивый.","Доброжелательный."], 
			resalt:["3","2","2"]
},
{
			name:"Block_7",
			question:"На основе сравнительной самооценки выберите, какая характеристика Вам более всего подходит?",
			answer:["Решительный.","Любознательный.","Справедливый."], 
			resalt:["2","3","1"]
},
{
			name:"Block_8",
			question:"На основе сравнительной самооценки выберите, какие качества у Вас развиты в большей степени?",
			answer:["Генератор идей.","Критик.","Организатор."], 
			resalt:["3","2","1"]
},
{
			name:"Block_9",
			question:"На основе сравнительной самооценки выберите, какие качества у Вас развиты в большей степени?",
			answer:["Сила воли.","Память.","Обязательность."], 
			resalt:["2","3","1"]
},
{
			name:"Block_10",
			question:"Что чаще всего Вы делаете, когда у Вас появляется свободное время?",
			answer:["Занимаюсь любимым делом, у меня есть хобби.","Читаю художественную литературу.","Провожу время с друзьями, либо в кругу семьи."], 
			resalt:["2","3","1"]
},
{
			name:"Block_11",
			question:"Что из ниже приведенных сфер для Вас в последнее время представляет познавательный интерес?",
			answer:["Научная фантастика.","Религия.","Психология."], 
			resalt:["1","2","3"]
},
{
			name:"Block_12",
			question:"Кем бы Вы могли себя максимально реализовать?",
			answer:["Спортсменом.","Ученым.","Художником."], 
			resalt:["1","3","2"]
},
{
			name:"Block_13",
			question:"Каким чаще всего считают или считали Вас учителя?",
			answer:["Трудолюбивым.","Сообразительным.","Дисциплинированным."],
			resalt:["1","3","2"]
},
{
			name:"Block_14",
			question:"Какой из трех принципов Вам ближе всего и которого Вы придерживаетесь чаще всего?",
			answer:["Живи и наслаждайся жизнью.","Жить, чтобы больше знать и уметь.","Жизнь прожить - не поле перейти."], 
			resalt:["3","2","1"]
},
{
			name:"Block_15",
			question:"Кто ближе всего к Вашему идеалу?",
			answer:["Человек здоровый, сильный духом.","Человек, много знающий и умеющий.","Человек независимый и уверенный в себе."], 
			resalt:["2","1","3"]
},
{
			name:"Block_16",
			question:"Удастся ли Вам в жизни добиться того, о чем Вы мечтаете?",
			answer:["Думаю, что да.","Скорее всего да.","Как повезет."], 
			resalt:["2","3","1"]
},
{
			name:"Block_17",
			question:"Какие фильмы Вам больше всего нравятся?",
			answer:["Приключенческие и романтические.","Комедийно-развлекательные.","Философские."], 
			resalt:["2","1","3"]
},
{
			name:"Block_18",
			question:"Представьте себе, что Вы заработали миллион. Куда бы Вы предпочли его истратить?",
			answer:["Путешествовал бы и посмотрел мир.","Поехал бы учиться за границу или вложил бы деньги в любимое дело.","Купил бы коттедж с бассейном, мебель, шикарную машину и жил бы в свое удовольствие."], 
			resalt:["2","1","3"]
}]

var results = [
{
 res_name: "очень низкий",
 marks: [18,19,20,21,22,23,24,25]
},
{
  res_name: "низкий",
  marks: [18,19,20,21,22,23,24,25]
 },
 {
 res_name: "ниже среднего",
 marks: [18,19,20,21,22,23,24,25]
},
{
 res_name: "чуть ниже среднего",
 marks: [26,27,28]
},
{
 res_name: "средний",
 marks: [19,30,31]
},
{
 res_name: "чуть выше среднего",
 marks: [32,33,34]
},
{
 res_name: "выше среднего",
 marks: [35,36,37]
},
{
 res_name: "высокий",
 marks: [38,39,40]
},
{
 res_name: "очень высокий",
 marks: [41,42,43]
}]

var body = document.getElementById("body");


for (var i = 0; i<test.length; i++) {
	var div_test = document.createElement("div");
	body.appendChild(div_test);
	div_test.classList.add("div_test");
	var div_test_question = document.createElement("div");
	div_test.appendChild(div_test_question);
	div_test_question.classList.add("div_test_question");
	div_test_question.innerHTML = test[i].question;
	var form = document.createElement("form");
	div_test.appendChild(form);

	for (var j = 0; j < test[i].answer.length; j++) {
		var div_answer_check = document.createElement("div");
		form.appendChild(div_answer_check);
		div_answer_check.classList.add("div_answer_check");
		var check_test_var = document.createElement("input");
		div_answer_check.appendChild(check_test_var);
		check_test_var.classList.add("answer_check");
		check_test_var.setAttribute("type", "radio");
		check_test_var.setAttribute("name", test[i].name);
		check_test_var.setAttribute("value", test[i].resalt[j])
		var p_text = document.createElement("p");
		div_answer_check.appendChild(p_text);
		p_text.classList.add("answer_check");
		p_text.innerHTML = test[i].answer[j];

	}
}


var answ = document.getElementById("btn");
var div_res = document.getElementById("res");

answ.addEventListener("click", function(){
	var res = 0;
	var correct = 0;
	var answers_result_text =[];
		for (var i = 0; i < test.length; i++){
			var answers = document.getElementsByName(test[i].name);
			for(var j = 0; j < answers.length; j++){
				if(answers[j].checked) {res+= +answers[j].value; answers_result_text+= test[i].answer[j]}
				else ++correct;
			}
	}
	if (correct >= 37) {alert("Заполнены не все поля!")}
	console.log(answers_result_text + " ");

	for (var i = 0; i < results.length; i++) {
		for (var j = 0; j < results[i].marks.length; j++) {
			if(res == results[i].marks[j]) {
				var div_result = document.createElement("div");
				div_res.appendChild(div_result);
				div_result.innerHTML = "Ваш результат " + results[i].res_name + ". Ваш балл:" + results[i].marks[j] + ". Это " + Math.floor(results[i].marks[j]*100/43) + "% oт максимального";
			}
		}
	}
});


// К сожалению, я только потом поняла, что мой тест должжен был быть с правильными ответми, а тот, который я нашла на просторах интернета,
// просто анализирующий, в котором нет неправильных :( Так что я не смогу вывести пользователю количество правильных :( 
//Но.. если бы могла, то я бы добавила в массив объектов ещё к каждому блоку строку "ключ" в которой бы поставила 1 на правильный ответ и два 0 на неправильные, 
//(пример: key:[0,1,0]) потом в цикле проверяла это поле массива, если там 1, то прибавляла бы балл, если ноль, то ничего. Как-то так :)