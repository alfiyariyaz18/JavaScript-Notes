// In the last lesson, we saw how we could use the alert keyword in JavaScript to create a pop-up in our
// browser and the pop-up would say whatever is in between the two round brackets. 

alert("Hello");

// In this case, it would be, "Hello".

// Now how does the browser know which part of this code is actual code i.e. keywords like alert and which
// parts of this line is the text that we want to display?

// Well, there’s something that we've added here that tells the browser that this is a string and the secret
// is of course these two little quotation marks, because everything that they enclose gets interpreted
// by the computer as a string so that it gets taken out of the code and gets interpreted as text.

// And this is really important because all the code that we write is written with text, right, with characters
// in the English alphabet. And it's really important that the computer knows which parts are the code
// and which parts are the text.

// And this is a great place to introduce you to something called Data Types because a string is exactly
// that. It's a data type.

// Now, there are other data types other than strings,
// for example, there are numbers and we don't actually need any special symbols to tell the computer 
// that this is a number. We can just simply type the number. And finally, the last data type I want to 
// show you is the Boolean. And this is the data type that describes data that is either true or false.

console.log(2 + 5);
alert(2 + 7);

// Now, I want to show you another keyword other than the alert,
// and this is called typeof().

// And this actually tells you what is the data type of whatever it is that you 
// put within these round brackets.

// So, for example, if I put 23 in here, then I will get the output of, this is a "number" 
console.log(typeof(23))

// but if I wrote something like typeof my name inside some quotation marks, then I
// get told that this is a "string".
console.log(typeof("Alfiya"));

// And finally, let's just, for completion's sake, use a boolean, for example, "true", 
// then I get told that this is a boolean.
console.log(typeof(true));
alert(typeof(3 + 6));
