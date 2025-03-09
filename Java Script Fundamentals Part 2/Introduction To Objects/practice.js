// Array
const alfiya = [
    'Alfiya', 
    'Riyaz', 
    2024 - 2004, 
    'programmer', 
    ['Anjaly', 'Aparna', 'Kiran', 'Rohan']
];

// Object
// const alfiya2 = {
//     firstName: 'Alfiya',
//     lastName: 'Riyaz',
//     age: 2024 - 2004,
//     job: 'programmer',
//     friends: ['Anjaly', 'Aparna', 'Kiran', 'Rohan']
// };


// Dot vs Bracket notation

const alfiya2 = {
    firstName: 'Alfiya',
    lastName: 'Riyaz',
    age: 2024 - 2004,
    job: 'programmer',
    friends: ['Anjaly', 'Aparna', 'Kiran', 'Rohan']
};

console.log(alfiya2);

// Dot
console.log(alfiya2.lastName);
const alfiyaAge = alfiya2.age;
console.log(alfiyaAge);
console.log(alfiya2.job);
const alfiyaFriends = alfiya2.friends;
console.log(alfiyaFriends);

alfiya2.fav = 'Ateez';
console.log(alfiya2);

// Bracket
console.log(alfiya2['job']);
alfiya2['instagram'] = '@alfiya_riyaz';
console.log(alfiya2);
console.log(alfiya2['instagram']);

const nameKey = 'Name';
console.log(alfiya2['first' + nameKey], alfiya2['last' + nameKey]); 

// using template literal (not necessary)
console.log(alfiya2[`first${nameKey}`], alfiya2[`last${nameKey}`]);

// const interestedIn = prompt("Enter your Interest");
// console.log(alfiya2[interestedIn]);
// console.log(alfiya2.interestedIn);  // undefined

// console.log(alfiya2['location']);

// if(alfiya2[interestedIn]){
//     console.log(alfiya2[interestedIn]);
// }
// else{
//     console.log('wrong request');
// }

// Adding new elements into the object
alfiya2.location = 'India';
alfiya2['Hobby'] = 'Crafts';
console.log(alfiya2);

// Challenge
const challenge = `${alfiya2.firstName} has ${alfiya2['friends'].length} friends and her best friend is called ${alfiya2.friends[0]}`
console.log(challenge);