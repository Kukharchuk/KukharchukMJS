/*Не все работает хорошо, при перемешивании, новая песня вкоючается по старому списку.
 И ешё есть бак, когда включаешь первый раз перую аудиозапись, дорожка просмотра не двигается, пока не успела решить это*/


	var div = document.getElementById("main");
	var ul = document.getElementById("list_songs");
	var title = document.getElementsByTagName("title")[0];
	var audio = document.getElementsByTagName("audio")[0];
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
	var page_title = document.getElementsByTagName("title")[0];
	var time = document.getElementById("time");
	var song_n = document.getElementById("song_name");
	var mix = document.getElementById("mix");
	var t = 0;

function shuffle(numPool) {
    for(var j, x, i = numPool.length; i; j = parseInt(Math.random() * i), x = numPool[--i], numPool[i] = numPool[j], numPool[j] = x);
	return numPool;
};


function randoms(songs){
	var mixed = {};
	var numPool = [ 0, 1, 2, 3 ];

	var randomResult = shuffle(numPool);

	var list = document.getElementsByTagName("li");
	for( var i = 0; i < songs.length; i++){

		var st = randomResult[i];
		list[i].innerHTML = songs[st].song_name + " " + songs[st].singer + " ";
		var btn = document.createElement("button");
		list[i].appendChild(btn);
		list[i].setAttribute("value", st);
		btn.innerHTML = "►";
		btn.setAttribute("type", "button");
		btn.addEventListener("click", function(){
			var k = this.parentNode.value;
			audio.setAttribute("src", songs[k].url)
			play_song(songs, k, songs.length);
		    play.firstChild.setAttribute("src", "pause.png");
		})
	}

}



function play_song(songs, k, len){


	title.innerHTML = songs[k].song_name;
	song_n.innerHTML = songs[k].song_name;
	var i = 0;
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



	play.addEventListener("click", function(){
		if(i){
		audio.play();
		play.firstChild.setAttribute("src", "pause.png");
	//	page_title.innerHTML = songs[n].song_name + songs[n].singer;
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


	function length(){
		return track.getBoundingClientRect().right - track.getBoundingClientRect().left
	}

	audio.addEventListener("loadedmetadata", function(){
		
		audio.addEventListener("play", function(){
		setInterval(function() {
			time.innerHTML = (audio.currentTime/60).toFixed(2) + "/" + (audio.duration/60).toFixed(2);
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

	audio.play();

	audio.addEventListener("ended", function(){
		if(k == len-1){
			audio.setAttribute("src", songs[0].url)
			play_song(songs, 0, len);
		}
		else {
			audio.setAttribute("src", songs[k + 1].url)
			play_song(songs, k+1, len);
		}
	})

}
	

var xhr = new XMLHttpRequest();
xhr.open("GET", 'songs.json', true);

xhr.onload = function(){
	console.log(xhr.responseText);
	var songs = JSON.parse(xhr.responseText);
	for(var n = 0; n < songs.length; n++){
		var len = songs.length;
		var li = document.createElement("li");
		ul.appendChild(li);
		li.innerHTML = songs[n].song_name + " " + songs[n].singer + " ";
		var btn = document.createElement("button");
		li.appendChild(btn);
		li.setAttribute("value", n);
		btn.innerHTML = "►";
		btn.setAttribute("type", "button")

		btn.addEventListener("click", function(){
			var k = this.parentNode.value;
			audio.setAttribute("src", songs[k].url)
			play_song(songs, k, len);
		    play.firstChild.setAttribute("src", "pause.png");
		})

		mix.addEventListener("click", function(){
			randoms(songs);
		})
	}
};

xhr.send();