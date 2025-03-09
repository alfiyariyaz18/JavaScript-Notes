// Template literals
const firstName  = 'Alfiya';
const birthYear = 2004;
const job = 'Developer';
const presentYear = '2024';

const alfiya = "I'm " + firstName + " a " + (presentYear - birthYear) + " years old " + job;
console.log(alfiya); 

const alfiya2 = `I'm ${firstName} a ${presentYear - birthYear} years old ${job}.`;
console.log(alfiya2);

console.log("kdnfjefn\nshbdhwefkw\nhwdghwj\ndccc");

// Function Declaration VS Function Expression
console.log(calcAge(2011));
// console.log(calcAge2(2011));

function calcAge(birthYear){
    const age = 2024 - birthYear;
    return age;
}

const ageAlfiya = calcAge(2004);
console.log(ageAlfiya);

const calcAge2 = function(birthYear){
    return 2024 - birthYear;
}

const ageAfrin = calcAge2(2008);
console.log(ageAfrin);