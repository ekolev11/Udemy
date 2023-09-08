function test(arr){
    
    let sumofNumbers = 0;
    let sumOriginalArr = 0;
    let newlyModified = [];
    for (i = 0;i < arr.length; i++){
        let index = arr[i];
        sumOriginalArr += index;
        if(index % 2 === 0){
            index += i;
            newlyModified.push(index);
            sumofNumbers += Number(index);
        }else if(index % 2 != 0){
            index -= i;
            newlyModified.push(index);
            sumofNumbers += Number(index);
        }
    }
    console.log(newlyModified);
    console.log(sumOriginalArr);
    console.log(sumofNumbers);


}test([5, 15, 23, 56, 35]);