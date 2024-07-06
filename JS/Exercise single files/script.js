function isLeap(year){
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
        return "Leap";
    }
    if(year % 4 === 0 && year % 100 === 0){
        return "Not Leap";
    }
    if(year % 4 === 0){
        return "Leap";
    }else{
        return "Not Leap year."
    }
}
var yearType = isLeap(20)
console.log(yearType);

