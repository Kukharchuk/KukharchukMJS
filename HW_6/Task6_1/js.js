var COMMENT = 0;
var TEXT = 0;
var ELEMENT = 0;

/*for (var i = 0; i < document.childNodes.length; i++) {
      alert( document.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
    }*/

function derevo(dom){
    dom.childNodes.forEach(function(e){
        console.log(e);
        (e.nodeType == document.ELEMENT_NODE)?(ELEMENT++):(e.nodeType == document.TEXT_NODE)?(TEXT++):(COMMENT++);
        if(e.nodeType == 1 && e.childNodes.length != []) {
            derevo(e);
        }
    })}
derevo(document);
console.log("Комментариев " + COMMENT);
console.log("Тегов " + ELEMENT);
console.log("Текстовых узлов " + TEXT);
