// In this lecture, you're gonna learn how to retrieve data from objects
// and also how to change data in objects, using both the dot and the bracket notation.

// So let's actually get the object from the previous lecture.

const alfiya = {
    firstName: 'Alfiya',
    lastName: 'Riyaz',
    age: 2024 - 2004,
    job: 'Programmer',
    friends: ['Mike', 'Steve', 'John']
}

// Let's log it to the console

console.log(alfiya);
// {firstName: 'Alfiya', lastName: 'Riyaz', age: 20, job: 'Programmer', friends: ['Mike', 'Steve', 'John']}

// So all it shows us it's really the same object that we just wrote in code.

// Now the first way of getting a property from an object is by using the dot notation.
// so let's say we want to get the last name. So all we have to do is write
// alfiya dot last name and that's it. 

console.log(alfiya.lastName);   // Riyaz

// And this dot here is actually an operator which will go to this object alfiya and then 
// retrieve the property with the name that we specified here, which in our case is lastName.

// Now we can do the exact same thing using the brackets notation, which is the second 
// way of getting a property from an object.

// So alfiya, and then we use brackets in a similar way in which we retrieve data from an array,
// but here we need to specify a string with the property name. So with the key, 
// so let's do lastName again.

console.log(alfiya['lastName']);   // Riyaz

// Now, the big difference between these two  is that in the bracket notation,
// we can actually put any expression that we like.

// So let's actually try that and imagine that we had a variable in which we store the repeating part
// in firstName and lastNname. So we have Name here in both,
// and so let's store just that inside of a variable.

const nameKey = 'Name';

// And now we can use that variable to get both the first and the last name.

console.log(alfiya['first' + nameKey]);
console.log(alfiya['last' + nameKey]);

// And here we could have built this string using a template literal,
// but in this case it's not really necessary.

// And doing something like this is more common than you might think
// and so that's why it's important that we understand that in the square brackets,
// we could put any expression.

// Now the same thing would not work with the dot operator or the dot notation.
// so let's try that

// console.log(alfiya.'first' + nameKey);   // Uncaught SyntaxError: Unexpected string

// So while using dot notation we should write real final property name and not the computed property name.

// And now to make the need for the bracket notation even more clear, let me show you another example,

// So let's say that we don't know yet which property we want to show,
// and instead we get this information from some user interface
// so, for that we can use the prompt function. and prompt is yet another built in function
// that is built into JavaScript.

// const interestedIn = 
// prompt('What do you want to know about Alfiya? choose between firstName, lastName, age, job and friends.');

// And to start, let's just log this 'interestedIn' value to the console.

// console.log(interestedIn);  

// In the console we get a pop up with the string written inside the prompt function and
// an input to enter the user input. And whatever value the user types inside the input field
// it will then get stored inside the variable as a string

// eg: if the user types age, then the variable interestedIn will get the value  
// 'age' as a string .

// now if you need the real value of age, which is the real age of alfiya.
// So how will we do that? Can we use the dot notation?

// console.log(alfiya.interestedIn);   //  undefined

// And we get undefined and this is something new.
// And so undefined is what we get when we try to access a property
// on an object that does not exist.

// So alfiya does not have a property called 'interested in',  And so therefore the result
// of trying to access 'interested in' on alfiya is undefined.

// Now, what we need to do here is instead of the dot notation, use the brackets notation,
// because then we can put any expression here, which in this case will be interested in.
// And so JavaScript will now replace 'interested in' with the actual value of the variable

// and then that's the one that will be looked up on the alfiya object.

// console.log(alfiya[interestedIn]);  //  20

// and now when I say age, we get a correct result, great.
// And I hope that you did understand the big difference between using the dot notation
// and the bracket notation.

// Now, of course, we can also pass in something thats not present in the alfiya object
// using bracket notation and we will get undefined.

// console.log(alfiya['location']);  // undefined

// So let's actually handle that using some knowledge that we already have.
// So we know that undefined is a false value, And so we can use that to our advantage now
// and create some logic that we'll print a custom string whenever the user tries to access
// a property that doesn't exist.

// So let's do that.

// if (alfiya[interestedIn]){
//     console.log(alfiya[interestedIn]);
// }
// else{
//     console.log('Wrong request, choose between firstName, lastName, age, job and friends.')
// }

// And now that you know how to retrieve elements from an object, let's also learn how to use both the dots
// and the brackets notation to add new properties to the object.

// So all we have to do is alfiya dot and now let's actually use location
// and set it equal to something.

alfiya.location = 'India';
alfiya['instagram'] = '@alfiya_riyaz';

// And now just to see that it worked, let's log it to the console

console.log(alfiya);

//  now we have the location and the instagram as well in the  alfiya object.
// And of course in the bracket notation (alfiya['   ']) we could put any expression just like before.


// Now, finally, I have one small challenge for you
// And so what I want you to do is to write a sentence
// like this one, but in a dynamic way.

// 'Alfiya has three friends and her best friend is called Mike'.

console.log(`${alfiya.firstName} has ${alfiya.friends.length} friends and her best friend is called ${alfiya.friends[0]}` );