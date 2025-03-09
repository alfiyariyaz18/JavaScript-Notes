// Let's now talk about our first data structure. And that's gonna be Arrays.

// And let's say, I want to store my friends' names in variables so that I could use them later in my program.
// And so with the knowledge that we have so far this is how we would do it.

const friend1 = 'Sam';
const friend2 = 'Mike';
const friend3 = 'John';
const friend4 = 'Harry';


// Now this isn't really fun to do, right? Because imagine that
// we actually wanted to represent 10 friends and then we would have to create 10 variables.

// Instead, wouldn't it be great to essentially bundle all of these values together
// into some bigger container? Well, that's why we have data structures in JavaScript.

// And Arrays are such a data structure. So an Array is like a big container
// into which we can throw variables and then later reference them.

// And that's super important. Because programming is most of the time, all about data.

// So we get data from somewhere we store and process data and then we give some data back.
// And that data, it has to go somewhere. So it has to be stored in some place.

// And for that, we use data structures, just like Arrays. So in case we have more, than just a single value.
// The two most important data structures at least in JavaScript, are Arrays and Objects.

// And so now let's learn all about Arrays.

// let's create a variable, which I'm gonna call a friend
// and then we use the brackets, to create a new Array.
// And then in there, we can put different values, separated by commas.

const friends = ['Sam', 'Mike', 'John', 'Harry'];

// And now let's take a look at it in the console.

console.log(friends);

// And that is the absolute basics about Arrays. So that's how we create one.
// but there's actually another way.

// So let's say we wanted an Array of years. And so instead of the brackets,
// we could also write new, Array and then parenthesis.
// And in there we would then specify all our values.

const years = new Array(2004, 2008, 2011);

// So an array can hold as many values as we want.
// And also values of any type that we'd like.

// And so here we used a different way of creating the Array, which was using this Array function.
// So you see that it's a function because we called it here basically using these parenthesis.
// And we also needed to use the new keyword because otherwise it's not gonna work.

// But anyway, it's way more usual to just use the brackets
// like I did up here, which is called the literal syntax.

// So now we know how to create Arrays. So basically how to put elements into an Array,
// but of course we need to have a way to get them out.
// And for that, we use the square bracket syntax again.

// So let's say that we want to log to the console,
// the first element of this friend's Array.

// So console.log, and now we write friends. So that's the name of the Array.
// And then we use the square brackets and then the number zero.
// That's because Arrays are zero-based, which means that the first element
// is the element number zero.

console.log(friends[0]);

// And now let's say we wanted Harry here as well.

console.log(friends[3]);

// Now we can also get the actual number of elements that is in the Array.
// So let's also log that one to the console. And this one works by saying,
// friends.length

// And this dot length is something called a property which we're gonna talk about a little bit later
// in the section when we talk about objects. Anyway what matters, is that this is gonna be the exact
// amount of elements that is in the Array. And it's not zero based.

// So it will not be three, even though the last one here is element number three.
// Instead it really gives us the number of elements in the Array.
// So we should expect this to log four.

console.log(friends.length);   //  4

// Now we can use this to automatically get the last element of any Array.
// And that is useful so that we don't have to count
// how many elements are in the Array. So let me show you how we could do that.

// So console.log Friends, and then remember to retrieve an element from the Array,
// we need to use square brackets. And then to get the index of the last element in the Array
// all we need to do, is friends.length minus one.

// And that's because again, friends.length is not zero based.
// And so we always need to subtract one from this number here.

// So what this also means, is that inside of these brackets, we can put any expression.
// It doesn't just have to be a number. and remember that an expression
// is something that produces a value.

// So it will compute friends.length which is four, and then minus one, which is three,
// and then it will get friends at position three.

console.log(friends[friends.length - 1]);

// And that's also one of the reasons why it's important that you know
// what is an expression and what is a statement.
// Because once again, we could not put a statement inside of these square brackets.


// And moving on, there is more stuff that we can do. So this square bracket syntax, that we used here
// is not only for retrieving elements from the Array but we can also replace the existing element 
// with a new element in the Array.

