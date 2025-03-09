function bmiCalculator(weight, height){
    let bmi = weight / (height * height);
    bmi = Math.round(bmi);

    if(bmi < 18.5){
        return `Your BMI is ${bmi}, so you are underweight`;
    }

    else if (bmi >= 18.5 && bmi <= 24.9){
        return `Your BMI is ${bmi}, so you have a normal weight`;
    }

    else{
        return `Your BMI is ${bmi}, so you are overweight`;
    }
}

const bmi = bmiCalculator(52, 1.61);
console.log(bmi);

