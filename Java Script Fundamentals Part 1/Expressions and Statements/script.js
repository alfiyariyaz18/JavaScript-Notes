// Now that we're getting more comfortable with JavaScript,
// it's time to learn about a more theoretical concept. And that's the difference
// between statements/Declarations and expressions.

// So essentially, an expression is a piece of code that produces a value.
// For example, 3 + 4 is an expression, because this is gonna produce a value.


// The same goes, for example for just any number:  2004 
// This for example is an expression too, even though it's just a simple value.
// because again, this itself will produce a value in JavaScript.

// Or we can do this. 

true && false && !false

// So all of this here, is an expression, 
// Because this in the end, produce some Boolean value.


// Now, on the other hand, we have statements. And the statement is like a bigger piece of code
// that is executed and which does not produce a value on itself.

// Now, basically we write our whole programs as a sequence of actions.
// And these actions are statements.

// So let's take as an example, the, if else, statement.

// So let's say, if 23 is greater than 10, then, well just do something.
// So create a string called, 23 is bigger.

if (23 > 10){
    const str = '23 is bigger';
}

// The code itself doesn't really matter here. It does not produce any value
// So this, if else statement is in fact a statement. And so that's the reason why we called it
// the if else statement.

// And the same is true for the switch statement. So this statement here
// doesn't really produce a value, All it does is, in this case,
// it simply declares is variable called STR. But that's it.

// It performs some actions, in this case, declaring this variable,
// but it doesn't produce a value.

// Now the string itself, again is an expression:  '23 is bigger'

// And then this whole line of code is a statement:  const str = '23 is bigger';
// because this again does not produce a value.

// And so basically, whenever something ends with a semicolon, that's then a statement.
// It's like a complete sentence.

// Now this difference between expressions and statements is important to know
// because JavaScript expects statements and expressions in different places.

// For example, in a template literal, we can only insert expressions, but not statements.

// Inside placeholder, we need to put an expression.
// So something that produces a value which can then be put into the string
// that we're building here using the template literal.

console.log(`I am ${2024 - 2004} years old`);

// So again, this is an expression here. And so this one will work.

// However, we cannot do this. For example, we cannot insert
// an if statement in here. It wouldn't make any sense at all,

// console.log(`I am ${if (23 > 10){
//     const str = '23 is bigger';
// }} years old`);                        // syntax error

// And so we actually get right away, unexpected token, if.
// And that's because JavaScript knows that this is a statement
// and statements don't make sense where JavaScript expects an expression.


// Now, if we had a variable, for example, then if we used that here,
// then this would actually also be an expression.

const me = 'Alfiya';
console.log(`I am ${me}`);

// Because this variable will essentially just be replaced with this string.
// And so this produces a value, and so of course this is completely acceptable.