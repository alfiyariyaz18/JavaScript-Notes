// Math.random()
// --------------
// The Math.random() static method returns a floating-point, pseudo-random number 
// that's greater than or equal to 0 and less than 1.

// So JavaScript has a really handy way of generating random numbers  by simply writing Math.random().
// And this is a function that generates a random number. And the random number that gets generated is a
// 16 decimal place number, and it can be any number between 0 and 0.9999999...

// var n = Math.random();

// So essentially it never reaches 1. And the number that you get out,
// so in this case n, will be different every single time you run the code, but it will always be between
// 0 and 0.9 to 16 decimal places, and it never ever reaches 1.

// So, for example, variable n = Math.random(), and remember we need to
// use the parentheses to run the function even though it doesn't take an input.

// Now say that in this case we get 0.3647 etcetera, etcetera.
// Now, if we were trying to simulate a dice roll, we have 6 possibilities. 

// When we roll a dice we get any number between 1 and 6, right?
// So how do we take this random number that we get from Math.random() 
// and turn it into a number between 1 and 6?

// Well, we could first multiply it by 6, so we get 2.188.
// Next we take that number and we perform Math.floor(n).

// So you can see here, from our functions knowledge, we know that
// n in this case is being used as an input to this function floor, which essentially rounds it down to
// the nearest whole number. In this case, it would be 2.

// And now we have a number that we can work with and we can give back to the user.

var n = Math.random();
// console.log(n);

// So you can see that they’re random numbers between 0 and 1 and it never reaches 1, 
// but it can in fact be 0.

//  if we wanted to simulate a dice roll using our code, then we would be able to scale this up if
// we simply did n = n * 6. And if we run the code now, then you can see that we're
// getting numbers between 0 and 5. but it never ever reaches 6.

// n = n * 6;
// n = Math.floor(n);
// console.log(n);

// So our range currently is between 0 and 5, so, in order to increase it to 1 and 6, 
// to simulate that dice roll, because when we roll the dice we never get 0,
// instead we get a range between 1 and 6, then all we need to do is just to add 1 over here.

n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

// So now we get the range between 1 all the way through to 6, and this is what's called a pseudo-random
// number generator.

// As we said we're going to be building a Love Calculator.
// And the way the love calculators work is that you enter two names and it should give you back a percentage
// between 1 and 100, and that number is supposed to have some sort of meaning.
// So I want you, as a challenge, to create a love calculator.

var userName = prompt("Enter your name");
var crushName = prompt("Enter yor crush's name");

var lovePercentage = Math.random()
lovePercentage = lovePercentage * 100;
lovePercentage = Math.floor(lovePercentage) + 1;

alert("Love score of " + userName + " and " + crushName + " is " + lovePercentage + "%");
// console.log(lovePercentage);
