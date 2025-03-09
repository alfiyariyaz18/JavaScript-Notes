// So we learned about function declarations and expressions in the last video
// but there is actually a third type of function that was added to JavaScript in ES6
// and that's the arrow function.

// And an arrow function is simply a special form of function expression that is shorter
// and therefore faster to write.

// So let's actually get back this function expression from the previous lecture.
// just so that we have a comparison.

// Function Expression

const calcAge1 = function (birthYear){
    return 2024 - birthYear;
}

const age1 = calcAge1(2004);
console.log(age1);

// And so now let's write the arrow function. So again, we want the birthYear
// because we want to calculate the age again and then we write an arrow
// and that's the reason why this function is called arrow function.
// And then we simply write what we want to return.

// So in this case, that's 2024 minus the birthYeah and that's it.

// Now, to finish, we actually want to be able to use this function.
// So let's again store it in a variable, just like we did with the function expression.

// And now to use this function, it, works the exact same way
// as using all the other functions. So we call calcAge2
// just like we called the other calcAge functions.

// And again, we save the returned value here to a variable 
// and then let's just check it out in the console.

// Arrow Function

const calcAge2 = birthYear => 2024 - birthYear;
const age2 = calcAge2(2004);

console.log(age2);

// So this is a special form of a function expression 
// because it still is a function expression actually.

// So all of this is a value:  birthYear => 2024 - birthYear;
// that we assign to this variable:  const calcAge2

// So just like this function expression up here. But this one, as you see,
// is a lot easier and faster to write.

// The first reason for that is that we don't need the curly braces,
// like we have here, to define a code block.

// And second is that the return actually happens implicitly.
// So this value here (2024 - birthYear) will automatically be returned
// without us having to explicitly write the return keyword.

// So this is excellent for simple one-liner functions. And you will see throughout the course
// that this is gonna be extremely helpful in certain situations.


// Now, this is actually just the simplest form, which is when we only have exactly one parameter
// and only basically one line of code in which we want to return something.
// But it gets a little bit more complex when we add more parameters or more code.


// So let's now write another function

// And so let's say that we want to calculate how many years a person has left until retirement.
// So let's call this function yearsUntilRetirement. And then we set that equal to a function.
// And once again, let's pass in the birthYear. Then the arrow again

// but now, here we need some more code because to calculate the number of years
// until the retirement based on the birthYear alone, we first need to calculate the age,
// and then from there, we need to calculate the retirement age minus the current age.

// So we need more lines of code and so we are back to actually needing the curly braces
// in order to define a code block.

// So calculate the age based on the birth year. And then calculate the years left until 
// retirement and then return that value. And now to return this retirement,
// we actually need to write the return keyword explicitly. So we can only omit the return here
// in case we have a one-liner function.


// const yearsUntilRetirement = birthYear =>{
//     const age = 2024 - birthYear;
//     const yearsLeft = 60 - age;
//     return yearsLeft;
// }

// console.log(yearsUntilRetirement(2004));

// So that's the scenario when we have one parameter and then more than one line of code basically.
// And remember, in that situation, we need the return statement here.

// But now, what if we had multiple parameters? Well, then we need
// to wrap the parameters here into parentheses.

// So let's say we want the birthYeah but also the firstName
// so that we can return something else, like a sentence.


const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2024 - birthYear;
    const yearsLeft = 60 - age;
    return `${firstName} has ${yearsLeft} years left until retirement`;
}

const retirement = yearsUntilRetirement(2004, 'Alfiya');
console.log(retirement);

// Great, and that's essentially how the arrow functions work.