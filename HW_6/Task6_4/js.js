var n1 = document.getElementById("1");
var n2 = document.getElementById("2");
var n3 = document.getElementById("3");
var n4 = document.getElementById("4");
var n5 = document.getElementById("5");
var n6 = document.getElementById("6");
var n7 = document.getElementById("7");
var n8 = document.getElementById("8");
var n9 = document.getElementById("9");
var n0 = document.getElementById("0");


var result = 0, first_number = 0, second_number = 0, operation = "", memory = 0;

n1.addEventListener("click", function(){
    field.value += "1";
});
n2.addEventListener("click", function(){
    field.value +=  "2";
});
n3.addEventListener("click", function(){
    field.value +=  "3";
});
n4.addEventListener("click", function(){
    field.value +=  "4";
});
n5.addEventListener("click", function(){
    field.value +=  "5";
});
n6.addEventListener("click", function(){   
    field.value +=  "6";
});
n7.addEventListener("click", function(){
    field.value +=  "7";
});
n8.addEventListener("click", function(){
    field.value +=  "8";
});
n9.addEventListener("click", function(){
    field.value +=  "9";
});
n0.addEventListener("click", function(){
    field.value +=  "0";
});


var field = document.getElementById("field");
var clear = document.getElementById("C");
var del = document.getElementById("del");
var mult = document.getElementById("mult");
var min = document.getElementById("minus");
var plus = document.getElementById("plus");
var equal = document.getElementById("equal");

clear.addEventListener("click", function(){
    field.value = "";
    first_number = 0;
    second_number = 0;
});

plus.addEventListener("click", function(){
    first_number = Number(field.value);
    operation = "+";
    field.value = ""
});
minus.addEventListener("click", function(){
    first_number = Number(field.value);
    operation = "-";
    field.value = ""
});
del.addEventListener("click", function(){
    first_number = Number(field.value);
    operation = "/";
        field.value = ""
});
mult.addEventListener("click", function(){
    first_number = Number(field.value);
    operation = "*";
    field.value = ""
});
equal.addEventListener("click", function(){
    second_number = Number(field.value);
    field.value = "";
    switch(operation) {
        case "+": 
            field.value = first_number + second_number;
            break;
        case "-": 
            field.value = first_number - second_number;
            break;
        case "*": 
            field.value = first_number * second_number;
            break;
        case "/": 
            field.value = first_number / second_number;
            break;
    }
    operation="";

});



var MR = document.getElementById("MR");
var M_plus = document.getElementById("M_plus");
var M_minus = document.getElementById("M_minus");
var MC = document.getElementById("MC");


M_plus.addEventListener("click", function(){
    memory+=Number(field.value);
});
M_minus.addEventListener("click", function(){
    memory-=Number(field.value);
});
MC.addEventListener("click", function(){
    memory = 0;
});
MR.addEventListener("click", function(){
    field.value = memory;
});