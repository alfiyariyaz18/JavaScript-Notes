// we talked about values and variables. Now in every programming language values
// can have different types. Depending on the type of data that we want them to hold.
// And we already saw strings and numbers but there are actually more data types.

// In js every value is either an object or a primitive value.
// So a value is only a primitive when it's not an object and we will learn all about objects later
// but for now let's really focus on primitive data types.

// So there are seven primitive data types, number, string, boolean, undefined, null, symbol and big int.

// number
let myAge = 19;

// string
let myName = 'alfiya';

// boolean
let fullAge = true;

// undefined
let children;

// Null


// So these are the seven primitive data types in JavaScript. 

// But there is another fundamental thing to know about types
// which is the fact that JavaScript has a feature called dynamic typing.
// This means that when you create a new variable, you do not have to manually define the data type
// of the value that it contains. In many other programming languages,
// you actually have to do that but not in JavaScript. Instead, Java script automatically determines
// the data type of a value when it's stored into a variable.

/*And this distinction between value and variable is pretty important because in JavaScript,
it's the value that has a type, not the variable. So variables simply store values that have a type.
Many people don't know about this detail or just don't care but this is how it actually works. */

// we already learned about string and number
let age = 19;
let firstName = 'Alfiya';



// Boolean
// And so Boolean is a value that can only be true or false.

// And so if I write true, that is then automatically a Boolean value
true;

// Okay, and actually I can also log that to the console
console.log(true);
console.log(firstName);

// and you can see that it's not a string because strings are printed in black
// and this value is printed in this purple. And so it' actually really a Boolean value.

// And of course we can also store Booleans in variables.
let javascriptIsFun = true;
console.log(javascriptIsFun);

// And so here we created a nice and descriptive variable name holding a Boolean value.
// And remember that it's actually the value that holds the data type and not the variable.

let bool = 5 < 6;
console.log(bool);
console.log(typeof(bool));

// typeof operator

// So typeof it's an operator just like the plus or the minus operator
// that we can use to show the type of a value.

console.log(typeof(true)); // boolean
console.log(typeof(javascriptIsFun));
// and we see that it's a Boolean.So just as I said, the result of using this operator here
// on a value will be a new value which is a string with the type of this value here, okay.

console.log(typeof 23);   // number
console.log(typeof(23.7)); //number
// the value or the variable name can be written with or without paranthesis in typeof operator.

console.log(typeof(firstName));  // string
// And speaking about strings, I just want to quickly emphasize that we really always need
// to use quotes in order to create a string, okay.

// it can be written like this 'alfiya' or like this "alfiya" 
// This is wrong "alfiya' or 'alfiya"
// without any quotes it wont be a string and JS will consider it a variable.


// Now moving on, let's actually see dynamic typing in action.
// dynamic typing simply means that we can easily change the type of a value that is hold by a variable..

// Eg:
let ateez = true;
console.log(typeof(ateez));  //boolean

ateez = 'amazing';
console.log(typeof(ateez));  //string

// Notice here how we first declared the variable using let and then the second time
// we dont need to use let to change its value;

// after declaring a variable using let and then if we use let again with that variable 
// it will give a syntax error.


// Undefined
// undefined is the value taken by a variable that is not yet defined.
// So basically undefined means an empty value.

// So it's perfectly legal in JavaScript to do this.
let year;

// So to define a variable without value.

console.log(year);   //undefined
console.log(typeof(year));   //undefined

// What this means is that whenever we declare an empty variable, the value of the variable
// will be undefined, and type of the variable is also undefined.

// undefined is both the value and the type of the value.
// and undefined is different than other types in this way.

// Then just like before, we can also reassign the undefined variable.
year = 2004;

// And once more without the let because we are not creating a new variable,
// we are simply assigning a new value to year.

console.log(year);
console.log(typeof(year)); //number
// now the typeof year has changed to number from undefined which is dynamic typing.


// There is an error that exists in the typeof operator
console.log(typeof (null)); // object

// null is just another data type and its similar to undefined, and its also similar in the fact 
// that both the value and the type of the value are null.

// But the error is that JS says that the typeof null is an object. and this doesn't 
// make any sense at all. and so this is regarded as a bug or error in JS.
// This error is never corrected for legacy reasons.
// But null is ofcourse not an object.
// This was supposed to return null just as typeof undefined returned undefined.


// escape character
console.log("My Name is \"Alfiya Riyaz\"");
console.log("Alfiya\nRiyaz")  //new line
console.log("Alfiya\tRiyaz");  // horizontal tab
console.log("Alfiya\vRiyaz");  // vertical tab
console.log("Alfiya Riyy\baz")  // to delete extra character