function fibonacci(n){
    var numbers = n;
    var lastNum = 0;
    var firstN = 1;
    var secondN = 1;
    var result = 0;
    var counter = 1;
    var output = [];
    while(counter <= numbers){
        if(counter < 2){
            output.push(0);
        }else if(counter <= 3){
            output.push(1);
        }else if(counter > 3){
            result = firstN + secondN;
            secondN = firstN;
            output.push(result);
            firstN = result;
        }

        counter++
        console.log(output);
    }
}fibonacci(11)