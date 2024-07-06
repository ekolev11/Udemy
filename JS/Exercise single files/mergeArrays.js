function mergeArrays(arr1, arr2){
    let index1 = "";
    let index2 = "";
    var result = "";
    for (i = 0; i < arr1.length; i++){
        index1 = arr1[i];
        for(k = 0; k < arr2.length; k++){
            index2 = arr2[k];
            if(k % 2 == 0){
                if(result === ""){
                    result += Number(index1) + Number(index2);
                }
                else if(i + 1 == arr1.length){
                    result += Number(index1) + Number(index2);
                }else{
                    result += Number(index1) + Number(index2) + " - ";
                }
            }else if(k % 2 != 0){
                if(result === ""){
                    result += index1 + index2;
                }
                if(i + 1 == arr1.length){
                    result += index1 + index2;
                }else{
                    result += index1 + index2 + " - ";
                } 
            }

        }


    }console.log(result);


}mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])