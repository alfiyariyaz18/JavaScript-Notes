// So, in keeping with our previous theme of creating the Twitter character count functionality, we want
// to improve this a little bit, because, as nice as it may be telling the user that they have written 182
// characters and that they've gone over by 42 characters, it would be a lot nicer if we simply enforced
// this rule by removing the extra characters.

// So how can we implement this using JavaScript?

// Well, first we have to learn about a function called "slice" . And just as its name suggests, it basically
// allows you to slice and dice your strings to separate them into individual characters.

// Now let me show you how slice works.

// So let's say that I have a variable that's called myName and it contains the string
// "Alfiya". If I take the myName variable and I slice it by writing myName.slice followed by paranthesis, 
// then I can specify which slice I would like out of this string.

// So say if I only want the first character in the string then I can simply write 0,
// 1, and this means that I'm trying to take a slice out of this string called 'Alfiya' from position 0
// all the way to, but not including, position 1. So that is equal to simply the first character.

// And now if I hit Run you can see that what we get is the capital letter A, which is the first letter
// in this string. So a really important thing to remember is that programmers always count from zero.

// const myName = 'Alfiya';
// console.log(myName.slice(0,1));    //  A

// in order to get the last letter of this variable, we'll say myName.slice(5,6)
// And of course there is no character at position 6. But by saying 5, 6, we’re only grabbing the 
// last character at position 5, which is of course the lower case letter a.

// console.log(myName.slice(5,6));   //  a


// Now I can also grab a bigger slice by having a larger range inside here.
// So, for example, if I wrote myName.slice(0,3), So the slice that starts off with the first character 
// or the character position 0 and then ends before the character at position 3.

// console.log(myName.slice(0,3));   //  alf

// So a quick shortcut to know how many characters you're actually slicing is to simply take the upper
// bound and minus the lower bound. So say 3 - 0 is 3, so that means you get three characters out.

// If I wrote instead 1, 5, 5 - 1 is 4, so I should be getting four characters.

// console.log(myName.slice(1,5));  //  lfiy


// Now, once you're comfortable with the slice function, I want you to implement this Twitter character counter
// yourself by using what we learned about JavaScript.

// So you should be able to write some code that creates a prompt, and when you paste in a large paragraph of
// text, then it should give you an alert that cuts your tweet down to only 140 characters.


// const tweet = prompt("Enter your tweet Under 140 Characters");
// const finalTweet = tweet.slice(0, 140);
// alert(finalTweet);

