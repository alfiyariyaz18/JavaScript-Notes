const friends = ['Anjaly', 'Kiran', 'Rohan', 'Aparna'];
console.log(friends);

// Another way of creating Arrays
const years = new Array(1979, 1983, 2004, 2008, 2011);
console.log(years);

// to log the first element of the friends array
console.log(friends[0]);
console.log(friends[2]);

// to log the number of elements in the array
console.log(friends.length);

// to log the last element of an array using the .length property
console.log(friends[friends.length - 1]);

// To replace existing element with new element
friends[0] = 'Aman';
console.log(friends);

// An array can different values with different types all at the same time
const firstName = 'Alfiya'
const alfiya = [
    firstName,
    'Riyaz',
    2024 - 2004,
    'Programmer',
    friends
];

console.log(alfiya);

const calcAge = birthYear => 2024 - birthYear;

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[years.length -1]);

console.log(age1, age2, age3, age4, age5);

const familyAges = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4])];
console.log(familyAges);

let agesFamily = [];

for(let i = years.length - 1; i >= 0; i--){
    agesFamily.push(calcAge(years[i])); 
}

console.log(agesFamily);


// Basic Array Methods
// -----------------------

const ateez = ['Honjoong', 'Seonghwa', 'Yunho', 'Yeosang'];

// push() to add a new element to the end of an array

console.log(ateez.push('San', 'Mingi')); 
console.log(ateez);

// unshift() to add a new element to the begining an array
console.log(ateez.unshift(8));
console.log(ateez);

// pop() to remove the last element of an array
console.log(ateez.pop());
console.log(ateez);

// shift() to remove the first element of an array
console.log(ateez.shift());
console.log(ateez);

const fruits = ['Apple', 'Orange', 'Mango', 'Grapes'];

// indexOf() to know the index value of an element in the array
console.log(fruits.indexOf('Mango'));

// includes() to check if an element is present in the array
console.log(ateez.includes('Yunho'));

if(fruits.includes('Orange')){
    console.log("Orange is present");
} else console.log("Orange is not present");



