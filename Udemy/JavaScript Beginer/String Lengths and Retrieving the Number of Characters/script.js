// Now, another really cool feature of JavaScript strings is that we can 
// easily figure out the number of characters in a string by simply tapping into its "length" property.
// So we can simply write word.length, and we'll be able to get the number of characters inside the word.

// So let me show it to you in practice.

// So let's say our variable myName is equal to "Alfiya", and say if I'm too lazy to count how many characters
// are in the string "Alfiya", then I can simply write myName.length in order to get the number of characters.

const myName = 'Alfiya';
console.log(myName.length);   // 6

// And you can see printed in our Console is 6.

// So here's a slightly harder challenge. So I want you to write some JavaScript code in order to 
// create a prompt where the user can enter a long string such as a paragraph of text from a blog post 
// and you will tell them how many characters they have written and also 
// how many characters they have remaining out of 140 characters.

// The output that you should get should be something like "You have written 182 characters,
// you have -42 characters left".

// So this is going to involve some concatenation, as well as a 
// little bit of maths, and also what you have learned about the length property.

const tweet = prompt("Enter Your Tweet");
const tweetCount = tweet.length;
const tweetLimit = 140 - tweetCount;

const message = "You have written " + tweetCount + " characters, you have " + tweetLimit + " characters left";
alert(message);