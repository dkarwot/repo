/*var line = 1;
//var char = 1;
for(i=0; i<8; i++) {
    if(line % 2 == 0) {
        console.log(" # # # #");
    }
    else (console.log("# # # # "));
    line+=1;
}*/
//wrócić do tego później
var counter = 0;
var size = 8;
for(j=0; j<size; j++) {
    if(counter%2 == 0) {
        console.log(" ")
    }
    else (console.log("#"));
    counter+=1;
}