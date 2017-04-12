var COMMENT = 0;
var TEXT = 0;
var ELEMENT = 0;

/*for (var i = 0; i < document.childNodes.length; i++) {
      alert( document.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
    }*/

function derevo(dom){
    dom.childNodes.forEach(function(e){
        console.log(e);
        (e.nodeType == 1)?(ELEMENT++):(e.nodeType == 3)?(TEXT++):(COMMENT++);
        if(e.nodeType == 1 && e.childNodes != []) {
            derevo(e);
        }
    })}
derevo(document);
console.log("Комментариев " + COMMENT);
console.log("Тегов " + ELEMENT);
console.log("Текстовых узлов " + TEXT);
