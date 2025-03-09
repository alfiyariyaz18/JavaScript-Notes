const alfiya = {
    firstName: 'Alfiya',
    lastName: 'Riyaz',
    birthYear: 2004,
    job: 'Programmer',
    firiends: {
        bestFriend: 'Mike',
        casualFriend: 'Jay',
        childhoodFriend: 'Sam'
    },
    hasDriversLicense: true,

    calcAge: function(){
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    summary: function(){
        return `${this.firstName} is a ${this['age']} years old ${this.job} who has ${this.hasDriversLicense ? 'a': 'no'} Drivers License.`
    }
}

// console.log(alfiya.calcAge(alfiya.birthYear));
// console.log(alfiya['calcAge'](alfiya['birthYear']));


console.log(alfiya['calcAge']());
console.log(alfiya['age']);

console.log(alfiya.summary());

// console.log(`${alfiya.firstName} is a ${alfiya['age']} years old ${alfiya.job} who has ${alfiya.hasDriversLicense? 'a': 'no'} Drivers License.`);

