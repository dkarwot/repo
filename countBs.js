function countBs(string){
    var counter = 0;
        for(i=0; i<string.lenght; i++){
            if (string.charAt(i) == "B") 
            counter += 1;}
        return counter;
}
console.log(countBs("BBB"));