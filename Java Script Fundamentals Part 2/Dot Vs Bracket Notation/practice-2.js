const alfiya = {
    firstName: 'Alfiya',
    lastName: 'Riyaz',
    age: 2024 - 2004,
    job: 'Programmer',
    friends: {
        bestFriend: 'mike',
        casulaFriend: 'Jay',
        childhoodFriend: 'Sam'
    }
}

console.log(alfiya);

console.log(alfiya.age);
console.log(alfiya.firstName);

console.log(alfiya['job']);
console.log(alfiya['age']);

const nameKey = 'Name';
console.log(alfiya['last' + nameKey]);
console.log(alfiya[`first${nameKey}`]);

// const interestedIn = prompt("What do you want to know about alfiya, choose between firstName, lastName, age, job and friends.");

// if(alfiya[interestedIn]){
//     console.log(alfiya[interestedIn]);
// }
// else{
//     console.log('wrong request');
// }

// alfiya['lastName'] = 'Ateez';
// alfiya.age = 21;
// console.log(alfiya.lastName, alfiya['age']);

alfiya.location = 'India';
alfiya['instagram'] = 'alfiya_riyaz';

console.log(alfiya);

objectLength = Object.keys(alfiya.friends).length
console.log(objectLength);

console.log(`${alfiya.firstName} has ${objectLength} friends and her bestfriends name is ${alfiya.friends['bestFriend']}`);
