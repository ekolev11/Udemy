function bmiCalc(weight, height){
    var result = weight / (height * height);
    return Math.round(result);
}
var bmi = bmiCalc(65, 1.8)
console.log(bmi); 