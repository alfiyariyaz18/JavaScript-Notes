// let's learn about some basic operators. And let's start by defining what an operator actually is.

// So an operator basically allows us to transform values or combine multiple values
// and really do all kinds of work with values.

// And there are many categories of operators like mathematical operators, comparison operators
// logical operators, assignment operators, and many more.

// Mathematical / Arithmetic Operator (+, -, *, /)

//  let's use the minus operator to calculate ages based on a person's birth year.

const ageAlfiya = 2023 - 2004;
// console.log(ageAlfiya);

// we can actually also log multiple values at the same time.
// So for that we just write a comma like this, and then the second value.
// And we could do even more by adding more commas.

const ageMingi = 2023 - 1999;
console.log(ageAlfiya, ageMingi, 'Perfect!');

// However, we can actually do better here. That's because we have this value here
// that is repeating itself. So this year 2023 is appearing both here and here.
// And so that's not good because we are repeating this value.

// So if the year now changes then we would have to change it in these both places.
// And we don't like that. And so that's why we have the concept of variables.

// So instead of having this value here, let's say now and then we assign this value
// to the now variable.

// const now = 2023;
// const ageAlfiya = now - 2004;
// const ageMingi = now - 1999;

// console.log(ageAlfiya, ageMingi);

// So that's a very good use case for a variable right there.

// And of course we can use all kinds of different math operations.

// console.log(ageAlfiya * 2, ageAlfiya / 2);

// and then let's also use the exponentiation operator. So for example, two to the power of three, okay.

// console.log(2**3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2


// Next, there is another use case that we didn't use yet for the plus operator.
// And that's because we can use the plus operator to join strings,
// or in other words, to concatenate different strings.

// So let's create two variables, firstName equals Alfiya and lastName equals Riyaz. 

const myFirstName = 'Alfiya';
const myLastName = 'Riyaz';

// And now I can concatenate these two strings using plus.
// So let's log that to the console.

console.log(myFirstName + myLastName); // AlfiyaRiyaz

// And indeed we have now one big string with both of the names together.
// So both of the strings that we declared earlier. But what if we wanted a space in between there?
// Well, that's not too hard. All we need to do is to create another string
// which is just a space and then concatenate it here with these two.

console.log(myFirstName + " " + myLastName); // Alfiya Riyaz


// Assignment Operators

// And the most straightforward assignment operator is just the equal sign.
// So let's say, let x equal 10 plus five.

let x = 10 + 5;

// And so this equal sign here is actually itself an operator,
// So in this line of code, we do actually have two operators. We have the plus and then the equal.

// Now in this case, x will be assigned 15 because the plus operator is executed before the assignment operator, okay?
// And that's based on a couple of rules about operator proceedings that I'm gonna show you in the next video.

// So 10 plus five is done first and then the result of this operation, which is 15, will then be assigned to x.

// but there are more assignment operators. So let me show one to you, which is this one, x plus equal 10.

x += 10;  // x = 15

// So we know that at this point after this line x is 15, right?

// So what does plus equal actually mean?
// x = x + 10  // 25

// So here we are basically reassigning the x value. That's why I used a let here.

console.log(x);

// there are more operators like this. For example, there is x and then times equal four.
// And I hope you can imagine that this will mean x is equal x times four

x *= 4;  // x = 25
console.log(x);

// The same operator also exists with divided here, but I'm not gonna go into that one.
// So to finish, I will just show you the x plus plus operator. And what this will do is

// x equals x plus one.  (x = x + 1)

x++;
console.log(x);

// And we also have x minus minus. So if we do that twice now, 
// what do you think will happen here? And indeed we get 99.

x--;  // x = x - 1
x--;
console.log(x);  // 99

// So minus minus is basically just the opposite of plus plus.
// So this one will decrease the value by one and so we end up with 99.


// Comparison Operators
// So basically, we use comparison operators to produce Boolean values.


// So let's say we are trying to figure out if ageMingi is greater than ageAlfiya, right?
// So what could the result of this be if we think about this logically?
// So ageMingi can either be greater than Alfiya or not.
// And so if it is greater then the result of this it should be true
// and if it's not, then it should just be false.

console.log(ageMingi > ageAlfiya);

// So indeed the result of this one is true that's because Mingi' age is 24 and Alfiya is 19.
// So this is basically like asking the operator, "Is the age of Mingi greater than the age of Alfiya?"
// And the operator will then essentially reply with yes, it is, which means true
// or no, it's not, which means false. And this can be very useful later
// when we start taking decisions with our code based on conditions like this.

// Now of course there's also the less than, so the opposite,
// and also there is greater equal or less than equal.   (<, >, <=, >=);


// So let's see a nice application of the greater than equal operator.
// So let's say we wanted to test if Alfiya is of full age.

// So that means that she must be at least 18 years old, and at least means that she is greater than 18
// or exactly 18. And so we can use the appropriate operator for that. So greater or equal 18.



console.log(ageAlfiya >= 18);   //true

// So if we make her one year younger,
let ageAlfiyaNew = 18;

console.log(ageAlfiya >= 18);  // true

// and she is still of full age. So it's still true here.
// And that's because we included 18 here in the age basically by using this equal sign.

// But if we make her again younger
ageAlfiyaNew = 17;

console.log(ageAlfiyaNew >= 18); 

// Now keep in mind that in real development
// we would store these results in variables and not just always log the results to the console.

// But in this case, I just wanted to show how all of this works.
// And so we need to console because really all we want to do is to see the results
// because we're still learning.

// We could also just do all of this right here in the console immediately
// but then we would kind of lose the record of what we're learning
// and it would be not so easy to scroll up and down.
// But of course we could just do this, right. We could just write ageAlfiya greater or equal 18 in the console,
// and we would still get the same result.
