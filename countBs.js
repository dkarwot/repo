"use strict";
function countBs(string){
    var counter = 0;
        for(var i=0; i<string.length; i++){
            if (string[i] == "B") 
            counter += 1};
        return counter;
}
console.log(countBs("BBC"));