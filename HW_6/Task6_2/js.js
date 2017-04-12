var shifr = document.getElementById("shifr");
var deshifr = document.getElementById("deshifr");
var btn_shifr = document.getElementById("btn_shifr");
var btn_deshifr = document.getElementById("btn_deshifr");

btn_shifr.addEventListener("click", function(){
    var mass = "";
    deshifr.value = "";
    var str = shifr.value;
    
    for (var i = 0; i < str.length; i++){
        var simv = str.charCodeAt(i);
        var new_simv = (127 - simv) +64;
        mass+= String.fromCharCode(new_simv);
   }
    deshifr.value = mass;
});

btn_deshifr.addEventListener("click", function(){
    var mass = "";
    shifr.value = "";
    var str = deshifr.value;
    
    for (var i = 0; i < str.length; i++){
        var simv = str.charCodeAt(i);
        var new_simv = (127 - simv) +64;
        mass+= String.fromCharCode(new_simv);
   }
    shifr.value = mass;
})