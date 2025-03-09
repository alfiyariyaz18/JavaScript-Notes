// To finish this part about functions, let's review everything important that we learned so far.
// In order to make sure that you really understand functions before we move on to other topics.

// And let's start by bringing back and rewriting the function that we wrote before,
// which is the years until retirement function.


// const yearsUntilRetirement = function(birthYear, firstName){
//     const age = 2024 - birthYear;
//     const yearsLeft = 60 - age;

//     return `${firstName} has ${yearsLeft} years left until retirement.`
// }

// console.log(yearsUntilRetirement(2004, 'Alfiya'));


// Next up we could export this functionality here (const age = 2024 - birthYear;)
// into another function. because then we can do what we did in the last lecture,
// which was to call one function inside of the other function.


// const calcAge = birthYear => 2024 - birthYear;

// const yearsUntilRetirement = function(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const yearsLeft = 60 - age;

//     return yearsLeft;
//     // return `${firstName} has ${yearsLeft} years left until retirement.`;
// }

// console.log(yearsUntilRetirement(2004, 'Alfiya'));


// Now you might find it confusing that we have two different functions here
// with the same parameter name (birthYear) but that's not a problem at all.

// So the birth year in the first function is not at all related
// to the birth year in the second function. They are two completely different parameters.
// So basically two different variables.

// We could even have a variable outside of any of the functions,
// which could also be called birth year.

//  what matters here is that these parameters are really
// like a local variable to each function.

// But now I want to show you something which is to call this function again,
// let's say now with Mike, Mike was born in 1962.

// console.log(yearsUntilRetirement(1962, 'Mike'));

// And so, his years until retirement will be minus two.
// So a negative number, which means that he already retired.

// So let's quickly account for that. So what we will do is to basically return the retirement number,
// if it is above zero, and if it is below zero, we are gonna return something else like a minus one
// or something or some special number. 

// So instead of returning simply the retirement value, let's take a decision here based on the retirement value.

// So let's use an if else statement and say, if the retirement is
// greater than zero. So if there are more than zero years left until retirement
// then return the retirement value.

// So remember that in the, if block, we can put any code that we want.
// And so that includes the return statement.

// And else, let's just return always minus one. So, minus one is kind of a standard number in programming.
// So a number that shows us clearly that this has no meaning.

// And I'm returning actually numbers here and not a string as we had before,
// because that's usually what we do, especially when we actually receive a number as an input.

// So here in this function, we get birth year here as an input, and it's a number
// and therefore it's a good practice to then also return a number.


// const calcAge = birthYear => 2024 - birthYear;

// const yearsUntilRetirement = function(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 60 - age;

//     if(retirement > 0){
//         return retirement;
//     }
//     else{
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(2004, 'Alfiya'));
// console.log(yearsUntilRetirement(2008, 'Anjaly'));

// Now, we'll even change it to something more drastic. So 1950 and let's see what we get now.

// console.log(yearsUntilRetirement(1950, 'Wilson'));

// so it's minus one now. Great.


// Now, one thing that I didn't mention yet is that this return keyword here
// will actually immediately exit the function.

// So it will first return the value that we tell it to return.
// So in this case, the retirement value, and then after that, the function is done.
// So it exits immediately. And we also say that the function has returned.

// So let me actually demonstrate that to you.
// So let's log a string after the return statement.

// const calcAge = birthYear => 2024 - birthYear;

// const yearsUntilRetirement = function(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 60 - age;

//     if(retirement > 0){
//         return retirement;
//         console.log(`${firstName} will retire in ${retirement} years.`);
//     }
//     else{
//         return -1;
//         console.log(`${firstName} has already retired.`);
//     }
// }



// So in the, if block here and also in the else block.
// So what do you think is gonna happen with these console dot logs?

// console.log(yearsUntilRetirement(2004, 'Alfiya'));
// console.log(yearsUntilRetirement(2008, 'Anjaly'));
// console.log(yearsUntilRetirement(1950, 'Wilson'));


