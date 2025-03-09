// So far, we have only used comparison operators to take decisions with if else statements, right?
// But let's suppose we want to check if two values are actually equal, instead of one being greater
// or less than the other. And for that we have different equality operators.

let age = 18;

// So let's now create an if statement, which will log to the console,
// that the person just became an adult, only if the age is exactly 18.

// And now to check if the age is exactly 18, We use the triple equal.
// Now, whenever if block only has one line, we actually don't need the curly braces.

// if (age === 18) console.log("You just became an adult");     

// And indeed, the result is that we see the string loged to the console.
// And if the value would be something else for example 19, then age is no longer equal to 18.
// And so we shouldn't see this result.

// so how does this equality operator here actually work? Well, just like the comparison operators,
// this operator will return a true or a false value. So a boolean value.

// So don't confuse the assignment which is just a single equal with the equality operator,
// which is this triple equal.

// Now, besides this triple equal, we also have a double equal.
// So the difference is that this one here with the three equals is called the strict equality operator.
// It's strict, because it does not perform type coercion.

// And so it only returns true when both values are exactly the same.

// On the other hand, there's also the loose equality operator,
// which is only two equals, and the loose equality operator actually does type coercion.

// eg:  '18' == 18   --->  true   loose equality
//      '18' === 18  --->  false  strict equality


//  So what this means is that this string here is 18 will be converted to a number
// and then the number 18 is the same as this number 18.

// the triple equals does not perform type coercion.
// 18, the string is of course different than 18, the number,
// so it's not the same and JavaScript does not convert them for us.

// So let's try that also here in our code.

if (age === 18) console.log("Strict equality");
if (age == 18) console.log("Loose equality");

// But now if we change age to 18 the string

age = '18'

if (age === 18) console.log("Strict equality");
if (age == 18) console.log("Loose equality");

// so now only the if statement which says loose equality has been executed

// That's because, with the loose equality operator 18 to string
// is the same as 18 the number because 18 to string will be converted to 18 the number.


// Loose equality operator is full of really weird rules and behaviors.
// This means that if we use this, it can introduce many hard
// to find bugs into our code. So as a general rule for clean code, avoid the loose equality operator
// as much as you can.

// So when comparing values, always use strict equality with the three equal signs,

// Even if we actually need type conversion. In that case,
// it's better to convert the value manually before the comparison
// than relying on the double equal operator.


// there is a pretty simple way of getting a value from any webpage,
// we can do that by using the prompt function.

// And again, we will learn what functions are in the next section. But this is how it works.

// So we just write prompt, and then a string.
// And let's ask the user for his favorite number.

// prompt("What is your favorite number");

// So we get this prompt window. And here, we can input something,
// and then hit return.

// So basically, all this here will create a value,
// in this case, We input a number. But we need to store this value somewhere.

// So let's create a variable called favorite.

// const favorite = prompt("What is your favorite number");

// So it's in this favorite variable, where the value that we put into that form will be stored.

// console.log(favorite);

// And you'll see that it now logs the value. But it's printed here in black.
// So remember, that means that it is a string. Let me prove that to you by checking the type.

// console.log(typeof(favorite));   // string

// And it is indeed a string.

// So now let's write some logic here to check if this is a great number, basically.

// So let's say if the favorite number is equal to 23. And let's use double equal first.
// So if the number is equal to 23, then let's log to the console.
// Cool. 23 is an amazing number.

// if (favorite == 23) console.log("Cool 23 is an Amazing number!");

//  and we get the result. So again, why is that?
// Well, because we used the double equals here, which is the loose equality operator
// and this one will do type coercion.

// So right now, what we have here is basically 23 the string
// equal equal 23 the number. And so 23 the string will be converted to a number

// and then the number 23 is of course equal to 23.


// However, if we use the triple equals, so the strict operator, then it should not work.

// if (favorite === 23) console.log("Cool 23 is an Amazing number!");

// This after giving 23 as input we didn't get the result because we used strict equality opeartor
// but we are always asked to use the triple equal (strict equality operator) as a standard way of coding
// And so we now have to convert this string to a number manually.
// And we can actually wrap all of this into that number function that we used to convert.

const favorite = Number(prompt("What is your favorite number"));
// if (favorite === 23) console.log("Cool 23 is an Amazing number!");

// And this time it worked baecause we manually converted the value of favorite to number.
// And this time it's 23 === 23.


// we can actually add more condition to an if else statement.
// So, so far, we have only used if else. However, we can also add an else if block

// And so what this will do, is to first check if the number is 23 here,
// then if it's not, it will, of course, go to the next block,
// and then it will check this condition.Well, if the number is seven,
// And then at the end, we can also add an else block.

// So let's say number is not 23 or seven.



// if (favorite === 23) console.log("Cool 23 is an Amazing number!");
// else if(favorite === 7) console.log("7 is also a cool number");
// else console.log("The number is not 23 or 7.")

// we can actually keep adding more and more. So we can do this as long as we want.

if (favorite === 23) console.log("Cool 23 is an Amazing number!");
else if(favorite === 7) console.log("7 is also a cool number");
else if (favorite === 5) console.log("5 is my favorite number");
else console.log("The number is not 23 or 7.")

// So we now have a way of not going immediately into the else block
// once the initial condition is false. it doesn't immediately go into the else block.
// There are now other conditions that can be checked one after the other.

// First, we check for 23. But if it's not 23,
// we check if it's seven. If it's not seven,
// we check if it's five. And if it's not five,

// well, then the final else block will be executed. 


// now to finish there's also an operator for different. So we talked about equal.
// But of course, there must also be an operator which does the opposite.
// And so that's the different operator.

// And so Let's now check if the favorite is different from 23.
// So we use the exclamation mark and then the double equal which is the strict version ( !== ).

// And then there's also the loose version, So with just one equal ( != )

// but just as before always use the strict version.

// So if the number is not 23, we can log something like saying why not the 23. 

if (favorite !== 23) console.log("Why not 23");

// input any number which is not 23 and this if block will be executed


// So sometimes we need the different operator and sometimes we need the equality operator.
// Just choose whatever you need to solve any particular problem.

// In both cases, just make sure to use the strict version of the operator

