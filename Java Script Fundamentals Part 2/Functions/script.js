// The fundamental building block of real world JavaScript applications are functions.
// They are one of the most essential concepts in the language

// So what actually are functions?
// a function is simply a piece of code that we can reuse
// over and over again in our code.

// So it's a little bit like a variable but for whole chunks of code.
// a variable holds value but a function can hold one or more complete lines of code.

// So let's now declare our very first function

// so we start with the function keyword and then we define a function name
// We will call this one logger and then we need parenthesis
// and then we use the curly braces to create the so-called function body.

// So all the code that is within this block of curly braces
// is called the function body and it's this code that will
// be executed when we run this function.

function logger(){
    console.log('My name is Alfiya');
}

// and so somewhere in our program we needed to reuse this line of code here ('My name is Alfiya')
// multiple times and so that's why we put it in a function.

// now we can use this function as many times as we want.
// So to use the function, we simply write the function name
// followed by a parenthesis and that's actually it

logger();
logger();
logger();

// and this process here of basically using the function is called 
// invoking the function, running the function or calling the function.

// we can now use or call or run this function as many times as we want
// and each time that we call the function like this
// then the code that is in the function will get executed.

// As a result of calling the logger function 3 times
// we get this 'My name is Alfiya' log three times.


//  let's now take it to the next level and really use some more functionalities of functions
// because they can do a lot more than simply reusing a line of code like we did earlier.

// So a function cannot only reuse a piece of code but it can also receive data and return data back.


// so for example, let's imagine a food processor,
// so we put food into the processor, then the processor does something to our food
// which is the function body basically.

// and then in the end the food processor returns the processed food,
// for example, a juice

// and so that's exactly what we can do with functions as well.

// and actually let's implement exactly this example.

// So, again, we need to use the function keyword and then we choose a function name
// and just like with variable names we should choose descriptive function names
// so that we know exactly what they do.

// So let's call this one a fruit processor but in this function
// we also specify something called parameters and parameters are like variables
// that are specific only to this function and they will get defined once we call the function.

// So let's give this fruit processor function two parameters, apples
// and then a second one separated by a comma called oranges
// and again these two will get defined once the function is called.

// and they represent the input data of this function.


function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `A juice with ${apples} apples and ${oranges} oranges.`

    // with return keyword, we can return any value from the function and so let's 
    // actually return the juice that we just produced.

    return juice;

    // and so this value that we then return can be used anywhere later in our code.
    // So basically this Juice will become the result of executing this function.
}

// So let's call or run or invoke this function now

// and now we're gonna specify the actual values for the parameters, apples and oranges
// and so let's say for example, five apples and zero oranges,

// And so these now will be the inputs of the fruit processor function.
// So you can think of these parameters here like empty spaces that we still need to fill out
// when we are calling the function and when we call the function, then later in the code
// here at this point, we then filled these blank spaces by passing in the real specific values.
// which will then get assigned to the parameters.

// and in this example, apples will become five and oranges, which is the second parameter here
// will become zero, and these actual values here of the parameters are called the arguments.

// fruitProcessor(5, 0);    //  5 0

// and we get 5 and 0 in the console which we loged in the function
// now to get the juice that we just returned, we will have to store the fruitprocessor 
// function into a variable and then log that variable to the console. 

// because the value that we return inside the function gets replaced to the function itself.

// so in this case   --->   juice = fruitprocessor()

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// We can also directly log the function to the console without storing it into a variable.
// So basically without capturing the value anywhere and simply loging it.

console.log(fruitProcessor(5, 0));

// Okay, and now thanks to the power of the function
// we can reuse the function with different input values and then get a different output.

// Example:
const appleOrageJuice = fruitProcessor('three', 'four');
console.log(appleOrageJuice);


// So as a conclusion to this lecture, we can say
// that functions allow us to write more maintainable code
// because with functions we can create reusable chunks of code
// instead of having to manually write the same code over and over again.


// and by the way, you can now understand
// that console.log() here is actually also just a function.

// but a built in function that we do not have to write ourselves
// but you see that we just call it like our own functions.
// So we call it using the parenthesis here and then we pass in a value.


// and the same is true for the function that we used to convert a string to a number.
// So this is another built in function that takes this 23 string in this case as a parameter.

Number('23');

// So we pass this argument into the function and this function will then be executed
// and return the string as a number and then we can save that like we did before.

const num = Number('23');


// My Function  (To log a single value)

function log(value){
    console.log(value);
}
log('Alfiya');

const firstName = 'Ateez';
log(firstName);

const num1 = 5;

if(num1 < 10){
    log(num1);
}
