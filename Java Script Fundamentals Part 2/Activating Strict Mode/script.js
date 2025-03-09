// Now before continuing to learn JavaScript, we should first activate a special mode in JavaScript,
// called Strict Mode.

// Strict mode is a special mode that we can activate in JavaScript,
// which makes it easier for us to write a secure JavaScript code.

// And all we have to do to activate strict mode is to write this string at the beginning of the script.
// 'use strict'  --> all lower case

'use strict';

// So with this, we activated strict mode for the entire script.

// Now what's important is that this line of code, so this statement here basically
// has to be the very first statement in the script. So if we have any code before this
// then strict mode will not be activated.

// Comments are allowed because JavaScript will just ignore them but no code.

// So with strict mode we can write more secure code. And when secure, I mean that strict mode
// makes it easier for developers to avoid accidental errors. It helps us to identify bugs in our code.

// This is because of 2 reasons:

// 1. Strict mode forbids us to do certain things.
// 2. It will actually create visible errors for us in the developer console.

// In certain situations without strict mode JS will simply fail silently without
// letting us know that we did a mistake.

// Lets see an example of one of the most important changes
// that strict mode introduces.

// So lets create a variable here with a complicated name 'hasDriversLicense'
// and lets initialize it as false here.

let hasDriversLicense = false;

// Let's also create another variable called 'passTest' and set that to true.

let passTest = true;

// So basically there is a certain person which right now does not have a drivers license
// but they just passed a test.

// And now we want to write some logic so that when they pass the test
// the variable 'hasDriversLicense' becomes true.

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// In the first if block we have omitted divers 's' from the hasDriversLicense variable on purpose 
// to see how strict mode helps us to find accidental errors.

// let's deactivate the strict mode and check the developer console.
// we will see no error, no output it's all blank.

// but if we activate the strict mode we will receive a message
// in the console saying: Uncaught ReferenceError.

// So here we see that hasDriverLicense is not defined,
// and so this error message now tells us exactly what is wrong.


// Now after correcting the error it works fine
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// And so strict mode really helped us avoid this kind of bug that we created here.


// Now another thing that strict mode does is to introduce a short list of variable names
// that are reserved for features that might be added to the language a bit later.

// For example, lets try to define a variable called interface, for example, for an audio interface
// and now if we try this.Then we see that, we get an unexpected strict mode
// reserved word, error message basically

// const interface = 'audio interface';   // Syntax error

// and that is again because JavaScript is reserving this word here for a feature
// that it might implement in the future. And so by reserving these kind of words
// it will then make it easier to implement the feature in the future.

// Another example:

// const private = 5; // syntax error

// so strict mode reserves these words so we cannot use them for variables.
// It's the same logic as this one, so we cannot call a variable 'if'.
// And that's because there's already an if statement.

// const if = 34;  // Uncaught syntax error

// So here we get an unexpected token 'if'
// so that's like the rules which we learned in the beginning
// about naming variables.

