// Now for the most part working in numbers and JavaScript is pretty straightforward.
// So for example you can add by simply using the plus sign (+) and you can subtract by simply using the dash
// or the minus sign (-). When you want to multiply, you can use the asterisk (*) as the multiply sign, 
// and division is done with a single forward slash (/).

var a = 3 + 5;
var s = 6 - 2;
var m = 7 * 3;
var d = 9 / 3;

// Now the only one operator that's a little bit weird is the modulo, 
// and it's represented by a percentage sign (%) which is going to give you
// the remainder of the division.

var e = 9 % 6;   // 3


// Challenge
// ------------
// I want you to create a dog age to human age converter. So how old would your dog be if it was a human?
// And this is the formula that you're going to use 
// humanAge = (dogAge - 2) x 4 + 21

var dogAge = prompt("How old is your dog");
var humanAge = (dogAge - 2) * 4 + 21;
alert(humanAge);
