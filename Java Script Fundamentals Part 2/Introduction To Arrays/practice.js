const friend1 = 'Joey';
const friend2 = 'Monica';
const friend3 = 'Ross';
const friend4 = 'Phoebe';
const friend5 = 'Chandler';
const friend6 = 'Rachel';

const friends = ['Joey', 'Monica', 'Ross', 'Phoebe', 'Chandler', 'Rachel'];
console.log(friends);

const years = new Array(1979, 1983, 2004, 2008, 2011);

// To log the first element of the friends Array
console.log(friends[0]);

// log Ross from the friends Array
console.log(friends[2]);

// to find the length of an array
console.log(friends.length);   //  6

// retrieve last element using .length property
console.log(friends[friends.length - 1]);

// replace existing element with new element
years[years.length - 1] = 2012;
console.log(years);


// New array (Changing an entire array declared using let)
let fruits = ['Apple', 'Mango', 'Orange', 'Papaya'];
console.log(fruits);

fruits = ['Water Melon', 'Banana', 'Kiwi',];
console.log(fruits);


// Array with all informations about me
const alfiya = ['Alfiya', 'Riyaz', 2024 - 2004, 'Programmar', 'Ateez', friends];
console.log(alfiya);

// Old calcAge function
const calcAge = function(birthYear){
    return 2024 - birthYear;
}

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);