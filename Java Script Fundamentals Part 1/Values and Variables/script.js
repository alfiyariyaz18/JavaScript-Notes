// Value is a piece of data and the most fundamental unit of information

// 'Jonas' <-  Its a value
// To see this in the console
console.log('jonas');
console.log(21);

console.log(40 + 8 + 23 - 10);

// Declaring Variable

// So I like to imagine a variable, like being a box. So in the real world, a box can hold some object
// for example, a book, and we can then write a label on the box to describe what's in it.
// And then we can find the object later when we need it by using that label.
// And variables actually work in the exact same way.

// So here, basically we have a box called firstName and into that box, we put the value of Jonas.

let firtsName = 'Jonas';  //And now if we want to use this value all we have to do is to basically use this label
console.log(firtsName);


// And of course we can now use this variable name many times.
console.log(firtsName);
console.log(firtsName);
console.log(firtsName);


// because now if I want to change the first name to something else, I only have to do it in one place.
//  eg: change the value of firstName to something else (line 19)

// So this is one of the big advantages of variables. Without variables, I would now have to manually change
// the value everywhere to Alfiya.


// Rules for naming variables
// variable name cannot start with  letter or number
// let 3years = 3;  //(You cant do this)

// variable name can only contain number, letters, underscore, and dollar sign

// Camel case way
let myName = 'Alfiya';
let myMotherName = 'Rency';

// we cannot use reserved javascript key words eg: new, function
// let new = 27; //(This is not allowed) instead you could do this
let _new = 27;
console.log(_new);

// On the same note variables that are all in uppercase are reserved for constants that we know will never change.
// For example, the number PI which is like 3.1415, and so on and so forth.
// So we know that this number is never gonna change. And so that's a constant.
// And for that, we have a convention of writing it in all upper case.

let PI = 3.1415;

// Of course you could also write it like this,
let pi = 3.1415;

// but then this would be kind of weird actually. So if it's a real constant, write it in uppercase
// like this, so that's a pretty normal convention there in programming as a whole.


// Make sure the variable names are descriptive and that's very important to write cleaner code.
// So when you name your variables it should be really easy to understand
// exactly what value the variable is holding just by reading the name of the variable.

// For example
let myFirstJob = 'Programmer';
let myCurrentJob = 'teacher';

// by simply looking at the variable name. So we know that my first job was a programmer
// and that my current job is teacher. So this is much, much better than writing this.

let job1 = 'Programmer';
let job2 = 'teacher';

// While down here, well, we would simply know that these are two different jobs.
// We don't know anything about them.