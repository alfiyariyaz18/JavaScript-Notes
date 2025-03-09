const bmiCalculator = function(weight, height){
    const bmi = Math.floor(weight / (height ** 2));
    return `Your BMI is ${bmi}`;
}

const weight = prompt("Enter your weight");
const height = prompt("Enter your height");

const bmi = bmiCalculator(weight, height);
alert(bmi);