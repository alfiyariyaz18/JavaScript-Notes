// So let's explore While loop now. And to understand how the while loop works
// and the difference between the for and the while loop, let's actually go back to our first for loop lecture
// and get back the code of the weightlifting exercise.

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Weghtlifting Exercise Repetition ${rep}`);
// }


// and so let's now do the same thing with a while loop. So implementing the same with a while loop,
// we still need the same components. So we still need a counter so that we can then actually
// print the current value to the console, we still need a condition so that we know when to stop
// and we still need to increase the counter somehow.

// Now in the while loop, it works a bit differently because for the while loop,
// we can only specify a condition.

// So while(), and then just a condition is the only thing that we can specify here.

// while(rep <= 10){

// }

// So we want to keep the loop running while repetitions is less or equal 10.
// And that's actually why this loop is called while. So again, it's called the while loop
// because it will run while the condition given inside is true.

// But now we need to kind of manually, so more explicitly define the other two components
// So the repetitions and the increasing of the counter.

// And so we need to do that basically outside. So we start at the beginning with rep equal one,
// then we have the condition, then let's put the code that we want to execute
// and then at the end of the iteration, we will then increase the counter.
// So at the end of the iteration is basically the end of the code block

// let rep = 1;

// while(rep <= 10){
//     console.log(`Weghtlifting Exercise Repetition ${rep}`);

//     rep = rep + 1;
// }


// So this all means that the while loop is more versatile than the for loop,
// which means that it can be used in a larger variety of situations.
// And that's because it does not really need a counter. So you put the counter here because we need it
// for this specific use case.

// But all the while loop really needs is the condition which needs to stay true for it to keep running.
// And that condition can be any condition, it doesn't have to be related to any counter at all.
// And sometimes that's exactly what we need to solve a certain problem.
// So a problem without any counter, so without a number that is increasing.

// And so let's create such an example here.
// now we will do a simple example that does not depend on a counter,
// but instead it will depend on a random variable.

// So what we're gonna do is to basically roll a dice and then keep rolling the dice until we roll a six.
// And then when we roll a six, we stop. So essentially we will want to keep running the loop
// while the rolled dice is different from six.

// And so in this case, we do actually not know beforehand
// how many times the loop should run. And so we don't need a counter variable
// and that's exactly the use case of a while loop.

// So let's start by creating that random number. And so the roll of a dice is a number between one and six,
// the way that we implement this does not matter at this point, okay.
// We will learn more about random numbers at a later point.

// So we're using Math.random, and this will create a number between zero and one,
// then we multiply that by a six, 

// let dice = Math.random() * 6;

// but this is gonna be a decimal number

// console.log(dice);   //  5.3167235005435325

// and so now we need to get rid of this decimal part.
// And so that we using Math.trunc.

// and so this will give us a number between zero and five
// and then we add one and get one to six.

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// don't worry about the implementation of this
// at this point, we will do this again later.

// But what matters here is that as we reload the page,
// we get a random number here that is different every time.

// So again, we want to keep running the loop until we roll a six.
// So until this dice variable here holds the value of six.

// And so the condition of the loop is now gonna be, dice different from six.
// And as soon as the value is six, it will stop.

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
// }

// right now we are only creating one dice value.
// So again, we are only creating one random number between one and six here.
// And if that's different than six, this loop here will run.
// But right now the loop would then run forever, So this would be called an infinite loop.

// and we don't want that. So what we will do is to keep creating new dice values.
// And so we are gonna reassign this value at the end of each iteration.

// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }

// let's analyze what happened here. So we start with some random dice number
// and then here we check if that dice is different from six. And apparently it was different,

// and so then we entered the loop, which then logged, 'You rolled a 2'.
// So my first random number was two. Then in the next line we created a new random number
// and then the loop run again. So again, this condition was tested.
// So is the dice different from six, and apparently it was, and so we entered the loop again.
// And so it printed, 'You rolled a 1'. And then the next dice was a five,

// and then the next one was a four. But then apparently the next dice
// that was rolled here was a six. So at the end of this iteration here,
// this dice value was a six. And so then in the next iteration,
// the condition is no longer true and the loop stopped.

// And let me actually write one more line of code here
// in which we can say, if dice is 6 then log,
// 'Congrats you rolled a 6 and the loop will now stop'.
// And so this way we can know when a six happenes.

// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;

//     if(dice === 6){
//         console.log(`Congrats you rolled a ${dice} and the loop will now stop`);
//     }
// }

// And so the conclusion of this is that the while loop does really not have to depend on any counter variable.
// So whenever you do need a loop without a counter, you can reach for the while loop.

// So basically that happens whenever you do not know beforehand how many iterations the loop will have.
// So in that situation the while loop is the right tool for the job.

// Now, on the other hand, when we do know how many times the loop will run,
// that means that we're gonna actually need a counter. For example, when we want to loop over an array,
// we already know how many elements that array has, and so we know how many iterations we will need.
// And therefore the for loop is usually the right choice to loop over an array.

const alfiya = [
    'Alfiya', 
    'Riyaz',
    2024 - 2004,
    'programmer',
    ['Mike', 'Sam', 'John']
]

let i = alfiya.length - 1;
while(i >= 0){
    console.log(alfiya[i]);
    i = i - 1;
}