// And indeed they are simply ignored, so they will not get executed.
// Because as I said before, the return statement immediately exits
// or immediately returns the function. 

// And so therefore there is no chance that the console.log after the return statement here is even reached.
// So if we want this console.log here to execute, we need to put it before the return statement.


// const calcAge = birthYear => 2024 - birthYear;

// const yearsUntilRetirement = function(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 60 - age;

//     if(retirement > 0){
//         console.log(`${firstName} will retire in ${retirement} years.`);
//         return retirement;
//     }
//     else{
//         console.log(`${firstName} has already retired.`);
//         return -1;
//     }
// }

// So I just moved the console dot log before the return here.
// And so now there should be a chance that the console dot log
// is actually executed before the value is returned.


// console.log(yearsUntilRetirement(2004, 'Alfiya'));
// console.log(yearsUntilRetirement(2008, 'Anjaly'));
// console.log(yearsUntilRetirement(1950, 'Wilson'));

// and now it works. And now it's time to really review everything
// that we learned so far about functions.

// And here we have the three type of functions
// that we talked about. 

// So we have first, the function declaration.

// function calcAge(birthYear){
//     return 2024 - birthYear;
// }

// and one particularity about function declarations
// is that they can be used before they are declared in the code.


// Second, we have the function expression

// const calcAge = function(birthYear){
//     return 2024 - birthYear;
// }

// and they are essentially function values
// that are stored in a variable.


// And finally, we have arrow functions 
// that are in fact also function expressions, but special ones.

const calcAge = birthYear => 2024 - birthYear;

// And these are great for quick one line functions
// where we don't need to explicitly use the return keyword
// and no curly braces either. I also said that this one has no 'this' keyword,
// but more about that in one of the future lectures.


// Now what's important to note here is that these are three different ways of writing functions,
// but they all work in a similar way. So all of them can receive input data, they transform data,
// and then they can output data. 

// It's all optional, but usually that's the things that functions do.
// And no matter which type of function we use, we can always do these three things.


// And now let's zoom in a little bit further and take a close look at the structure of a
// common function, a function declaration.

// but it works the exact same way for all other types of functions again.

// So first, usually a function needs a function name. So calcAge in this example,
// then a function also has parameters. And these parameters are essentially placeholders,
// that receive input values. So these are a little bit like local variables of a function.
// So variables that are defined only inside of this very function.

// Now, as you also already know, we use functions to reuse pieces of code,
// and these pieces of code are inside the function body. So this is where the functions input data
// is usually processed and then returned.

// And speaking of the return, by the end of the function,
// we usually have a return statement, which we use to output a value from the function.

// And  the return statement  immediately terminates the function's execution.
// We also say that the function returns.

// And now about calling the function, we do that using parenthesis.
// So we write the name of the function and then with a parenthesis we call the function.

// Because without the parenthesis, the function is really just a value.
// But then with the parenthesis, we actually called a function.
// And we can also say that we run the function or invoked a function or execute a function.

// And all of these terms mean the same thing.

// Now, in this case, since the function has parameters,
// we then call the function with arguments and these arguments
// are the actual values of the function parameters.

// So we use these to input the actual data into the function.
// And we can also imagine this as replacing the placeholders that are the parameters.

// Then once the calcAge function has finally done its job, then all this expression will basically be replaced
// with the returned value. So in this case, the age that was returned here.
// And that age value is what we then store into this age1 variable.

// So we use this variable to basically save the returned value
// that was outputed from the function.


// Now just one other thing that I want to make clear is
// that this console dot log that we have in the function.
// has nothing to do with returning a value.

// This simply prints a message to the developer console,
// but it has nothing to do with returning.

// Actually the console dot log is actually just
// another function call inside the calcAge function.
// because console dot log is itself a function.

// And so the argument that we pass into the console dot log function
// is what will get printed to the developer console.

//  So just wanted to make sure that you really get this distinction
// between console dot log and return. The reason why we always use console dot log
// is because we want to see the results of our experiments in the developer console, in the browser.
