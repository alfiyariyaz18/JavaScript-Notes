const calcAge = function(birthYear){
    return 2024 - birthYear;
}

const ageAlfiya = calcAge(2004);
console.log(ageAlfiya);

const fruitProcessor = (apple, mango) =>{
    const juice = `A juice with ${apple} ${apple > 1 ? 'apples': 'apple'} and ${mango} ${mango > 1 ? 'mangoes': 'mango'}.`
    return juice;
}

console.log(fruitProcessor(1, 1));

const yearsUntilRetirement = (firstName, birthYear) =>{
    const age = 2024 - birthYear;
    const yearsLeft = 60 - age;
    return `${firstName} has ${yearsLeft} years left until retirement.`;
}

console.log(yearsUntilRetirement('Alfiya', 2004));