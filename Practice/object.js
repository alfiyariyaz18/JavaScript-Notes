const alfiya = {
    firstName: 'Alfiya',
    lastName: 'Riyaz',
    birthYear: 2004,
    calcAge: function() {
        this.age = 2024 - this.birthYear;
        return this.age;
    },
    job: 'Programmer',
    friends: ['Mike', 'Sam', 'John'],
    hasDriversLicense: 'True',

    summary: function(){
        this.summary = `${this.firstName} is a ${this.age} year old ${this.job} who has ${this.hasDriversLicense ? 'a' : 'no'} dirvers license.`
        return this.summary
    }
}

alfiya.calcAge();
console.log(alfiya.age);
alfiya.summary();
console.log(alfiya.summary);