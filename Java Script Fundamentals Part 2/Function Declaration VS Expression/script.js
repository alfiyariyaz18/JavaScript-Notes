// Now in JavaScript, there are different ways of writing functions.
// And each type of function, works in a slightly different way.
// But they're still all very similar.

// So the functions that we learned in the last lecture are called function declarations
// because we simply use the function keyword to declare a function a bit like we declare a variable.

// So let's now write another function declaration. And this time a function to calculate an age
// based on a given birth year.

// we want a person's birth year as an input to this function.
// And what is an input? Well, it's just a parameter in this function.
// And the parameter it's a bit like a local variable, that's only available inside of this function.


function calcAge1(birthYear){      
    const age = 2024 - birthYear;
    return age;

    // So we calculate the age first and then we return that value. And actually we can simplify this
    // and basically return all in one go.

    // return 2024 - birthYear;

    //  So there's actually no need to store this value here
    // in a variable, if all we do is then later return that value.
}

const age1 = calcAge1(2004);
console.log(age1);

// And so once again, this is a generic function,
// which is then gonna work for any birth year that we give it.


// now let's create a function expression. So that's the other type of function that exists.
// In function expression,  we simply write function basically without a name
// and then we still define the parameter, we still define the function body,

// and then what we have to do is to store all of this here into a variable
// and that variable will then be the function.

const calAge2 = function(birthYear){
    return 2024 - birthYear;
}

console.log(typeof(calAge2));

// So again, we did write the function in a very similar way, but we didn't give it a name here,
// so it's a function without a name basically, which is also called an anonymous function.
// So all of this here is basically an expression and remember that an expression produces a value.
// And so we use that value and store it into calcAge2 and this will then be the function.

// Now to call this function, we actually do it in the exact same way
// as function declaration.

const age2 = calAge2(2004);
console.log(age2);
console.log(typeof(age2));

// So the functional expression works the exact same way as the function declaration.
// So we call it in the same way we capture the return value in the same way
// and then of course the result is also the same because the function body is the same.

// And it's very important to know that we have these two type of functions in JavaScript.

// functions are actually just values. So a function is not a type.
// And so if it's a value, we can store it in a variable.


// So what's the big difference between function declarations and function expressions?

// Well, the main practical difference is that we can actually call function declarations
// before they are defined in the code.


// Function Declaration
alfiya();

function alfiya(){
    console.log("Hi I'm Alfiya");
}

// The above code gives the output 'Hi I'm Alfiya' in the console.


// Function expression
// alfiya2();

// const alfiya2 = function(){
//     console.log("Hi I'm Alfiya");
// }

// The above code gives an error Uncaught ReferenceError: Cannot access 'alfiya2' before initialization
// and internally this happens because of a process called hoisting
// but more about that in a future section.