// So let's say that for some reason, I'm no longer friends with John
// and that I want to replace him with some other friends.
// And so now we can change or mutate the Array

// So we can say friends at position number two should be equal to Jay.

friends[2] = 'Jay';

// And if we now log this friends Array to the console, then we should already see the new Array.

console.log(friends);

// and indeed the element number two is now replaced with Jay.

// But Didn't I say in the last section, that variables declared with const, cannot be changed.
// And we did in fact declare the friends variable here with const.

// But I was still able to change one element of the Array here from John to Jay.
// Well that's because primitive values, are immutable.
// But an Array is not a primitive value.

// And so we can actually always change it so we can mutate it.
// And it works this way because of the way that JavaScript stores things in memory.

// So what you need to know for now is that we can actually mutate Arrays
// even though they were declared with const. Now what we can not do
// is to actually replace the entire Array. So we cannot do this.

// We cannot say that the entire friends' Array should now be Bob and Ellis.
// That would be illegal.

// friends = ['Bob', 'Ellis'];   //  TypeError: Assignment to constant variable.


// Next up, I want to show you that an Array can actually hold values with different types
// all at the same time.  So let's create an Array which holds
// all kinds of information about me.

// So let's say Alfiya, so that would be the first name
// then the last name, then the age. And here we can actually calculate the age
// from other values. And that works because in each position,
// JavaScript simply expects an expression.

// const alfiya = ['Alfiya', 'Riyaz', 2024 - 2004]

// So this here (2024 - 2004) will produce a value. And so that's the value that will then be stored
// at position number two of the new Array.

// And that also works for variables. So we could, for example do
// first name equal Alfiya. And then here instead of literally writing that,
// we could use this variable name. And so this would then be replaced, with the actual string.

const firstName = 'Alfiya';
// const alfiya = [firstName, 'Riyaz', (2024 - 2004)];

// So let's put some more data and actually we could even put other Arrays
// inside of an Array. So let's put the friends Array here,
// in the alfiya Array. 

const alfiya = [firstName, 'Riyaz', (2024 - 2004), 'Programmer', friends];

// And then with this, we have all the relevant data about Alfiya
// in one handy data structure. And that's really convenient because
// then we don't have to create one variable for each of the data points.

// So let's, of course, inspect it now in the console
// so that you can see that all of these expressions here basically (firstName, (2024 - 2004), friends)
// so all of them are gonna be replaced with the values that they produce.

console.log(alfiya);

// So these are the very fundamentals of Arrays in JavaScript.

// And now just to finish, let's work on a very small Array exercise.
// So that we can see why Arrays are actually so useful.
// And to do that, let's bring back our old calcAge function.

// Exercise
const calcAge = function(birthYear){
    return 2024 - birthYear;
}

// And now let's say that we have an Array of birth years.
// And then we want to calculate the ages for some of them.

const birthYears = new Array(1979, 1983, 2004, 2008, 2011);

// And now we will be able to use the calcAge function
// and then store the results of calculating the ages
// of some of these years into a new variable.

// So let's see how
// So we need the age of first, second and last birthyears

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[years.length - 1]);

// And now we can quickly check out if this actually worked.

console.log(age1, age2, age3);  // 45 41 20

// So we got three values here, which are these three ages.

// But we can take this even a little bit further.
// So since we started with an Array, it's usually a good idea, to also end up with a new Array.

// So let's create an Array called ages. and now what should I put in here?
// Well, remember how I said  that any position of the Array
// simply needs to be an expression. So something that produces a value.

// And as we already know, this here (calcAge(birthYears[0])) produces a value as well.
// So basically we can place function calls into an Array, because they will produce a value.

const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[birthYears.length - 1])];
console.log(ages);

// And indeed we get the three same values, that we had up here separately.
// And this works because JavaScript will start by
// running these three function calls here
// and then place all the results in the Array afterwards.

// We could also do this in the simplified way

// const ages = [age1, age2, age3];