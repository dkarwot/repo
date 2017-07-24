for (var i=1; i<100; i++){
    if ((i % 3 == 0 ) && (i % 5 == 0)){
        console.log ("FizzBuzz");
        i+=1;
    }
    if (i % 3 == 0) {
        console.log("Fizz");
        i+=1;
    }
    if (i % 5 == 0) {
            console.log("Buzz");
            i+=1;
    }
//    i=i+1;
    console.log(i);
}