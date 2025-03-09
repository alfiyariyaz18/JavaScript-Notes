// funtions inside an object
// const alfiya = {
//     firstName: 'Alfiya',
//     lastName: 'Riyaz',
//     birthYear: 2004,
//     job: 'Programmer',
//     friends: ['Mike', 'Steven', 'Luis'],
//     hasDriversLicense: true,
//     calcAge: function(birthYear){
//         return 2024 - birthYear;
//     }
// }

// console.log(alfiya.calcAge(2004));
// console.log(alfiya['calcAge'](2004));

// console.log(alfiya.calcAge(alfiya.birthYear));
// console.log(alfiya['calcAge'](alfiya.birthYear));

// this Keyword or variable
// const alfiya = {
//     firstName: 'Alfiya',
//     lastName: 'Riyaz',
//     birthYear: 2004,
//     job: 'Programmer',
//     friends: ['Mike', 'Steven', 'Luis'],
//     hasDriversLicense: true,
//     calcAge: function(){
//         return 2024 - this.birthYear;
//     }
// }

// console.log(alfiya.calcAge());


// Creating a new property in the current object using this keyword
// const alfiya = {
//     firstName: 'Alfiya',
//     lastName: 'Riyaz',
//     birthYear: 2004,
//     job: 'Programmer',
//     friends: ['Mike', 'Steven', 'Luis'],
//     hasDriversLicense: true,
//     calcAge: function () {
//         this.age = 2024 - this.birthYear;
//         return this.age;
//     }
// }

// alfiya.calcAge();
// console.log(alfiya);

// Challenge

const alfiya = {
    firstName: 'Alfiya',
    lastName: 'Riyaz',
    birthYear: 2004,
    job: 'Programmer',
    friends: ['Mike', 'Steven', 'Luis'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.age} years old ${this.job} who has ${this.hasDriversLicense ? 'a' : 'no'} Drivers License.`
    }
}

alfiya.calcAge();
console.log(alfiya.getSummary());

