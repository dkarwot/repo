"use strict";
function countChar(string, letter){
    let counter = 0;
        for(let i=0; i<string.length; i++){
            if (string[i] == letter) 
            counter += 1};
        return counter;
}
console.log(countChar("amiga", "a"));