// So, we already saw two ways of writing conditionals.
// The regular if/else statement and the switch statement. But there is another one.
// And that is the conditional operator.

// So the conditional operator allows us to write something similar to an if/else statement
// but all in one line.

// So let's again start by defining an age variable.

const age = 23;

// Now let's check if the person is above or equal to 18, and then after this condition
// we use a question mark (?) and then write the code to be executed if the condition is 
// true. and here we can only write one line of code.

// age >= 18 ? console.log('I like to drink wine'):

// Here we wrote console.log("I like to drink wine"). we can't write more similar
// expressions, we can only write once. Only one thing can be done if the condition is true.

// Then we also need a mandatory else block (this block is compulsory). and that goes after the colon.

age >= 18 ? console.log("I like Wine"): console.log("I like Juice");

// So what gets loged to the console is "I like Wine", that's because the 
// age is 23, and so the condition is true.

// Now if the age was less than 18, suppose 15 then the second block will be executed.

// So that's essentially writing an if/else statement all in one line.
// But instead of using a statement, we use this conditional operator.

// And the Conditional operator is also called the Ternary operator.
// Because it has three parts. Unlike other operators.

// For example the plus operator has only two parts.
// For example, 1 + 2.

// But this one has three parts, so the condition, then the if part, and then the else part.

// The Conditional operator is an operator, and an operator always produces a value.
// So in other words an operator is an expression.

// So if we have a value, we can assign that value to a variable. So with this
// we can make the Ternary operator really useful to basically conditionally declare variables.

// So what did previously is not much used indeed. Instead we do it more like this:

age >= 18 ? "I like Wine": "I like Juice";

// this whole operator here is now an expression. And an expression produces a value.
// And so now, we can go ahead and store that value into a variable.

const drink = age >= 18 ? "I like Wine": "I like Juice";
console.log(drink);


// So without the conditional operator, we would have to use an if/else statement
// and with that this wouldn't be so easy.


// Remember when we want to declare a variable inside of an if or an else block,
// we need to first declare that variable outside.

// Let's actually do that.
let drink2;

if (age >= 18)drink2 = 'Wine';

else drink2 = 'Juice';


console.log(drink2);

// And again we need to define the "drink2" variable outside of the if and the else blocks,
// because any variable that we define inside of a block, is not available outside.

// We really just did this for the sake of comparison. just so you can see the tremendous difference
// that the ternary operator introduces here in our code.

// And now we can take it even further, Because since the ternary operator is really an expression,
// we can now use it, in a template literal.

// So unlike a normal if/else statement, like we tried and failed in the last lecture.
// But using the ternary operator, which produces a value, we can actually have conditionals
// inside of a template literal.

// So let's try that:

console.log(`I like to drink ${age >= 18 ? 'Wine': 'Juice'}`);

// The template literal will now use whatever result we get from this operator.
// So that's either gonna be wine or juice.
// And then it assembles that result into the final string.

// ternary operator is not thought as a replacement of if/else statements.
// We still need if/else all the time. For example when we have bigger blocks of code
// that we need to execute based on a condition. In that case the ternary operator is not gonna work.