// When we talked about the if else statement, I mentioned that it's a control structure,
// and also that there are more control structures, Well, one of the other control structures are loop.

// loops are a fundamental aspect of every programming language, because they basically allow us
// to automate repetitive tasks. So, tasks that we have to perform over and over again.

// And here, Let's use the analogy of a gym. So when you go to a gym, you might, for example,
// lift weights. And let's say that you do 10 repetitions of a certain weight lifting exercise.

// So we could represent that, by coding something like this.

// console.log("Lifting weights repetition 1 🏋️."); 

// And remember, we want 10 repetitions. So we would have to paste this code here 10 times.

// console.log("Lifting weights repetition 2 🏋️."); 
// console.log("Lifting weights repetition 3 🏋️."); 
// console.log("Lifting weights repetition 4 🏋️."); 
// console.log("Lifting weights repetition 5 🏋️."); 
// console.log("Lifting weights repetition 6 🏋️."); 
// console.log("Lifting weights repetition 7 🏋️."); 
// console.log("Lifting weights repetition 8 🏋️."); 
// console.log("Lifting weights repetition 9 🏋️."); 
// console.log("Lifting weights repetition 10 🏋️."); 

// you can start to guess that this is probably not a best practice, just imagine
// that we had 30 repetitions instead of just 10.

// And then if we wanted to, for example, change some word here in the string, then we would have to change
// that in all of them. So, this really violates the don't repeat yourself principle.

// Because we're basically repeating the same code here 10 times, and all we're changing
// is just the number.


// So instead of doing all this, we can now create a loop, and then put one of these lines of code in there.
// And the loop will then run that code over and over again, until we tell it to stop.

// And so let's implement a so called for loop now. And that's a loop, which has a counter.

// we simply write for and open parenthesis. So a little bit like the if statement.
// And this is a for statement. And so it looks similar.

// for()

// The first part is the initial value of a counter. And in the case of this current example, the counter is
// the value that will start here at number one, and go all the way to number 10.

// So let's call this counter rep, which stands for repetition. And so here, we literally create a variable called rep.
// And we started at one, because well, that's our first repetition.

// and here, we need to use a let variable because this counter will later be updated by the for loop.
// So that's the first part of the for statement,

// for (let rep = 1)

// then we use semicolon and go to the second part. And the second part, is a logical condition
// that is evaluated before each iteration of the loop. So before each time, that the code in the loop is executed.
// it checks if our current counter satisfies the condition given here.

// for (let rep = 1; rep <= 10)

// So our condition will be rep needs to stay below or equal 10.
// So again, this condition that we just described here, will be evaluated before each iteration of the loop.

// Now, if the condition is true, then the next loop iteration will run.
// But as soon as this condition is false, then the loop stops. And so no more code will then be executed.

// So basically, the loop will keep running while the condition stays true.


// I hope it makes sense that we have this condition, because in each iteration of the loop,
// the rep counter will get increased. And so at a certain point it will reach 10.

// And with 10 just condition is still true. So 10 is still less or equal than 10.
// But then, after that it will be 11. And so then repetition is no longer, less or equal 10.

// And then the loop will stop. And at that point, we will have printed
// these 10 strings, basically.

// So, speaking of increasing the counter, that is actually the third part of the for statement.
// So, another semicolon here. And now here, we actually update the counter after each iteration.

// So that's necessary, because right now, the counter would just stay at one forever.
// And so this condition here would never be false. And so what we do here, is to now increase the counter
// by one after each iteration. So, we can say rep equal rep plus one. (rep = rep + 1 OR rep++)
// And so this will take the rep value, and increase it by one.

// for (let rep = 1; rep <= 10; rep++)

// Alright, and now all we have to do, is to write the code that we want to be repeated.


// for (let rep = 1; rep <= 10; rep++){
//     console.log("Lifting weights repetition 1 🏋️."); 
// }


// And indeed, we see that the string was printed 10 times, that's what this 10 here stands for.
// So the developer tools will not print the same string 10 times, it will simply put this 10 here.
// But what matters, is that this logic here actually worked.

// So now, let's actually use this counter variable that we created here, to actually increase the number
// in the string that we're printing out.

for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️.`); 
}

// And now we get exactly what we wrote here manually in the beginning, alright?
// So that works.

// We can start the repetition that's the rep value from any number
// not necessary it should start from one, it can also start from 0 and negative numbers.