//Я не меняла название переменной audio на video, чтобы везде не попровалять, тут все равно такой же принцип

var audio = document.getElementsByTagName("video")[0];
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var stop = document.getElementById("stop");
var spon = document.getElementById("speed_more");
var spoff = document.getElementById("speed_less");
var speed = document.getElementById("speed");
var vol = document.getElementById("volume");
var vol_track = document.getElementById("vol_track");
var track = document.getElementById("track");
var track_now = document.getElementById("track_now");

var v = 1;

vol.addEventListener("click", function(){
	if (v){
	audio.volume = 0;
	vol.firstChild.setAttribute("src", "voloff.png");
	v--;
}
	else {
	audio.volume = 0.5;
	vol.firstChild.setAttribute("src", "vol.png");
	v++;
	}
})


var i = 1;
play.addEventListener("click", function(){
	if(i){
	audio.play();
	play.firstChild.setAttribute("src", "pause.png");
	i--;
}
   else {
   	audio.pause();
	play.firstChild.setAttribute("src", "play.png");
	i++;
   } 
})

stop.addEventListener("click", function(){
	audio.currentTime = 0;
	audio.pause();
	play.firstChild.setAttribute("src", "play.png");
	i++;
})

speed_more.addEventListener("click", function(){
	audio.playbackRate = audio.playbackRate*1.25;
	speed.innerHTML = audio.playbackRate;
})

speed_less.addEventListener("click", function(){
	audio.playbackRate = audio.playbackRate/1.25;
})

vol_track.addEventListener("change", function(){
	audio.volume = vol_track.value/10;
	if ( audio.volume == 0){
	vol.firstChild.setAttribute("src", "voloff.png");
	v--;
}
	else {
	vol.firstChild.setAttribute("src", "vol.png");
	v++;
	}

})
var time = document.getElementById("time");

function length(){
	return track.getBoundingClientRect().right - track.getBoundingClientRect().left
}


audio.addEventListener("loadedmetadata", function(){
 	audio.addEventListener("play", function(){
	setInterval(function() {
		time.innerHTML = audio.currentTime + "/" + audio.duration;
		var wdth = audio.currentTime/audio.duration*100;
		track_now.style.width = wdth + "%";
	})
	}, 1);

	track.addEventListener("click", function(e){
	var new_width = e.offsetX/length()*100;
	audio.currentTime = audio.duration*e.offsetX/length();
	track_now.style.width = new_width + "%";

})

})