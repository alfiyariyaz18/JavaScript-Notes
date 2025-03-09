function logger(){
    console.log("My name is Alfiya Riyaz");
}

logger();
logger();

// Fruit Processor
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `A juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);



// const num = Number('23');
// console.log(num);
// console.log('23');

// calculate age (Function declaration)
function calcAge(birthYear){
    const age = 2024 - birthYear;
    return age;
}

const age1 = calcAge(2004);
console.log(age1);


// calculate age (Function Expression)
const calcAge2 = function(birthYear){
    const age = 2024 - birthYear;
    return age;
}

const age2 = calcAge2(2006)
console.log(age2);


// Arrow Function
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(2004);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2024 - birthYear;
    const retirement = 60 - age;
    return `${firstName} will retire in ${retirement} years.`;
}

const retirement = yearsUntilRetirement(2004, 'Alfiya');
console.log(retirement);



// Function calling other function
const fruitCutter = fruit => `${fruit * 4} pieces`;

const fruitProcessor2 = function(apples, oranges){
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);

    return `A juice with ${applePieces} of apple and ${orangePieces} of Orange`;
}

const appleOrangeJuice = fruitProcessor2(2, 1);
console.log(appleOrangeJuice);


// Reviewing Function

const calcAgeNew = birthYear => 2024 - birthYear;

const yearsUntilRetirement2 = function(birthYear, firstName){
    const age = calcAgeNew(birthYear);
    const retirement = 60 - age;
    return `${firstName} has ${retirement} years left until retirement.`;
}

const retirement2 = yearsUntilRetirement2(2004, 'Alfiya');
const retirement3 = yearsUntilRetirement2(1962, 'Mike');
console.log(retirement2);
console.log(retirement3);

const yearsUntilRetirement3 = function(birthYear, firstName){
    const age = calcAgeNew(birthYear);
    const retirement = 60 - age;

    if(retirement > 0) return retirement;
    else return -1;
}

console.log(yearsUntilRetirement3(2000, 'Mike'));