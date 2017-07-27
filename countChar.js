"use strict";
function countChar(string, letter){
    var counter = 0;
        for(var i=0; i<string.length; i++){
            if (string[i] == letter) 
            counter += 1};
        return counter;
}
console.log(countChar("amiga", "a"));