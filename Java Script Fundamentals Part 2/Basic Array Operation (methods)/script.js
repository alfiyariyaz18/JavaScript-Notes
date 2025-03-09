// JavaScript has some built in functions that we can apply directly on arrays,
// And these are called methods and we can think of methods as array operations.

// So let's now learn some useful array methods.

// Now, let's start by bringing back the friends array
// from the last lecture.

const friends = ['Mike', 'John', 'Harry'];

// now let's start with a method called push.
// So the push method adds elements to the end of an array.

// friends.push('Steve');

// so push is essentially a function and we can see that by these parenthesis.
// So it's a function that we call, and we call that function attached to the friends array itself.
// And that's what this dot stands for.

//  let's now check out the friends array in the console.

// console.log(friends);  

// And indeed now we get the original array that we had before plus the Steve element.
// so this actually changed, so it mutated the original array,

// now since push is a function, we already know that we can 
// pass arguments into functions and we did that here with Steve, then the function 
// can do some work and in this case, the work that the push function does
//  is to add the element to the end of an array.

// and actually the push function does return a value and the value that it returns
// is the length of the new array. So if we want to capture that data or that value,
// we can create a new variable for that.

// So let's call it new length and let's then also log it to console.

const newLength = friends.push('Steve');
console.log(newLength);

// And indeed, it is four. 
// so most of the time we actually don't do this. So we just push an element and then thats it.
// because usually we don't immediately need the length of the new array.

// But in case we need it, we don't need to then calculat it separately, we can simply take the result
// of this function here store it into a variable and then use that.

// Great, now besides the push method which adds elements to
// the end of the array, there's also a methods to add elements
// to the beginning of the array so that is the unshift method.

// so let's say we wanted to add Luis right to the beginning of this friends array.

friends.unshift('Luis');

// So again, let's check it out and so now it should have five elements and the first one should be Luis.

console.log(friends);

// And yeah, it is and just like the push method, the unshift method also returns the length of the new array.
// But in this case we are just not saving it because we don't really need it.

// console.log(friends.unshift('Luis'))  //  5

// Next up we also have methods to remove elements from arrays.

// And let's start with the pop method which is basically the opposite of the push method.
// So this means that pop will remove the last element of the array.
// And this time we don't need to pass in any argument and that's because 
// there is no information needed really to just take out the last element.

// friends.pop();
// console.log(friends);

// And indeed you see that Steve is actually gone.
// And if we do it twice for example, which of course we can 
// then Harry should also be gone

// friends.pop();
// friends.pop();
// console.log(friends);

// And indeed, we removed Steve and Harry.

// Now, again this pop method also returns something, but this one doesn't return the length of the new array
// but instead, it returns the removed element. And so that can sometimes be useful.

// so let's call this one popped, And let's log it to the console.

friends.pop();
const popped = friends.pop();

console.log(popped);   //  Harry
console.log(friends);


// And finally, let's also remove the first element from the array 
// and that's using the shift method.

friends.shift();
console.log(friends);  // the first element Luis is removed

// Once again we didn't need any arguments and once again
// this method here will return the element that was removed,
// so if we need that, we can capture it.


// Next up, there is a very useful method that tells us
// in which position a certain element is in the array.
// And let's create a brand new Array for this

const years = [1979, 1983, 2004, 2008, 2011];

// And what we want to log to the console now is years dot indexOf and then we pass the element,
// which we want to reference. So let's say we want 2004.
// So this should return the index at which this element is located, so we know that 2004
// is right now element number two. and we actually can see that here in the console.

console.log(years.indexOf(2004));  // 2

// Now, if we try the same thing for an element that
// is not in there, let's say 2024, we will get minus one.

console.log(years.indexOf(2024));  //  -1


// Now there is a very similar method to the indexOf, but which is a bit more modern
// and in my opinion also more useful. So this one is an ES6 method and it's called includes.

// So includes, instead of returning the index of the element, it will simply 
// return true if the element is in the array and false if it's not.

console.log(years.includes(2011));   // true
console.log(years.includes(2024));   // false

// And this method actually uses strict equality for this check.

console.log(years.includes(2004));   //  true
console.log(years.includes('2004'));  //  false

// And that's because it is testing with strict equality
// which means that it does not do type coercion.
// And therefore, 2004 to string is different from 2004 to number.


// And so we can use the include method to write conditionals.
// So that's one of the very useful application of this method.

// For example, let's say if friends dot includes Mike and then
// if so we can log to the console, you have a friend called Mike.

if (friends.includes('Mike')){
    console.log("You have a friend called Mike.");
}

// So we already know that this here (friends.includes('Mike')) returns a Boolean.
// and so only if this is true. So if the array does include a string with Mike,
// only then this code (console.log("You have a friend called Mike.")) is executed.


