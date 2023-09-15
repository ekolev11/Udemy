function fibo(n){
    var numOfNumbers = n;
    var array = [];
    var firstNum = 0;
    var secondNum = 1;
    var counterr = 0;
    var resultt = 0;

    while(counterr <= numOfNumbers){
        if (counterr < 1){
            array.push(firstNum);
            firstNum++
            console.log(array);
        }else if (counterr <= 2){
            array.push(firstNum)
            console.log(array);
        }else if (counterr > 2){
            resultt = firstNum + secondNum;
            array.push(resultt);
            console.log(array);
            firstNum = resultt;
            firstNum = secondNum;
            secondNum = resultt;
        }
            
        
       
        counterr++

    }
    

}fibo(7)