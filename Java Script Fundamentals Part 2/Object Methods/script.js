// In this lecture we will laern about object methods. So we learned that objects 
// can hold different types of data just like Arrays. And they can even hold Arrays.
// and in fact, objects could even hold objects inside objects.

// But now we can take it even further. And for that, remember how I said
// that functions are really just another type of value. And if a function is just a value
// then that means that we can create a key value pair in which the value is a function.

// And that then means that we can in fact add functions to objects.

// And so let's now see how. for that we will create a new object

// const alfiya = {
//     firstName: 'Alfiya',
//     lastName: 'Riyaz',
//     birthYear: 2004,
//     job: 'Programmer',
//     friends: ['Mike', 'John', 'Steven'],
//     hasDriversLicense: true
// }

// But now let's also add a function here as a key value pair.
// So to do that, all we have to do is to add another key here.
// And the function that we want to add is again, the calcAge function.

// So to do that, let's simply add the name of the function here as a key.
// So as a property, so calcAge and then the colon, and now here
// we simply specify the function as an expression
// and that works because the expression produces the value.

// const alfiya = {
//     firstName: 'Alfiya',
//     lastName: 'Riyaz',
//     birthYear: 2004,
//     job: 'Programmer',
//     friends: ['Mike', 'John', 'Steven'],
//     hasDriversLicense: true,
//     // calcAge: birthyear => 2024 - birthyear
//     calcAge: function(birthYear){
//         return 2024 - birthYear;
//     }  
// }

// So this is pretty similar to writing a regular function expression.
// So const calcAge like this:

// const calcAge = birthyear => 2024 - birthyear;

// this is how we used to do it before.
// And so you see that this is pretty similar. The difference is just in the syntax
// because now calcAge is not a regular variable, but it's a property of the alfiya object.

// And so that's why it was very important that you understood what a function expression actually is
// because here we need a function expression to create this method.
// And that's what this function is called. So any function that is attached
// to an object is called a method.

// So of course we could not use a function declaration here.
// So something like this:

// const example = {
//     firstName: 'Bob',
//     lastName: 'Smith',
//     function calcAge(birthYear){
//         return 2024 - birthYear;
//     }
// }

// that would not work, we would certainly get an error here.
// because this is a declaration and not an expression.

// And now just like we can access any other property,
// we can also access the calcAge property or method.
// So alfiya.calcAge, and just like any other function in order to call it,
// we use the parenthesis. And now we can pass in the birth year.
// And so that should then calculate our age.

// console.log(alfiya.calcAge(2004));   //  20

// And you could also have access to this method using the bracket notation,

// console.log(alfiya['calcAge'](2004));  20

// now you might have noticed that the birth year 2004,
// that we passed here as an argument to the method is actually already defined
// in the alfiya object itself. So we already have this information in the alfiya object.

// And so writing the same number twice is not ideal
// because we might make a mistake and pass in the wrong year.

// So if we know the birth year of alfiya, it shoul only be written in one place,
// not in multiple places, because if birthyear changes, then we have to change it everywhere.
// That's always the philosophy that we need to keep in mind.

// console.log(alfiya['calcAge'](alfiya.birthYear));  //  20
// OR
// console.log(alfiya.calcAge(alfiya.birthYear));   //  20
// OR

// in every method, JavaScript gives us access to a special variable called this.
// And so what we can do now is in this calcAge function,
// we can read the birth year directly from this object itself without having to pass it in
// as a parameter here into this function.

// So now we no longer need this parameter and we will read the birth year directly from the object.
// And for that again, we will use the this keyword.

// the this variable is basically equal to the object on which the method is called,
// or in other words, it is equal to the object calling the method.

// const alfiya2 = {
//     birthYear: 2004,
//     calcAge: function(){
//         return 2024 - birthYear;
//     }
// }

// So, let's see who is calling the method. So down here, here is calcAge,
// and the object that is calling the method is alfiya2, because that's where the dot is.

// console.log(alfiya2.calcAge());

// And so that means that inside this method (calcAge)
// the this variable or the this keyword will point to alfiya2.

// And so let me just write this.birthYear here
// And to make this even more clear here, let's also log this to the console.

// const alfiya2 = {
//     birthYear: 2004,
//     calcAge: function(){
//         console.log(this)
//         return 2024 - this.birthYear;
//     }
// }

// console.log(alfiya2.calcAge());

// and indeed, this is the whole alfiya2 object and the age 20 that we just returned.

// And so again, that's because the alfiya2 object is the one who is calling this method calcAge,
// it's alfiya2.calcAge(), and so whatever appears before the dot is the one who is calling the method.
// And so therefore, in the method, this points to alfiya2 now, and if this points to alfiya2,
// then this.birthYear is of course the value that we have in alfiya2 (the property name birthyear).

// Now you might argue that maybe we don't even need this confusing this keywords.
// Why not just do alfiya2.birthYear, instead?

// const alfiya2 = {
//     birthYear: 2004,
//     calcAge: function(){
//         console.log(this)
//         return 2024 - alfiya2.birthYear;
//     }
// }

// console.log(alfiya2.calcAge());

// Well, because that would actually still violate the don't repeat yourself principle.
// It would work just the same, but then let's say
// that we need to change the name of the object to alfiya3
// and now we will have to change it inside the method as well otherwise
// the code will no longer automatically work. therefore it's always a good idea
// to reference the object itself and not hard-code the name of the object.


// However, we can actually even take this a little bit further
// just a small variation of this, because let's say that we need to access
// the age multiple times throughout our program.
// So for that we will have to call this function a couple of times
// like this:

// console.log(alfiya2.calcAge());
// console.log(alfiya2.calcAge());
// console.log(alfiya2.calcAge());

// And so what happens here is that a function will get called a total of three times.
// And in this case that's not a big deal but it might be a like a heavier computation 
// when we are handling big functions that actually takes some more time,

// and so it would be a bad practice to do this multiple times.
// Instead, what we can do is to just calculate the age once,
// then store it in the object, and then when we need it at a later point,
// we can then just retrieve the age as a property from the object.

// So, what I was trying to say is that we can now use the this keyword
// also to store a new property. So we calculate the age,and then we 
// create a new property on the current object. So in this case, on the alfiya2 object,

const alfiya2 = {
    birthYear: 2004,
    calcAge: function(){
        this.age = 2024 - this.birthYear
        return this.age;
    }
}

// and remember that we can use the dot notation to create new properties.
// And so here we are essentially creating alfiya2.age and setting it to the age that we just calculated.

console.log(alfiya2.calcAge());  //  20
console.log(alfiya2.age);
console.log(alfiya2);



// Challenge
const alfiya = {
    firstName: 'Alfiya',
    lastName: 'Riyaz',
    birthYear: 2004,
    job: 'Programmer',
    friends: ['Mike', 'John', 'Steven'],
    hasDriversLicense: true,
    calcAge: function(){
        this.age = 2024 - this.birthYear;
        return this.age;
    },
    
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}. who has ${this.hasDriversLicense ? 'a': "no"} Divers License.`;
    }

}

console.log(alfiya.getSummary());




