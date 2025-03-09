// Let's now explore some more features of the for loop And one of the most used applications
// of for loops is to loop through Arrays. 

// and so now we can use a for loop to loop through this array.

const alfiyaArray = [
    'Alfiya',
    'Riyaz',
    2024 - 2004,
    'Programmer',
    ['Mike', 'Steven', 'John'],
];

// And let's say for now that we wanted to individually log every element of the array to the console.

// So let's write a for loop. And as always, we start with the counter.
// And now a traditional counter variable name has been i for a long time.
// and this time we need to start it at zero. And that's because the array is zero based
// when it comes to reading elements out of the array.

// And so now updating the counter is gonna work exactly the same as before.
// So since we want to log all of the elements we need to update the counter 
// variable simply by one. And so again, we use ++.

// And now let's write what we want to loop. and remember all we want to log to the console
// is each element of the array. So console.log(alfiyaArray[i])
// And so here, instead of hard coding to zero, we are going to use the counter variable i.

// And now lets do the condition part 
// So for how long do we want to keep this loop running?
// Well, it should run when i is zero. It should also run when it's one two, three, and four.
// Because four is the last element. But when it's five, it should no longer run.
// And that's because alfiyaArray at five does not exist. so the condition should be i < 5.

// for (let i = 0; i < 5; i++){
//     console.log(alfiyaArray[i]);
// }

// But there's actually still one problem with this, which is that we hard-coded the length of the array
// here with five. So let's now say that we add another element, but it wont be loged to the console 
// because according to our condition i is no longer less than 5.

// And so the solution to this, is to not hard code the value here
// but to compute this value. So basically to get it from JavaScript itself.

// And how can we get this number?
// Well, actually this five is simply the length of the array
// And so we can simply replace the hard-coded value with a dynamically calculated one.
// and that's alfiyaArray.length.



// for (let i = 0; i <= (alfiyaArray.length - 1); i++){
//     console.log(alfiyaArray[i]);
// }

// OR

// for (let i = 0; i < alfiyaArray.length; i++){
//     console.log(alfiyaArray[i]);
// }


// Let's now also log the type of the variable.
// So type of alfiyaArray[i].


for (let i = 0; i < alfiyaArray.length; i++){
    console.log(alfiyaArray[i], typeof(alfiyaArray[i]));
}

// Alfiya string
// Riyaz string
// 20 'number'
// Programmer string
//  ['Mike', 'Steven', 'John'] 'object'     //  array is in fact an object

// And so this is in a nutshell, how we loop Arrays using the for loop.

// Now, what we did here, was only to read values from an array.
// But now let's also at the same time, create a new array which will contain
// the type of each of the elements of the alfiyaArray array.

// So to do that we start by creating a new empty array outside of the loop.
// And all we have to do is to create an array
// with the usual syntax, but without any element inside of it.

let types = [];

// And so now we have to write the same loop as before because this new array types will be based
// on the alfiyaArray array. So it's gonna have the same length.
// And so we can use the exact same loop that we used to read data from the AlfiyaArray loop
// also to construct this new types array.


// for(let i = 0; i < alfiyaArray.length; i++){
//     types[i] = typeof(alfiyaArray[i]);
// }

// console.log(types);

// This is just like doing this
// types[0] = 'String'

// So we could do it without the loop
// And so of course it also works with the
// index number here dynamically.

// But this is just one way of doing it.
// and do it in another way we could use the push method.
// So that would be types.push.

// And remember that push adds a new element to the end of the array.

// for(let i = 0; i < alfiyaArray.length; i++){
//     types.push(typeof(alfiyaArray[i]));
// }

// console.log(types);

// And to make sure we really get this let's try another, maybe more practical example.
// So let's go back to having an array of birth years.

// const years = [2004, 2006, 2007, 2008];

// And now what we want to do is to calculate the ages
// for all these four birth years here.
// And we want to store them in a new array.

// let ages = [];

// for(let i = 0; i < years.length; i++){
//     ages.push(2024 - years[i]); 
// }

// console.log(ages);


// And now to finish, let's learn about two important statements
// for loops. And that's the continue and break statement.

// And let's start with continue. So continue is to exit the current iteration of the loop
// and continue to the next one. On the other hand, break is used
// to completely terminate the whole loop.

// So let's see two quick examples for that.

const alfiya = [
    'Alfiya',
    'Riyaz',
    2024 - 2004,
    'Programmer',
    ['Mike', 'Steven', 'John'],
    true
];

// And now let's say that for some reason,
// we only wanted to print elements to the array that are strings.
// And the continue statement is perfect for this.

// Because again, with continue we can exit the current iteration of the loop.
// So what we can do here, is to say, if the type of the current element
// so of alfiya[i], is not a string, then continue.


for(let i = 0; i < alfiya.length; i++){

    if(typeof(alfiya[i]) !== 'string') continue;
    else console.log(alfiya[i], typeof(alfiya[i]));

}

// // So if the type of the current element is not a string then continue.
// Which again means, that the current iteration of the loop is exited,
// and then the next one starts immediately.


// And now finally, let me just show you how break works. And remember that what break does
// is to completely terminate the whole loop. So not just the current iteration.

// So what we want to do now, is to log no other elements after we found a number.
// So essentially after a number is found which will be the age,
// nothing else should be printed.

for(let i = 0; i < alfiya.length; i++){

    if(typeof(alfiya[i]) === 'number'){
        break;
    }
    else console.log(alfiya[i], typeof(alfiya[i]));
}

// Now this might not sound very practical, but there are some important use cases
// for continue and break. But the most important takeaway from this lecture,
// is definitely to understand, how we can loop through array using this kind of logic here.