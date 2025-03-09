// Strings are a very important part of programming. And so let's now learn about an easy way
// to build strings, using something called template literals.

// And let's start by creating some new variables here about a person.
// so that we can then concatenate them into one big string.

const firstName = 'Alfiya';
const birthYear = 2004;
const job = 'Developer';
const presentYear = 2023;

// And as we already learned in one of the previous lectures,
// we can use the plus sign to concatenate strings.

const alfiya = "I'm " + firstName + ", a " + (presentYear - birthYear) + " years old " + job;
console.log(alfiya);

// We need to put the calculation in paranthesis so it will do the calculations first then the concatenation.

// But you might be wondering, well the result of this is going to be a number. Right?
// But the rest of the things that we're adding here are strings. So how is this gonna work?
// Well, this has to do with something called type coercion,
// which is something that we're going to talk about a little bit later in the section.

// But basically JavaScript will simply convert this number to a string,
// so that it can concatenate them so that it can join them with the rest of the strings.

// So you will see that it's going to work just fine.

// for a complex string like this one, this can be kind of a pain managing all the spaces and variables.
// And so that's why starting with ESXi, we have a much better tool
// for doing this kind of stuff now, which is called, Template literals.

// So with template literals, we can write a string in a more normal way,
// and then basically insert the variables directly into the string.

// So basically a template literal can assemble multiple pieces into one final string.

// So let's see how template literals work

// And now to write a template literal, we need to use backticks.
// And on the English keyboard, you will find this one above the tab key.

// So again, we really need to use these backticks to tell JavaScript that we're writing a template string,
// the single quotes or double quotes won't work for what we're going to do now.

const alfiyaNew = `I'm ${firstName}, a ${presentYear - birthYear} years old ${job}`;
console.log(alfiyaNew);

// and I hope that you can see that this is a way easier way of writing this string.
// This really kind of assembles the string using the pieces that we give it.

// Now I just wanted to let you know that we can actually also use backticks
// to write all strings. So strings, where we do not,
// insert any of these kind of placeholders. So we can use backticks for any irregular string.

const lastName = `Riyaz`;

console.log(lastName);
console.log(`just a regular string....`);

// Now another great use case of template literals is to create multiline strings.
// Before ES6 to write multiline strings we use backslach n backslach (\n\) which in programming means a new line.

console.log('Multiple\n\line\n\string');

//  now with template strings, there is an easier way of doing this.
// So all we have to do is simply hit return or enter, and it will create a new line for us.

console.log(`Multiple
line
string`);

// And this is actually going to be immensely useful later when we start building HTML from JavaScript.
// So by then we will be able to use these backticks to create multiline HTML elements
// to insert them onto a page, dynamically.
