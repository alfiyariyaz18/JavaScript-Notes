// So, up until this point, we have always used the let keyword to declare variables.
// However, there are also const and var. Now, let and const were introduced in ES6,
// and so they are modern JavaScript. While the var keyword is the old way of declaring variables.

//We use  let keyword to declare variables that can change later 

// For example:
// let's set the age to 30 at one point of the program. And then in another point of the program,
// we can change it to something else. For example, when the person turns 31
// and then the age of course changes from 30 to 31.

let age = 30;
age = 31;

// And so, it's perfectly okay to declare a variable with let at one point in the program,
// and then later assign a new value to it.

// In technical terms, we call this reassigning a value to a variable, or also we say that we mutate
// the age variable in this case. So, it was 30 and now it's 31, and so we mutated the variable.

// So, when we need to mutate a variable, that's the perfect use case for using let
// and that also counts for the case that we want to declare empty variables.

let year;
year = 2004;

// sometimes we actually do this in practice. For example, when we want to declare all the variables
// at the top of a file, but only assign actual values to them later in the program,
// based on some condition.


// Now, on the other hand, we use the const keyword to declare variables that are not supposed to change
// at any point in the future. So, the value in a const variable cannot be changed.

const birthYear = 2004;

// reassigning a const variable will give an uncaught Type Error
// const myBirthYear = 2004;
// myBirthYear = 2005;

// so, that's exactly what the const keyword does. It creates a variable that we cannot reassign
// or in technical terms, an immutable variable. So, a variable that cannot be mutated,

// Now the fact that variables created with const are immutable also means
// that we cannot declare empty const variables.

// const myBirthYear; 
// This will give an uncaught Syntax Error.
// And so this error message means that when using const, we need basically an initial value.


// Now with these two different ways of declaring variables, you will probably ask, should I use let,
// or should I use const to declare a new variable? Well, as a best practice for writing clean code,
// I always recommend to use const by default and "let" only when you are really sure that the variable needs to change
// at some point in the future.

// For example, when you have a variable that's really never supposed to change like this birth year,
// you should always use const. Also, if you are sure
// that the age variable is never changing inside your program, you should declare it using const as well.

// The reason for this is that it's a good practice to have as little variable mutations
// or variable changes as possible because changing variables introduces a potential 
// to create bugs. So, basically errors in your code.

// And so from now on, I will probably use the const way of declaring variables as much as possible.


// Var keyword way of declaring variable.

// but this one should actually be completely avoided, okay? However, we should still know how it works
// for legacy reasons because you will see this maybe in older code basis or some older tutorials
// that you'll find online.

// So, var is basically the old way of defining variables, prior to ES6.

// And at first sight, it works actually pretty much the same as let.
// So, we can write var job equals programmer, and then just like with let, we can change the value of
// the variable later, just like this.

var job = 'programmer';
job = 'athlete';

// check the console and we didn't get any errors, which means that it's basically allowed
// to mutate this job variable when we use var.

// Now, although it looks like var and let are very similar, below the surface, they're actually pretty different.
// And actually there are also many differences between let const and var. So, between all three of them,

// and you will learn all about these differences later in section seven,
// because this is actually really important stuff.

// For now, what matters is that you should basically never use var, okay?


// Now just to finish, some people will probably point out that we actually don't even have to declare variables at all
// because it's actually not mandatory. We can just write something like this,

lastname = 'Riyaz';

// And then we can just use this variable name in this case by logging it to the console

console.log(lastname);

// and JavaScript will happily execute this script, even without us declaring a variable, right?

// We didn't use let nor const nor a var in this case, but it still worked.
// However, this is actually a pretty terrible idea because this doesn't create a variable
// in the current so-called scope. Instead, JavaScript will create a property on the global object. 

// And once again, you will understand a little bit later what all of this means, but what matters is
// that you should always properly declare variables, okay? Never just write a variable like this
// without really declaring it.