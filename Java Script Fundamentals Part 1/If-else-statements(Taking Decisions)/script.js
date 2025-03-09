// Let's now make coding even more fun and actually take decisions with our code
// to make it look a lot more real.

// So let's say it that we want to write a program which checks whether a person
// is allowed to start taking a driver's license or not. And if she is, then it will print that to the console.
// And if not, it will print how many years are left until the person can start taking the driver's license.

//  create a varaible age = 19

// const age = 19;

// So remember to check if the age is at least 18, we need it to be greater or equal than 18.
// And so this will then include 18. So if the age is 18, the result of this operator here
// or of this operation will then be true. Only if the age is 17 or 16 or anything below,
// it will turn out to be false. 

// const isOldEnough = age >= 18;

// So we have a Boolean value now, and we can use this to take decisions using an 'if statement'

// All we have to do is write 'if' then open parenthesis and then in here goes a condition that is evaluated.
// And if this condition turns out to be true, then this block will be executed.
// So basically whatever code that we write into this block, which is denoted by
// these curly braces will be executed whenever the condition that's here is true.

// So in this case, let's put the condition, and with condition I basically mean something
// that is a Boolean value. So let's use, 'isOldEnough' variable here.

// if (isOldEnough){
//     console.log('You can start your divers liscence 👍.');
// }

// Save and check the console and we got the output because the age is 19.

// And so if 'is old enough' is true then this block of code here will be executed
// which in this case is just one line but it could of course be multiple lines.

// now change age to 15
const age = 15;

// And so now this isOldEnough false. And so then this code block here should not be executed.
//And indeed we get no output this time. And so that means that it worked.

// we usually write the condition directly in the if block so lets try that way

if (age >= 18){
    console.log('You can start your divers liscence 👍.');
}

// and in this way since the there is no output lets write an else statement which will be 
// executed when the if block condition is false.

// we will calculate how many years are left for Sarah to start taking her license.
// So let's calculate that, 'years left'. And so that's simply, 18 minus the age.

else{
    const yearsLeft = 18 - age;
    console.log(`You are too young wait another ${yearsLeft} years 👎.`)

    // or you could also directly calculate inside the console.
    console.log(`You are too young wait another ${18 - age} years 👎.`);
}

// so again when the if block is false it will execute the else block

// Just keep in mind that this 'else' block is actually optional, right?
// So in the beginning we didn't have this 'else' block and it still did work.

// So when there is no 'else' block, JavaScript will then simply move on to the next line
// after the, 'if' statement in case that the condition is false.


// Now what we have here is 'if', 'else' statement, the official name
// of this kind of construction here, is called a control structure.

// So basically this  structure here is called an 'if', 'else' control structure.

// if(){

// }

// else{

// }


// and it is called a control structure because this structure actually allows us
// to have more control over the way that our code is executed.

// For example, in this previous, 'if', 'else' statement
// the whole code does not just execute in a linear way. So JavaScript does not execute
// all of this code there, linearly.

// Instead we can now control blocks of code that should execute
// and blocks that should not execute.And so again that gives us a lot more control
// over how our code works and that's why this is called a control structure.

// And there are other control structures that we're gonna go into a bit later. 

// Now just to make sure that you really understood this concept
// let's create another, a very small and simple example here.

// const birthYear = 2004;

// And so now what we want to do is to create a variable called 'century'
// which will basically contain the century in which this person was born.
// So in this case, it was the 20th century. But for example, if the person was born
// in, like, let's say 2015, then it would be the 21st century.

// So to do that, we can, of course write an 'if', 'else' statement,

// if (birthYear <= 2000){
//     // And this time let's actually create a variable conditionally and not just always use 'console.log'.
//     let century = 20;

// }else{
//     let century = 21;
// }

// Now to actually make this work we need to define the century variable outside
// of the, 'if' or 'else' blocks. We will go deeply into why that is
// but for now, what you need to know is that this is because a variable that we define
// inside of any code blocks will not be accessible outside of the block.

// So let me just show that to you very quickly. So if I try to read 'century' now, then I will get a
// an error here, you see, century is not defined.

// console.log(century);

// And so what we need to do is to define 'century' outside and simply leave it empty.
// And then in here we can then conditionally reassign it.

// Final code

const birthYear = 2004;
let century;

if (birthYear <= 2000){
    century = 20;

}else{
    century = 21
}

console.log(century);  // 21


//  let's quickly recap. We can take decisions using code,
// using the, 'if', 'else' statement. And for that we write 'if', and then we open apprentices
// and in there we need a condition and the condition is essentially
// any code that returns a true or a false value.

// Then if the condition is true, the if block will be executed.
// so all the code that is in there no matter how many lines of code there are.

// Now, if the condition turns out to be false then this 'else' block will be executed instead.
// So JavaScript will then skip this first block and go to the second block.

// but the 'else' block is actually optional. So if you don't have the 'else' block
// then simply no code will be executed. And this in a nutshell
// is how the, 'if', 'else' statement works.