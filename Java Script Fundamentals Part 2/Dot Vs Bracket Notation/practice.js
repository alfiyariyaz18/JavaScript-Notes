const alfiya = {
    firstName: 'Alfiya',
    lastName: 'Riyaz',
    age: 2024 -2004,
    job: 'Programmer',
    friends: ['Mike', 'Steve', 'John', 'Harry']
};

console.log(alfiya);

// Retrieving a property from object using dot notation
// to get the last name
console.log(alfiya.lastName);

// Retrieving a property from object using bracket notation
// To get the last name
console.log(alfiya['lastName']);

// In bracket notation we can put any expression inside the brackets
const nameKey = "Name";
console.log(alfiya['first' + nameKey]);
console.log(alfiya['last' + nameKey]);

// retrieving elements using prompt function
const interestedIn = prompt("What do you want to know about alfiya? Choose between firstName, lastName, age, job and friends.");
console.log(alfiya[interestedIn]);
// if we enter something that is not a property of alfiya it will give undefined.

if (alfiya[interestedIn])console.log(alfiya[interestedIn]);
else console.log('Wrong request');


// Adding new property to object using dot notation and bracket notation
alfiya.location = 'India';
alfiya['Instagram'] = 'alfiya_riyaz';
console.log(alfiya);

const sentence = `${alfiya.firstName} has ${alfiya.friends.length} friends and her best friend is called ${alfiya.friends[0]}.`;
console.log(sentence);





