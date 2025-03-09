const now = 2023;
const ageMingi = now - 1999;
const ageAlfiya = now - 2004;

console.log(now - 1999 > now - 2004);

// So the question is why these two subtractions here are executed before this comparison operator.

// So basically the question is why does this work? Okay, because we see that it does actually work.

// Well, it works this way because JavaScript has a well-defined order of operator precedence.
// So basically the order in which operators are executed. And to actually see the precedence of all the different
// operators, let's check out a very handy precedence table.

// MDN operator precedence

// And let's understand what exactly happens here, in terms of operator precedence.
// So we already know that these two calculations here are done before the comparison.
// And so let's actually see that in the table. So here we have the comparison.
// So this greater than and you see that it has a lower precedence than the subtraction here.
// So this has 14 and this has 12, right?

// So usually all the math operators are executed before the comparison operators for example,
// because that makes sense. And so with this, we explain why this kind of comparison
// that we have here works.


// Now in this table, we can also see which operators are executed from left
// to right and which one from right to left. Like for example,
// the exponentiation operator is executed from right to left. While most operators especially the mathematical ones
// are executed from left to right.

// let's say we wanted to calculate 25 minus 10 minus five.

console.log(25 - 10 - 5);

// And so this one should be 10, right? So let's check that. And indeed we get 10.
// But if it was right to left, then it would be five minus 10 minus 25
// which would then be something completely different.

// So this is an example of left to right operation.

// But assignment, for example, is a good example of right to left execution.
// And so let me show you a nice example of why this is important.

// So let's declare two variables, let X and Y and here's something new.
// So we can define two variables at the same time like this.

let x,y;

// So now in one line we declared two empty values. So two values which are gonna hold for now
// the value of undefined, right? So that's X and Y.

// And now, we can do this. We can say that X should be equal to Y should be equal
// to 25 minus 10, minus five which we already know is 10.

x = y = 25 - 10 - 5;

// And so let's now log both of these values to the console.

console.log(x,y);  // 10 10

// So, we see that X and Y are both 10.

// And so let's analyze why that happens. So when JavaScript first finds this line of code
// here to execute. It will look at all the operators that are present
// and it will see the minus operators. And so it will start with these,
// because they have a higher precedence, assignment has only three, but the, the subtraction has a 14.

// And so of course it's gonna be executed first and from left to right.

// So after these minus operations we end up with this code basically.
// So X equals Y equals 10.  x = y = 10

// And so now we only have two operators left which are the equal operators.
// And so now they are executed but as I showed you before they are executed right to left.

// And so what happens is that we will have Y equals 10.
// And so at this point, Y is equal to 10.   y = 10

// And so what we have then is X equal to y, okay.
// And then after that, we're only left with X equal 10.
// And so at the end, both X and Y are gonna be 10.


// that's just how it works when you evaluate from right to left.
// And actually that's the way it has to be, because if it was the other way around this wouldn't work.

// Just imagine if we had this assignment working from left to right.
// X would be equal to Y which would be undefined and then Y would be equal to 10.
// And so that's not the result that we expect here.

// let's just check out the one with the highest precedence,
// which is just grouping. So basically using parenthesis. ( )

// And that actually works just like in mathematics
// where operations within parenthesis are executed first.

// And the great example is to calculate the average of two values.
// So we have age Mingi and age Alfiya.

// And so let's calculate the average age of these two people.

// So to calculate an average, we need to add two values together and then divide them by two.
// At least that's when we have just two values.

const averageAge =  (ageMingi + ageAlfiya) / 2;
console.log(ageMingi, ageAlfiya, averageAge);