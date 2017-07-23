var fs = require("fs");
var proces = process.argv;
var buf = fs.readFileSync(proces[2]);
var str = buf.toString();
var counter = -1;
var splitted = str.split("\n");
for (i=0; i<splitted.length; i++){
    counter = counter + 1;
}
console.log(counter);