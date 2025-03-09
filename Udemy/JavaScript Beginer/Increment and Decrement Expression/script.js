// Now so far what we have seen are all operators that exist in normal mathematics,
// but here are some that only exist in programming.

// We create a variable called x and we set it equal to 5.
// Then we change the value of x to the previous value, which is 5, plus 1.
// So x now equals 6.

// var x = 5;
// x = x + 1   // x = 6

// But in most programming languages, instead of writing out x = x + 1, you can simply write x++
// x now gets incremented by 1 and is now equal to 6. So x++ is the equivalent of saying 
// x = x + 1, and this is called the increment expression.

// x++;

// Now you can go the other way as well. You can write x--, and this is equivalent to x = x - 1.
// So the previous value of x, 5, minus 1, so x now equals 4. And this is called the decrement expression.

// x--;

// Remember that with ++ and --, you're only ever changing the value by one.
// Now, if you ever want to increase the value of x by more than one, then you can use the +=, 

// x += 2;   // this is equivalent to saying x = x + 2.

var x = 3;
var y = x++;
y += 1;
console.log(y);