"use strict";
function range(start, end){
    let array = [];
    for(let i=start; i<=end; i++){
        array.push(i);
    };
    return array;
};
console.log(range(1, 10));
function sum(array){
    let sum2 = 0;
    let len = array.length;
    for(let i=0; i<len; i++){
        sum2 += array.shift();
    };
    return sum2;
};
console.log(sum(range(1, 10)));