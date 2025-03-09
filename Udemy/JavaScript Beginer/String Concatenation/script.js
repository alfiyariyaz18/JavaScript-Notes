// So previously we saw that we can combine strings using the plus sign,
// and this creates a single string using a special feature of programming called concatenation.
// Now you have to imagine that you're joining together everything that's inside a 
// quotation mark and ignoring everything else.

// So "a" + " " + "b" becomes "a b" concatenated into a single string.

// Now let's try it out in practice. 

// So we can create an alert that says "hello" + "world".
// And this, when we run it, will show helloworld with no spaces in between. 

// alert("hello" + "world");

// So we can add the space by either including it inside a string, so a string with a single space,
// alert("hello" + " " + "world");

// and this would be "hello world",

// or we can have it where we have a "hello" + " world", and remember that it's only the parts that are
// inside the quotation marks that are combined.

// So I want to set you the challenge of creating a greeting message using variables and alerts.
// So I want you to start off with two variables.

var message = 'Hello';
var userName = prompt("Enter your name:");

alert(message + " " + userName + ", Welcome to the Web Development Course");