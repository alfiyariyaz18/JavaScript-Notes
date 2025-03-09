// So, we talked about type conversion and coercion to numbers and to strings,
// but I didn't mention booleans yet, right? That's because we need to learn the concept
// of truthy and falsy values first.

// So, falsy values are values that are not exactly false, but will become false when we try to convert them
// into a boolean. And in JavaScript, there are only five falsy values.
// And let me actually write them down here for you.

// 0, '' (empty string), undefined, null, NaN (not a number)

// Of course, false itself is already false,
// so we don't need to include it in the list of falsy values.

// So again, all of these five values will be converted
// to false when we attempt to convert them to a boolean.

// They're not exactly false initially, but they will become when converted to a boolean.
// So, that's the definition of falsy values. 

// Everything else are our so-called truthy values.
// So, values that will be converted to true, for example, any number that is not zero or any string that is not
// an empty string will be converted to true when we attempt to convert them to a boolean.

// console.log(Boolean(0));   //false
// console.log(Boolean(undefined));  //false
// console.log(Boolean('Alfiya'));  //true
// console.log(Boolean({}));   //true  // empty object,  we'll learn about objects in the next section
// console.log(Boolean(''));   // false
// console.log(Boolean(' '));  //true
// console.log(Boolean(NaN));   //false
// console.log(Boolean(null));  //false

// So, that's what truthy and falsy values are. And this is how we could convert them to booleans.

// But in practice, I actually never did this in my life. I never used this function here in practice.
// This was just to show you the concept of truthy and falsely values.

// So in practice, the conversion to boolean is always implicit, not explicit,
// or in other words is always type coercion that JavaScript does automatically behind the scenes.

// But when exactly does JavaScript do type coercion to booleans?
// Well, it happens in two scenarios. First, when using logical operators, and second in
// a logical context, like for example, in the condition of an if else statement.

// And we're gonna talk about logical operators in a future lecture, so let's now go back
// to the if else statement and see how type coercion works in the if else condition.


// So, let's say that we have a money variable and in the beginning we don't have any money.
// So, we set it to zero here. And now we can use what we just learned to test
// if the person has currently any money or not, right?

// const money = 0;
// if(money){
//     console.log("Don't spend them all");
// }

// else{
//     console.log("you should get a job");
// }


// So, indeed we got the you should get a job, and so that's the else part here, right?
// So, this here is the code that got executed, but why? Well, we know that money is a number right now.
// And this number is zero, but in the logical context of an if else statement condition,
// so that's right here in these parenthesis,

// here JavaScript will try to coerce any value into a boolean. So, no matter what we put here, if it's not a boolean,
// JavaScript will try to convert it to a boolean. And that happens using the truthy and falsy value rules
// that we just discussed in the beginning.

// So, we know that money here is zero, but zero is a falsy value, right?
// And so, in this logical environment here in this condition, this number zero will be converted to false.
// because it's a falsy value.

// And as a result, the else block here is executed, and so on the console we see you should get a job.


// Now, if we change this to something else and it doesn't matter what number, let's say 100,
// then 100 is a truthy value, and so this means that this condition will be true.
// And so the if block will be executed.


const money = 100;
if(money){
    console.log("Don't spend them all");
}

else{
    console.log("you should get a job");
}

// Yes, indeed. Now it says don't spend it all. Great, I hope that made sense.

// And we can test this in another situation to make really sure that you understand it.
// So, another use case for this truthy and falsy values is to check if a variable is actually defined or not.

// And this might seem like a weird use case, but you will see later in the course that it actually makes
// a lot of sense sometimes to test if something actually exists or not.
// So, let's define a variable here as height,

// let height;

// if(height){
//     console.log("Yay height is defined");
// }

// else{
//     console.log('height is undefined');
// }


// we know that height is undefined in this moment, right?
// Because we didn't assign it any value yet. And we know from our little list here,
// that undefined is a falsy value.

// And therefore, just like before in the money here, this height variable here in this logical context,
// will automatically be converted to a boolean. And since height is undefined and undefined is
// a falsy value, height right here will be false.

// Therefore, else block here will be executed. But now if we assign something to it, no matter what it is,
// then we will get the other result. So, now it's true, and so now if block here is executed.


// let height;
// height = 160;

// if(height){
//     console.log("Yay height is defined");
// }

// else{
//     console.log('height is undefined');
// }


// However, with this, we can actually run into a problem. So, let's say that the height is zero for reason,
// and that's a perfectly valid number, but watch what happens when we run this code.

// Now again we get, height is undefined. So, why is that?
// And to help you know the answer by now, well it's because zero is also a falsy value.
// And so this one will also trigger this else block.

// But in this case, that's actually not what we want. So, this is kind of a bug.
// It's an error in our application because here in this if else statement,
// we didn't account for this scenario. We only accounted for the scenario
// that the height is either defined or not, but we didn't think of the height being zero, right?

// And so right now we get hight undefined, even though that's not true.
// So, this is just to illustrate an example that there can be problems using this approach.


// However, we can fix this using logical operators, which is gonna be very interesting,
// and we will talk about that a little bit later in the section.

// However we could also correct this using comparison operator

let height;
height = 0;

if(height >= 0){
    console.log("Yay height is defined");
}

else{
    console.log('height is undefined');
}