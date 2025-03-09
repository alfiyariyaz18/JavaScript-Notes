// Function Declaration

function intro(){
    console.log("My name is Alfiya Riyaz.\nI am 20 years young.\nI love coding.");
}

intro();

function foodProcessor(grapes, apples){
    const juice = `A juice with ${grapes} grapes and ${apples} apples`;
    return juice;
}

const mixedJuice = foodProcessor(3, 5);
console.log(mixedJuice);

function square(num){
    return num * num;
}

console.log(square(100));

function calcAge1(birthyear){
    const age = 2024 - birthyear;
    return `The age is ${age}.`;
}

const age1 = calcAge1(2004);
console.log(age1);


// Function Expression

const calcAge2 = function(birthyear){
    return `The age is ${2024 - birthyear}`;
}

const age2 = calcAge2(2000);
console.log(age2)


const square2 = function(num){
    return num * num;
}

console.log(square2(90));


// Arrow Function

const calcAge3 = birthyear => `The age is ${2024 - birthyear}`;
const age3 = calcAge3(2008);

console.log(age3);

const yearsUntilRetirement = birthyear =>{
    const age = 2024 - birthyear;
    const yearsLeft = 60 - age;
    return `${yearsLeft} years left for retirement`;
}

const retirement = yearsUntilRetirement(1983);
console.log(retirement);

const yearsUntilRetirement2 = (birthyear, firstName) =>{
    const age = 2024 - birthyear;
    return `${firstName} has ${60 - age} years left until retirement.`;
}

const retirement2 = yearsUntilRetirement2(1983, 'Rency');
console.log(retirement2);

const square3 = num => num * num;
console.log(square3(5));