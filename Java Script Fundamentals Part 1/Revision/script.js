lastName = 'Riyaz';
console.log(lastName);

if(typeof(lastName) === 'string'){
    // alert("Yes");
}

const ageAlfiya = 2024 - 2004;
console.log(ageAlfiya);
console.log(ageAlfiya, 'Amazing', 2004);


let x = 10, y = 20;
const a = 15, b = 5, c = 20;


console.log(x, y);
console.log(a, b, c);

const ageX = 20;
const ageY = 25;

const average = (ageX + ageY) / 2;
console.log(average);

const firstName = 'Alfiya';
const birthYear = 2004;
const job = 'Developer';
const presentYear = 2024;

const alfiya = "I am " + firstName + " a " + (presentYear - birthYear) + " years old " + job;
console.log(alfiya);

const alfiyaNew = `I am ${firstName} a ${presentYear - birthYear} years old ${job}`;
console.log(alfiyaNew);

// Multiline string before ES6
console.log("Multi\nLine\nString");

// Multiline string after ES6
console.log(`Multi
line
string`);


// if else
const age = 15;
const fullAge = age >= 18;

if(fullAge){
    console.log("You can start driving");
}
else{
    console.log(`You are too young to start driving. you have ${18 - age} years left to start driving`);
}

const birthYearNew = 2004;
let century;

if(birthYear <= 2000){
    century = 20;
}

else{
    century = 21;
}

console.log(century);


// Type conversion
const inputYear = '2004';
console.log(inputYear + 18);

console.log(Number(inputYear) + 18);
console.log(Number('Alfiya'));
console.log(typeof(NaN));  // number   // but an invalid number

console.log(String(5), 7);

// Type coercion
console.log("I am " + 20 + " years old");  // 20 here is automatically converted to string
console.log(`${5} is my favorite number`);

// + operator between string s and numbers will convert all numbers to string and do concatenation
// - operator between strings and numbers will convert strings to numbers and do the math.

console.log('23' + '10' + 3);
console.log('23' - '10' - 3);

console.log('5' * '3');
console.log('10' / 2);
console.log(100 / '2');

let myName = 'Alfiya';
console.log(myName.length);

let tweet = prompt("Entre your tweet");
let tweetCount = tweet.length;
let limit = 140 - tweetCount;

alert(`You have written ${tweetCount} characters, you have ${limit} characters left`);