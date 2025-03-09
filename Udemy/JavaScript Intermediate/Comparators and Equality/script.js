// Now these symbols, such as the greater (>) or the lesser (<) than or the three equals signs (===), 
// are known in programming as, Comparatives, because they allow us to compare two different values.

// So we've seen and used the three equals signs.
// And this is checking whether if the left-hand side is equal to the right-hand side.
// Now you can also use an exclamation mark and two equal signs (!==) to check whether if the left-hand side is
// not equal to the right-hand side, as well as whether if something is greater (>) than something else, or if something
// is lesser (<) than something else or greater than equal (>=) or lesser than equal (<=).

// And these comparatives give our conditionals, like if and else statements, a lot more flexibility.

// Now, some of you might have seen another type of equality comparator.So instead of using a 
// three-equal sign sometimes you see people using two equal signs (==).

// Now, there's a big difference however between the two of these. So let's say we have a variable 
// a and it's equal to 1 and then we have a variable b that's equal to the string 1.

var a = 1;
var b = '1';

console.log(typeof(a), typeof(b));

// So they have different data types,
// because if we say typeof(a) we get "number", and typeof(b) we get "string".

if(a === b){
    console.log("yes");
}else console.log("no");    

// no

if(a == b) console.log("yes");
else console.log("no");

// yes

// So the important difference between three equal signs and two equal signs is that even though they both
// check for equality, with three equal signs it's also checking to see that the data types are matching, 
// whereas with two equal signs it doesn't care about the data types.