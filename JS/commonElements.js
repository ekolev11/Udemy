function commonElements(arr1, arr2){
    let array1 = arr1;
    let array2 = arr2;
    let index1 = "";
    let index2
    for (i = 0; i < array1.length; i++){
        index1 = array1[i];
        for(k = 0; k < array2.length; k++){
            index2 = array2[k];
            if (index1 === index2){
                console.log(index1);
            }

        }

    }



}commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);