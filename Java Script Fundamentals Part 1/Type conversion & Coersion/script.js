// In this session, we need to go back to value types. So types are one of the fundamental aspects
// in programming, and converting between types is something that we do in every programming language.
// For example, converting a string to a number or a number into a Boolean
// is something that we do all the time.

// Now, in JavaScript, there is type conversion and type coercion.
// So they sound very similar but are different. So type conversion is when we manually convert
// from one type to another. One the other hand, type coercion
// is when JavaScript automatically converts types behind the scenes for us.

// So that's necessary in some situation but it happens implicitly, completely hidden from us.


// So let's start with type conversion, which remember, is when we explicitly want
// to convert from one type to another.

// So let's say that we have an input field on a web page for the user to input their birth year.
// And these inputs from input fields usually come as strings. So let's say that the inputYear that we get
// from the user interface is a string with the value 2004.

const inputYear = '2004';

// But now if we want to do some calculations with this, this won't really work.
// So let me show that to you.

// So console.log. Let's say inputYear, and now plus 18.
// And so like this we can calculate in what year the person will become of full age.

// Now, remember that when we have a string and add something to the string,
// it will basically concatenate the strings.

// So we can't expect that this actually adds 18 to this number here because it's a string.

console.log(inputYear + 18);  // 200418

// And so indeed, we now get the string, which basically contains the 2004 string
// and then the 18 as well. So we need a way of fixing this,
// which means that we need a way of converting this string to a number.

// And then the way we convert this string to a number is by using the built-in Number function.
// So we write number, then parenthesis, and then inputYear.

console.log(Number(inputYear) + 18);

// And we will learn exactly what a function is and why it works this way in the next section.
// For now, just know that we can basically convert strings to numbers by using this function.

// Okay, but now one thing that's really important to note here is that the original value
// is actually not converted. So the inputYear variable itself,
// is still a string, right? It still holds the variable 2004
// as a string and not as a number.

// That's why down here in this log, where we do this calculation,
// the result is still this string because again, the original inputYear variable
// is still a string.

console.log(inputYear + 78);

// Using this number function will simply give to us a converted version.
// So if you want to perform this calculation, we need to use Number here as well.

// And so this will now convert the number and then to that number, the 78 will be added.

console.log(Number(inputYear) + 78);


// But now what if we're trying to convert something to a number that is impossible to convert?
// Let's try that with a string that doesn't really contain a number.

// So let's try to console.log converting to a number the string 'Alfiya.
// So JavaScript will look at the string, will try to convert it to a number
// but it won't really work.

console.log(Number('Alfiya'));

// So what do we get instead? We get this NaN, which stands for not a number.
// So JavaScript gives us this not a number value whenever an operation that involves numbers fails
// to produce a new number. So basically, not a number actually means invalid number.

// So we can check the typeof NaN.

console.log(typeof(NaN));

// the weird result of this is that the type of not a number is actually number
// and so again, not a number actually means an invalid number. It's still a number somehow
// but it's an invalid one.

// And so again, we get not a number whenever an operation involving numbers fails
// to give us a new number.

// Okay, so that is converting strings to numbers but, of course, we can also do the opposite.

// It's a little bit less important I would say but I still want to show it to you.

// So to do it the other way around, we use this String function.

// Just keep in mind that we need to really start it with a capital S, just like here the Number function needs
// to start with a capital N. Otherwise it's not gonna work.

console.log(String(25));

// So we get 25. And remember that whenever the value here is Black,
// then it means it is a string.

// So it looks kind of the same. Let's again log both just to make this point.

console.log(String(25), 25);

// So the purple one is the value that actually has the number type
// and the black one has the string type.


// Now, JavaScript can only convert to three types.
// So we can convert to a number, to a string or to a Boolean.

// But we cannot, for example, convert something to undefined or to null.

// Now, here we only converted to numbers and to strings but not to Booleans.
// And that's because Booleans behave in a special way.

// And for that reason, there is a separate lecture coming up on so-called truthy and falsy values.

// Great, so that is type conversion where we do manually convert from one type to another.

// However, in practice, we rarely have to do it manually
// because JavaScript actually does type coercion automatically for us in many situations.
// So let's talk about that now.


// Type coersion
// -------------------------------

// So basically, type coercion happens whenever an operator is dealing with two values
// that have different types. So in that case, JavaScript will then, behind the scenes,
// convert one of the values to match the other value so that in the end,
// the operation can be executed.

// And actually, we already saw that happening if you think about this.

// So let me show that to you, starting with strings. Remember how we did this.

console.log("I'm " + 19 + " years old.");

// So we already know that this is gonna produce a string that says I'm 19 years old.

// But how does that actually work? Because 19 is a number.
// So we have different types here, right?

// We have a string, a number and another string.

// And it works this way because of type coercion. So in JavaScript, the plus operator
// that we used here triggers a coercion to strings.

// And so whenever there is an operation between a string
// and a number, the number will be converted to a string.

// So thanks to type coercion, writing this would be exactly the same as writing this.

console.log("I'm " + '19' + " years old");

// Because again, the plus operator will convert numbers to strings.
// and the same actually happens in template literals.
// It also takes all the number values and also converts them to strings.

console.log(`I'm ${19} years old`);

// Now, if JavaScript did not have automatic type coercion,
// like many other languages don't, then we would have to manually do this
// like we just learned before.

// Then we would have to do String(19) and then this would be the only way that this would work.

console.log("I'm " + String(19) + ' years old');

// But luckily for us, JavaScript has type coercion
// and so this will happen completely automatically behind the scenes.


// Now, actually not all the operators do type coercion to string.
// So let me show you something else.

console.log('23' - '10' - 3);   // 10

// and it gives us 10. So what happened here?
// It looks like this time JavaScript converted the strings to numbers.

// And indeed, that's why we get 10 because 23 minus 10 is 13 minus 3 is 10.

// And so what this means is that the minus operator actually triggers the opposite conversion.
// So in this case, strings are converted to numbers and not the other way around.

// So instead if we use the plus, what do you think is gonna happen? 
// Then the three is converted to a string and then the three strings are concatenated.

console.log('23' + '10' + 3);


// So this is a very important distinction to keep in mind
// because this actually confuses many JavaScript beginners when they don't know about this.

// So let's try another one here

console.log('23' * 2);  //46

// And again, you see that these values are converted to numbers.
// And indeed, that's why we get 46

//  because that's the only way that the multiplier operator can work.
// And the same, of course, is true for dividing.

console.log(23 / '2');

// Okay, so I hope that the distinction between type conversion and type coercion is now pretty clear.
// And now just to make sure that you actually got it, let's play a game called guess the output.

let n = '1' + 1;  // '11'
console.log(n);

n = n - 1;     // 11 - 1
console.log(n);

console.log(2 + 3 + 4 + '5');   // '95'

console.log('10' - '4' - '3' - 2 + '5');  // '15'

// Now, many people actually don't like type coercion and think that it's a bad practice
// to rely on type coercion. One reason for that is that type coercion can, in fact,
// introduce many unexpected bugs into our program. However, this only happens when we don't really know what we're doing.

// So when we don't know about the stuff that I just showed you because if you know, then it's way easier
// to avoid these errors.

// So in my opinion, coercion is actually a great mechanism that is gonna allow us to write a lot less code
// and also to write more readable code. So really make sure to take some time to understand how type coercion works
// and then just embrace it in your code.


