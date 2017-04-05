function getSeconds(){
	var date = new Date();
	return document.write("До конца этого дня " + (23 - date.getHours() ) + " часов, " + (60 - date.getMinutes()) + " минут, " + (60 - date.getSeconds()) + " секунд." ) 
} 
getSeconds();
